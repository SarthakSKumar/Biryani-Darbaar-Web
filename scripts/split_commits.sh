#!/usr/bin/env bash
set -euo pipefail

# Script to split current modified/untracked files into 54 commits.
# Distribution: most commits will get 2 files, a few will get 1 file so total commits == 54.
# It creates Conventional Commit-style messages: <type>(<scope>): message

commits=54

mapfile -t files < <(git ls-files -m -o --exclude-standard)
total=${#files[@]}

if [ "$total" -eq 0 ]; then
  echo "No modified or untracked files found. Nothing to commit."
  exit 1
fi

if [ "$total" -lt "$commits" ]; then
  echo "Only $total files but requested $commits commits. Reducing commits to $total (one file per commit)."
  commits=$total
fi

extra=$(( total - commits ))
# extra is how many commits will receive 2 files rather than 1

types=(feat fix chore refactor style docs config deps)

i=0
for ((c=0; c<commits; c++)); do
  take=1
  if [ "$c" -lt "$extra" ]; then
    take=2
  fi

  batch=()
  for ((k=0; k<take; k++)); do
    if [ "$i" -ge "$total" ]; then
      break
    fi
    batch+=("${files[i]}")
    i=$((i+1))
  done

  if [ ${#batch[@]} -eq 0 ]; then
    break
  fi

  # derive scope from first path: use second path segment (e.g., src/Reusable-components -> Reusable-components)
  first="${batch[0]}"
  scope="$(echo "$first" | awk -F'/' '{print $2}')"
  if [ -z "$scope" ] || [ "$scope" = "" ]; then
    scope="root"
  fi

  # choose a type in round-robin
  type_index=$(( c % ${#types[@]} ))
  type="${types[$type_index]}"

  # compose a short list of basenames for the message
  names=()
  for f in "${batch[@]}"; do
    names+=("$(basename "$f")")
  done
  msg_files="$(IFS=", "; echo "${names[*]}")"

  commit_msg="$type($scope): add $msg_files"

  echo "Staging ${#batch[@]} file(s) for commit $((c+1))/$commits:"
  for bf in "${batch[@]}"; do
    echo "  - $bf"
  done

  # stage and commit (use -- to be safe with leading dashes, pass array to preserve spaces)
  git add -- "${batch[@]}"

  # if nothing was staged (files may have been deleted or already committed), skip this commit
  staged=$(git diff --cached --name-only -- "${batch[@]}" || true)
  if [ -z "$staged" ]; then
    echo "No staged changes for this batch (skipping commit): $msg_files"
    # ensure we don't leave any stale index entries for these paths
    git reset -- "${batch[@]}" >/dev/null 2>&1 || true
    echo
    continue
  fi

  git commit -m "$commit_msg"

  echo "Committed: $commit_msg"
  echo
done

echo "Done: created $commits commits covering $total files."
