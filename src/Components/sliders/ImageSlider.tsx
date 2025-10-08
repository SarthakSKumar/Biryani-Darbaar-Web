"use client";
import React from "react";
import { Plus } from "lucide-react";
import UnifiedSlider from "./UnifiedSlider";

const ImageSlider: React.FC = () => {
  const offers = [
    {
      image: "/assets/images/slider/slider-image-1.png",
      title: "First Order Discount",
      subtitle: "Biryani Darbaar in Athol Park",
      discount: "-20%",
    },
    {
      image: "/assets/images/slider/slider-image-2.jpg",
      title: "Biryani Discount",
      subtitle: "Biryani Darbaar in Athol Park",
      discount: "-20%",
    },
    {
      image: "/assets/images/slider/slider-image-3.jpg",
      title: "Haleem Offer",
      subtitle: "Biryani Darbaar in Athol Park",
      discount: "-15%",
    },
  ];

  const sliderItems = offers.map((offer) => ({
    content: (
      <div className="relative rounded-lg overflow-hidden border border-neutral-200 hover:border-primary transition-all group">
        {/* Image with overlay gradient for better text contrast */}
        <div className="relative">
          <img
            src={offer.image}
            alt={`Biryani Darbaar - ${offer.title}`}
            className="w-full h-auto object-cover"
          />
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>

        {/* Discount Badge */}
        <div className="absolute top-4 right-4 bg-black/90 backdrop-blur-sm text-white text-sm font-bold px-4 py-3 rounded-lg border border-neutral-700">
          {offer.discount}
        </div>

        {/* Text Content with improved contrast */}
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-red-500 text-sm font-semibold mb-1 drop-shadow-lg">
            {offer.subtitle}
          </p>
          <h3 className="text-white text-2xl md:text-3xl font-bold drop-shadow-2xl">
            {offer.title}
          </h3>
        </div>

        {/* Add Button */}
        <button
          className="absolute bottom-4 right-4 bg-white hover:bg-red-500 text-neutral-900 hover:text-white p-2 rounded-full border border-neutral-200 hover:border-red-500 transition-all transform hover:scale-110"
          aria-label="Add offer"
        >
          <Plus size={20} className="stroke-current" strokeWidth={3} />
        </button>
      </div>
    ),
  }));

  return (
    <UnifiedSlider
      items={sliderItems}
      slidesPerView={3}
      spaceBetween={24}
      autoplay={false}
      loop={true}
      pagination={true}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    />
  );
};

export default ImageSlider;
