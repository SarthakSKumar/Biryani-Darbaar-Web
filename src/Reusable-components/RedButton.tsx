import React from "react";
import clsx from "clsx"; // You can use clsx or classnames for safely merging classes

interface RedButtonProps {
  name: string;
  variant: "active" | "inactive";
  className?: string;
  image?: string;
  alt?: string;
  // Optional external className prop
}

const RedButton: React.FC<RedButtonProps> = ({
  name,
  variant,
  className,
  image,
  alt,
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

  if (!image) {
    return <button className={buttonClasses}>{name}</button>;
  }
  return (
    <div className={buttonClasses}>
      <div className="flex flex-wrap ">
        <div className="w-9 h-9 bg-white flex justify-center items-center rounded-full mr-5 ">
          <img src={image} alt={alt} />
        </div>
        <div className="mt-1">{name}</div>
      </div>
    </div>
  );
};

export default RedButton;
