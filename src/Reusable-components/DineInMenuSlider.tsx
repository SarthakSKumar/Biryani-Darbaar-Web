import Slider from "react-slick";
import chickencurries from "../assets/chickencurries.png";
import kebab from "../assets/kebab.png";
import starters from "../assets/starters.png";

const DineInMenuSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const menuItems = [
    { image: starters, label: "STARTERS" },
    { image: kebab, label: "CHARCOAL KEBABS" },
    { image: chickencurries, label: "CHICKEN CURRIES" },
    { image: starters, label: "STARTERS" },
    { image: kebab, label: "CHARCOAL KEBABS" },
    { image: chickencurries, label: "CHICKEN CURRIES" },
    { image: starters, label: "STARTERS" },
    { image: kebab, label: "CHARCOAL KEBABS" },
    { image: chickencurries, label: "CHICKEN CURRIES" },

  ];

  return (
    <div className="px-4 py-8 mt-5">
      <h2 className="text-2xl font-bold mb-16">DINE IN MENU</h2>
      <Slider {...settings}>
        {menuItems.map((item, index) => (
          <div key={index} className="px-2">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={item.image}
                alt={item.label}
                className="w-3/4 h-auto object-cover"
              />
              <div className="bg-red-600 text-white text-center py-2 w-3/4">
                {item.label}
              </div>
              
            </div>
            
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DineInMenuSlider;
