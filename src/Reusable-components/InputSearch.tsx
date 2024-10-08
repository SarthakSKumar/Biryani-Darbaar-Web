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
    <div className={clsx("relative flex items-center", className)}>
      <input
        placeholder={placeholder}
        type="text"
        className="rounded-full border border-gray-800 bg-white pl-10 pr-10 py-2 w-69"
      />
      <Search className="absolute left-3" size={20} color="#000" />
      <div className="absolute ml-[366px] bg-primary rounded-full p-1 cursor-pointer">
        {/* <a href=""> */}
        <Search size={20} color="#fff" />
        {/* </a> */}
      </div>
    </div>
  );
};

export default InputSearch;
