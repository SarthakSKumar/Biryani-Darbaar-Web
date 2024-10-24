import React from "react";
import Slider from "react-slick";
import kebab from "../assets/kebab.png";
import chickencurries from "../assets/chickencurries.png";
import starters from "../assets/starters.png"

// Interface for menu items
interface MenuItem {
  image: string;
  label: string;
}

// Menu items data (Replace image paths with real image URLs)
const menuItems: MenuItem[] = [
  {
    image: starters, // Update with your actual image paths
    label: "STARTERS",
  },
  {
    image: kebab,
    label: "CHARCOAL KEBABS",
  },
  {
    image: chickencurries,
    label: "CHICKEN CURRIES",
  },
  {
    image: chickencurries,
    label: "BIRYANI'S",
  },
];

const DineInMenuSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablet size
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile size
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // Smaller mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full px-4 md:px-8 lg:px-12 py-8">
      <h2 className="text-center text-2xl font-bold mb-6 text-gray-800">DINE IN MENU</h2>
      <Slider {...settings}>
        {menuItems.map((item, index) => (
          <div key={index} className="p-2">
            <div className="bg-red-600 rounded-lg shadow-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-white">
                  {item.label}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DineInMenuSlider;
