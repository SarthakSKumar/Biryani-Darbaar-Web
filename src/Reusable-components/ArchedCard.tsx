import React from "react";
import RedButton from "./RedButton"; // Assuming RedButton is already created
import clsx from "clsx";
import arch from "../assets/archy.png";
import priceb from "../assets/price.png";

interface CardComponentProps {
  image: string;
  title: string;
  description: string;
  buttonTitle: string;
  price: string;
  className?: string; // Optional external className
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
        "relative p-4 rounded-lg  text-center h-54 w-72 z-0",
        className
      )}
    >
      <img
        src={arch}
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-10"
      />
      <div className="relative z-20 flex flex-col items-center justify-center h-full">
        <div className="flex justify-center mt-0 mb-4">
          <img
            src={image}
            alt={title}
            className="rounded-full w-40 h-40 object-cover"
          />
        </div>
        <div className="relative text-2xl font-bold mb-2">
          <img src={priceb} alt="" className="w-40 h-14 z-20" />
          <span className="absolute inset-0 flex items-center justify-center text-black mb-1 z-30">
            {price}
          </span>
        </div>
        <h2 className="text-xl font-semibold text-primary mb-2">{title}</h2>
        <p className="text-gray-500 mb-4">{description}</p>
      </div>
      <div className="relative z-30 -mt-6">
        <RedButton className="mx-auto" variant="active" name={buttonTitle} />
      </div>
    </div>
  );
};

export default CardComponent;
