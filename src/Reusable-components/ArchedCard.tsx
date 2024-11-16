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
        "relative p-4 rounded-lg  text-center h-54 w-72 z-0 dp:ml-10",
        className
      )}
    >
      <img
        src={arch}
        alt=""
        className="absolute inset-0  w-full desktop:w-full desktop:h-full object-cover z-10  laptop:w-60 "
      />
      <div className="relative z-20 flex flex-col items-center justify-center h-full">
        <div className="flex justify-center mt-0 mb-4">
          <img
            src={image}
            alt={title}
            className="rounded-full  w-40 h-40 desktop:w-40 desktop:h-40 object-cover laptop:w-32 laptop:h-32 laptop:mr-12 laptop:-mt-20 desktop:mr-0 desktop:mt-0 "
          />
        </div>
        <div className="relative text-2xl font-bold desktop:mb-2 desktop:ml-0 laptop:-ml-12">
          <img src={priceb} alt="" className="desktop:w-40 desktop:h-14 laptop:w-36 w-40 h-14 z-20" />
          <span className="absolute inset-0 flex items-center justify-center text-black mb-1 z-30 desktop:text-2xl laptop:text-xl ">
            {price}
          </span>
        </div>
        <h2 className="text-xl desktop:text-xl laptop:text-lg font-semibold text-primary mb-2 desktop:mr-0 laptop:mr-12">{title}</h2>
        <p className="text-gray-500 mb-4 laptop:-ml-12 laptop:w-56 desktop:w-auto laptop:text-sm desktop:ml-0 desktop:text-base">{description}</p>
      </div>
      <div className="relative z-30 -mt-6 laptop:mr-10 desktop:mr-0 laptop:-mt-28 desktop:-mt-6">
        <RedButton className="mx-auto" variant="active" name={buttonTitle} />
      </div>
    </div>
  );
};

export default CardComponent;
