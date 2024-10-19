import ArchedCard from "../Reusable-components/ArchedCard";
import chickenbiryani from "../assets/chickenbiryani.svg";
import InputSearch from "../Reusable-components/InputSearch";
import RedButton from "../Reusable-components/RedButton";
const About = () => {
  return (
    <div>
      <ArchedCard
        image={chickenbiryani}
        title="Chicken Biryani"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        buttonTitle="Order Now"
        price="$28.00"
        className="mt-10 "
      />
      <InputSearch placeholder="Search Fcuker" />
      <RedButton name="Order Now" variant="active" className="mt-10" />
    </div>
  );
};

export default About;
