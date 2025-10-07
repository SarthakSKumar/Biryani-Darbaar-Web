import React, { useState } from "react";
import { Search } from "lucide-react";
import clsx from "clsx";

interface InputSearchProps {
  placeholder: string;
  className?: string;
  onSearch: (query: string) => void;
}

const InputSearch: React.FC<InputSearchProps> = ({
  placeholder,
  className,
  onSearch,
}) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div
      className={clsx(
        "flex items-center border-2 border-neutral-300 z-50 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-2xl",
        className
      )}
    >
      <div className="pl-5 pr-3 py-3">
        <Search size={22} className="text-neutral-400" />
      </div>
      <input
        placeholder={placeholder}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        className="flex-1 py-3 px-2 rounded-full outline-none text-neutral-700 placeholder:text-neutral-400"
      />
      <button
        className="bg-primary text-white px-6 py-3 rounded-full mr-2 hover:bg-red-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={handleSearch}
        disabled={!query.trim()}
      >
        <Search size={22} color="#fff" />
      </button>
    </div>
  );
};

export default InputSearch;
