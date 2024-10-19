import ArchedCard from "../Reusable-components/ArchedCard";
import chickenbiryani from "../assets/chickenbiryani.svg";
import chickentikka from "../assets/chickentikka.svg";
import haleem from "../assets/haleem.svg";
import chicken65 from "../assets/chicken65.svg";
import SpecialOfferComponent from "../Reusable-components/SpecialOfferComponent";
import InfoPage from "../Reusable-components/InfoPage";
import LocationInfo from "../Reusable-components/LocationInfo";
import CustomerReviews from "../Reusable-components/CustomerReview";
import DineInMenuSlider from "../Reusable-components/DineInMenuSlider";
const Menu = () => {
  return (
    <>
    <SpecialOfferComponent />
    <div className="mt-24">
        <div className="text-4xl font-bold ml-8">
          <span className="text-primary">Starters</span>
        </div>
        <div className="mt-5 text-sm md:text-base ml-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </div>
        <div className="mt-24 flex flex-wrap justify-evenly gap-6 ">
          {[chickenbiryani, chickentikka, haleem, chicken65,chickenbiryani, chickentikka, haleem, chicken65].map((item, index) => (
            <ArchedCard
              key={index}
              image={item}
              title="Delicious Dish"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
              buttonTitle="Order Now"
              price="$28.00"
              className="h-full"
            />
          ))}
        </div>
      </div>
      <div className="mt-24">
        <div className="text-4xl font-bold ml-8">
          <span className="text-primary">Lamb Curries</span>
        </div>
        <div className="mt-5 text-sm md:text-base ml-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </div>
        <div className="mt-24 flex flex-wrap justify-evenly gap-6 ">
          {[chickenbiryani, chickentikka, haleem, chicken65,chickenbiryani, chickentikka, haleem, chicken65].map((item, index) => (
            <ArchedCard
              key={index}
              image={item}
              title="Delicious Dish"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
              buttonTitle="Order Now"
              price="$28.00"
              className="h-full"
            />
          ))}
        </div>
      </div>
      <InfoPage />
      <LocationInfo />
      <CustomerReviews />
      <DineInMenuSlider />
    </>
  );
};

export default Menu;
