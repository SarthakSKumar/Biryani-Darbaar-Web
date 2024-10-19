import SpecialOfferComponent from "../Reusable-components/SpecialOfferComponent";
import ArchedCard from "../Reusable-components/ArchedCard";
import chickenbiryani from "../assets/chickenbiryani.svg";
import chickentikka from "../assets/chickentikka.svg";
import haleem from "../assets/haleem.svg";
import chicken65 from "../assets/chicken65.svg";
import "./home.css";
import DineInMenuSlider from "../Reusable-components/DineInMenuSlider";

const SpecialOffer = () => {
  

  return (
    <>
      {/* Special Offer Component with animation */}

        <SpecialOfferComponent />
      
      <div className="mt-14 text-center">
        <div className="mt-5 flex flex-wrap justify-evenly gap-6 ">
          {[chickenbiryani, chickentikka, haleem, chicken65].map((item, index) => (
            <ArchedCard
              key={index}
              image={item}
              title="Delicious Dish"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
              buttonTitle="Order Now"
              price="$28.00"
              className="h-79"
            />
          ))}
        </div>
      </div>
      <DineInMenuSlider />
    </>
  );
};

export default SpecialOffer;
