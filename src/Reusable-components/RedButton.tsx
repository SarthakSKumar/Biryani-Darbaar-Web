import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

interface RedButtonProps {
  name: string;
  variant: "active" | "inactive";
  className?: string;
  image?: string;
  alt?: string;
  onClick?: () => void;
}

const RedButton: React.FC<RedButtonProps> = ({
  name,
  variant,
  className,
  image,
  alt,
  onClick,
}) => {
  const baseClasses =
    "px-6 py-3 cursor-pointer transition-all duration-300 rounded-lg active:scale-95 font-medium border-2";
  const activeClasses = "bg-primary text-white hover:bg-red-600 border-primary";
  const inactiveClasses =
    "bg-white text-neutral-600 hover:bg-gray-50 border-gray-300 hover:border-gray-400";

  const buttonClasses = clsx(
    baseClasses,
    variant === "active" ? activeClasses : inactiveClasses,
    className
  );

  // Render button without image
  if (!image) {
    return (
      <motion.button
        className={buttonClasses}
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {name}
      </motion.button>
    );
  }

  // Render button with image
  return (
    <motion.div
      className={buttonClasses}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-white flex justify-center items-center rounded-full shadow-sm">
          <img src={image} alt={alt} className="w-6 h-6 object-contain" />
        </div>
        <span className="font-medium">{name}</span>
      </div>
    </motion.div>
  );
};

export default RedButton;
