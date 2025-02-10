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
    onSearch(query);
  };

  return (
    <div
      className={clsx(
        "flex items-center border border-gray-800 md:border-gray-800 rounded-full bg-white md:w-1/2 mt-10 dp:w-3/5",
        className
      )}
    >
      <div className="p-2">
        <Search size={20} color="#000" />
      </div>
      <input
        placeholder={placeholder}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 py-2 md:px-4 px-1 rounded-full outline-none"
      />
      <button
        className="bg-primary text-white p-2 rounded-full mr-2"
        onClick={handleSearch}
      >
        <Search size={20} color="#fff" />
      </button>
    </div>
  );
};

export default InputSearch;
