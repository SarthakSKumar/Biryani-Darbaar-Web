import { Link } from "react-router-dom";
import React from "react";
import clsx from "clsx";

interface CardComponentProps {
  image: string;
  title: string;
  description: string;
  buttonTitle: string;
  price: string;
  className?: string;
}
const CardComponent: React.FC<CardComponentProps> = ({
  image,
  title,
  description,
  buttonTitle,
  price,
  className,
}) => {
  return (
    <div
      className={clsx(
        "relative w-full max-w-sm transition-transform opacity-90 hover:opacity-100 duration-300",
        className
      )}
    >
      {/* Card with SVG Arch Border for accurate shape */}
      <div className="relative bg-white pb-8 pt-12 px-6 flex flex-col items-center rounded-b-xl overflow-hidden">
        <svg
          className="absolute left-0 top-0 w-full h-full pointer-events-none"
          style={{ height: "100%", width: "100%", top: 0}}
          viewBox="0 0 400 600"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M20,595 L20,180 C20,150 60,130 100,125 L100,110 C100,90 120,30 200,5 C280,30 300,90 300,110 L300,125 C340,130 380,150 380,180 L380,595 L20,595 Z"
            fill="none"
            stroke="#f4a261"
            strokeWidth="2.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        {/* Product Image */}
        <div className="relative w-40 h-40 mt-">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-full border-4 border-white"
          />
        </div>

        {/* Price Badge with CSS Shape */}
        <div className="relative mb-4 flex justify-center"></div>
        <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-yellow-300 via-orange-200 to-yellow-400 shadow-md text-neutral-900 font-extrabold text-xl border-2 border-yellow-500">
          {price}
        </span>

        {/* Title */}
        <h2 className="text-xl font-bold text-red-600 mt-3 mb-2 text-center line-clamp-1">
          {title}
        </h2>

        {/* Description */}
        <p className="text-sm text-neutral-600 text-center mb-4 line-clamp-2 px-2">
          {description}
        </p>

        {/* Order Button */}
        <Link to="/Order" className="w-full py-2 px-4">
          <button className="w-full px-6 py-3 bg-primary text-white rounded-full hover:bg-red-600 transition-all font-semibold border border-primary">
            {buttonTitle}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardComponent;
