import React from "react";
import UnifiedSlider from "./UnifiedSlider";
import { DINE_IN_MENU_ITEMS } from "@/contents/SliderContent";

const DineInMenuSlider: React.FC = () => {
  const sliderItems = DINE_IN_MENU_ITEMS.map((item) => ({
    content: (
      <div className="p-2">
        <div className="bg-red-600 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
          <img
            src={item.image}
            alt={`Biryani Darbaar - ${item.label}`}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-white">
              {item.label}
            </h3>
          </div>
        </div>
      </div>
    ),
  }));

  return (
    <div className="md:w-full w-11/12 md:ml-0 ml-4 px-4 md:px-8 lg:px-12 py-8 relative">
      <h2 className="text-center text-2xl font-bold mb-6 text-neutral-800">
        DINE IN MENU
      </h2>
      <UnifiedSlider
        items={sliderItems}
        slidesPerView={4}
        spaceBetween={16}
        autoplay={false}
        loop={true}
        pagination={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      />
    </div>
  );
};

export default DineInMenuSlider;
