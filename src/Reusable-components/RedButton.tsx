import React from "react";
import clsx from "clsx";

interface RedButtonProps {
  name: string;
  variant: "active" | "inactive";
  className?: string;
  image?: string;
  alt?: string;
  onClick?: () => void; // Adding the onClick prop
}

const RedButton: React.FC<RedButtonProps> = ({
  name,
  variant,
  className,
  image,
  alt,
  onClick, // Destructure onClick prop
}) => {
  const baseClasses =
    "px-4 py-2 w-36 cursor-pointer transition-colors duration-300 rounded-full";
  const activeClasses = "bg-primary text-white hover:bg-yellow-500";
  const inactiveClasses =
    "bg-white text-gray-500 border border-gray-500 hover:bg-white";

  const buttonClasses = clsx(
    baseClasses,
    variant === "active" ? activeClasses : inactiveClasses,
    className // Merge with external className
  );

  // Conditionally render button based on whether image is provided
  if (!image) {
    return (
      <button className={buttonClasses} onClick={onClick}>
        {name}
      </button>
    );
  }

  return (
    <div className={buttonClasses} onClick={onClick}>
      <div className="flex md:flex-wrap">
        <div className="w-9 h-9 bg-white flex justify-center items-center rounded-full lg:mr-21 mr-5 -ml-3 -mt-[2px]">
          <img src={image} alt={alt} className=""/>
        </div>
        <div className=" md:mt-1 samsung:mt-2 samsung:ml-2">{name}</div>
      </div>
    </div>
  );
};

export default RedButton;
