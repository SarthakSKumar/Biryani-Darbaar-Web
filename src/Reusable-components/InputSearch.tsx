import React from "react";
import { Search } from "lucide-react";
import clsx from "clsx";

interface InputSearchProps {
  placeholder: string;
  className?: string;
}

const InputSearch: React.FC<InputSearchProps> = ({
  placeholder,
  className,
}) => {
  return (
    <div
      className={clsx(
        "flex items-center border border-gray-800 rounded-full bg-white w-1/2",
        className
      )}
    >
      <div className="p-2">
        <Search size={20} color="#000" />
      </div>
      <input
        placeholder={placeholder}
        type="text"
        className="flex-1 py-2 px-4 rounded-full outline-none"
      />
      <button className="bg-primary text-white p-2 rounded-full mr-2">
        <Search size={20} color="#fff" />
      </button>
    </div>
  );
};

export default InputSearch;
