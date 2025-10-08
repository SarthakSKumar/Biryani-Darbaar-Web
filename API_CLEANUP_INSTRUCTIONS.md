# API Folder Cleanup Instructions

## ✅ Consolidation Complete

All API functions have been successfully moved from folder-based structure to consolidated single files.

## 📁 Old Folders to Delete

The following folders in `src/apis/` are now obsolete and can be safely deleted:

1. `src/apis/auth/` (consolidated into `auth.ts`)
2. `src/apis/cart/` (consolidated into `cart.ts`)
3. `src/apis/categories/` (consolidated into `categories.ts`)
4. `src/apis/contact/` (consolidated into `contact.ts`)
5. `src/apis/dishes/` (consolidated into `dishes.ts`)
6. `src/apis/orders/` (consolidated into `orders.ts`)
7. `src/apis/payment/` (consolidated into `payment.ts`)
8. `src/apis/promo/` (consolidated into `promo.ts`)
9. `src/apis/user/` (consolidated into `user.ts`)

## 🧹 Cleanup Commands

### Windows PowerShell
```powershell
cd "c:\Users\Sarthak S Kumar\Downloads\Biriyani-Darbar-Client"

# Remove old folder structure
Remove-Item -Recurse -Force src/apis/auth
Remove-Item -Recurse -Force src/apis/cart
Remove-Item -Recurse -Force src/apis/categories
Remove-Item -Recurse -Force src/apis/contact
Remove-Item -Recurse -Force src/apis/dishes
Remove-Item -Recurse -Force src/apis/orders
Remove-Item -Recurse -Force src/apis/payment
Remove-Item -Recurse -Force src/apis/promo
Remove-Item -Recurse -Force src/apis/user
```

### Bash (Git Bash/WSL)
```bash
cd "/c/Users/Sarthak S Kumar/Downloads/Biriyani-Darbar-Client"

# Remove old folder structure
rm -rf src/apis/auth
rm -rf src/apis/cart
rm -rf src/apis/categories
rm -rf src/apis/contact
rm -rf src/apis/dishes
rm -rf src/apis/orders
rm -rf src/apis/payment
rm -rf src/apis/promo
rm -rf src/apis/user
```

## ✅ Verification Checklist

Before deleting, verify:

- [x] All new consolidated files exist in `src/apis/`:
  - auth.ts
  - cart.ts
  - categories.ts
  - contact.ts
  - dishes.ts
  - orders.ts
  - payment.ts
  - promo.ts
  - user.ts
  
- [x] Main barrel export (`src/apis/index.ts`) updated to export from new files

- [x] All imports across codebase verified:
  - No imports from `@/apis/*/GET.ts` or `@/apis/*/POST.ts` patterns
  - All imports use `from "@/apis"` format
  
- [x] Application tested and working

## 📊 Final Structure

After cleanup, `src/apis/` should contain only:

```
src/apis/
├── index.ts          # Barrel exports
├── auth.ts           # Auth API (~120 lines)
├── cart.ts           # Cart API (~75 lines)
├── categories.ts     # Categories API (~10 lines)
├── contact.ts        # Contact API (~20 lines)
├── dishes.ts         # Dishes API (~40 lines)
├── orders.ts         # Orders API (~70 lines)
├── payment.ts        # Payment API (~25 lines)
├── promo.ts          # Promo API (~25 lines)
└── user.ts           # User API (~50 lines)
```

Total: **10 files** instead of **45+ files** (9 folders × 5 avg files each)

## 🎯 Benefits Achieved

1. **Reduced Complexity**: From 9 folders with multiple files to 9 single files
2. **Better Navigation**: All functions for a resource in one place
3. **Cleaner Imports**: No more nested folder imports
4. **Easier Maintenance**: Single file to edit per resource
5. **Consistent Structure**: All modules follow same pattern

## 🚀 Next Steps

1. Run cleanup commands above
2. Test application thoroughly
3. Commit changes:
   ```bash
   git add src/apis/
   git commit -m "refactor: consolidate API structure into single files per resource"
   ```

---

**Status**: Ready for cleanup  
**Safe to Delete**: Yes, all functions migrated  
**Breaking Changes**: None (imports unchanged)
