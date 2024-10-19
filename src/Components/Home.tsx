import InputSearch from "../Reusable-components/InputSearch";
import RedButton from "../Reusable-components/RedButton";
import RedWhip from "../Reusable-components/RedWhip";
import ArchedCard from "../Reusable-components/ArchedCard";
import order from "../assets/ordericon.png";
import cater from "../assets/cateringicon.png";
import android from "../assets/download1.png";
import apple from "../assets/download2.png";
import girl from "../assets/Girl.png";
import circle1 from "../assets/mealcircle1.png";
import circle2 from "../assets/mealcircle2.png";
import circle3 from "../assets/mealcircle3.png";
import circle4 from "../assets/mealcircle4.png";
import chickenbiryani from "../assets/chickenbiryani.svg";
import chickentikka from "../assets/chickentikka.svg";
import haleem from "../assets/haleem.svg";
import chicken65 from "../assets/chicken65.svg";
import chef from "../assets/Chef.png";
import img247 from "../assets/24.7.png";
import booking from "../assets/booking.png";
import orderB from "../assets/order.png";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="bg-[linear-gradient(180deg,rgba(234,31,39,0.06)_0%,rgba(234,31,39,0)_100%)] flex flex-col md:flex-row justify-between items-center p-6 md:p-12">
        <div className="w-full md:w-1/2 text-center md:text-left md:ml-20">
          <div className="text-4xl md:text-6xl font-bold">
            <div>Experience The Ultimate Taste Best</div>
            <div>
              <span className="text-primary">Biryani In Adelaide</span>
            </div>
          </div>
          <RedWhip className="mx-auto md:ml-80 mt-2" />
          <div className="text-2xl md:text-3xl mt-2">Specializing in Mughlai cuisine</div>
          <div className="flex items-center justify-center md:justify-start bg-primary bg-opacity-10 rounded-2xl p-4 w-48 h-7 my-4 mt-5">
            <div className="flex items-center justify-center bg-primary rounded-full w-5 h-5 mr-4">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4.004 4.004 0 015.656 0L10 6.343l1.172-1.171a4.004 4.004 0 015.656 5.656l-6.343 6.343a.75.75 0 01-1.06 0L3.172 10.83a4.004 4.004 0 010-5.656z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="text-black text-xs font-medium">People Trust us</div>
          </div>
          <div className="mt-3">
            <InputSearch placeholder="Search Food" />
          </div>
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-4">
            <RedButton
              className="w-60"
              image={order}
              alt="order"
              name="ORDER FOOD"
              variant="active"
            />
            <div className="ml-4">
            <RedButton
              className="w-60"
              image={cater}
              alt="cater"
              name="BOOK-CATERING"
              variant="active"
            />
            </div>
          </div>
          <div className="flex flex-wrap md:justify-start gap-2 mt-4">
            <img className="h-14 ml-5" src={android} alt="Download Android" />
            <img className="h-18" src={apple} alt="Download iOS" />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="relative">
            <div className="h-[300px] md:h-[410px] w-[300px] md:w-[410px] rounded-full bg-primary z-10 overflow-hidden">
              <img
                src={girl}
                alt="Girl with Biryani"
                className="max-w-full max-h-full ml-5 -mt-24"
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full">
              <img className="absolute top-0 left-0 w-24" src={circle1} alt="" />
              <img className="absolute bottom-0 left-0 w-28" src={circle2} alt="" />
              <img className="absolute top-0 right-0 w-28" src={circle3} alt="" />
              <img className="absolute bottom-0 right-0 w-24" src={circle4} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 text-center">
        <div className="text-4xl font-bold">
          Today <span className="text-primary">Special</span> Offers
        </div>
        <div className="mt-5 text-sm md:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </div>
        <div className="mt-5 flex flex-wrap justify-evenly gap-6">
          {[chickenbiryani, chickentikka, haleem, chicken65].map((item, index) => (
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

      <div className="mt-20 px-6 md:px-0 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:w-1/2">
          <div className="text-4xl md:text-6xl font-bold">
            We are <span className="text-primary">more</span> than <br />
            <span className="text-primary">multiple</span> service
          </div>
          <div className="mt-8 text-sm md:text-base">
            This is a type of restaurant which typically serves food and drink,
            in addition to light refreshments such as baked goods or snacks. The
            term comes from the French word meaning food.
          </div>
          <div className="grid grid-cols-2 gap-4 mt-10">
            {[
              { src: orderB, label: "Online Order" },
              { src: img247, label: "24/7 Services" },
              { src: booking, label: "Pre-Reservation" },
              { src: booking, label: "Organized Food Place" },
              { src: booking, label: "Super Chef" },
              { src: booking, label: "Clean Kitchen" },
            ].map((service, index) => (
              <div key={index} className="flex items-center gap-3 font-medium">
                <img src={service.src} alt={service.label} />
                {service.label}
              </div>
            ))}
          </div>
          <div className="mt-8">
            <RedButton name="About Us" variant="active" />
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
          <img src={chef} alt="Chef" className="w-3/4 h-auto" />
        </div>
      </div>
    </>
  );
};

export default Home;
