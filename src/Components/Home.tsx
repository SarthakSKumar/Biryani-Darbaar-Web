import InputSearch from "../Reusable-components/InputSearch";
import RedButton from "../Reusable-components/RedButton";
import RedWhip from "../Reusable-components/RedWhip";
import order from "../assets/ordericon.png";
import cater from "../assets/cateringicon.png";
import android from "../assets/download1.png";
import apple from "../assets/download2.png";
import girl from "../assets/Girl.png";
import circle1 from "../assets/mealcircle1.png";
import circle2 from "../assets/mealcircle2.png";
import circle3 from "../assets/mealcircle3.png";
import circle4 from "../assets/mealcircle4.png";
import card1 from "../assets/card1.png";
import smily from "../assets/smilyicon.svg";
import star from "../assets/Star.svg";
import ArchedCard from "../Reusable-components/ArchedCard";
import chickenbiryani from "../assets/chickenbiryani.svg";
import chickentikka from "../assets/chickentikka.svg";
import haleem from "../assets/haleem.svg";
import chicken65 from "../assets/chicken65.svg";
import "./home.css";
import righttop from "../assets/right top corner.png";
import lefttop from "../assets/left top corner.png";
import rightbottom from "../assets/right lower corner.svg";
import leftbottom from "../assets/left lower corner.svg";
import chef from "../assets/Chef.png";
import img247 from "../assets/24.7.png";
import booking from "../assets/booking.png";
import orderB from "../assets/order.png";
import leaves from "../assets/leaves.png";
import wire from "../assets/wire.svg";
import spices from "../assets/spices.png";
import roundbg from "../assets/roundbg.png";
import chef2 from "../assets/chef2.png";
const Home = () => {
  return (
    <>
      <div className="bg-[linear-gradient(180deg,rgba(234,31,39,0.06)_0%,rgba(234,31,39,0)_100%)] flex justify-between">
        <div className="ml-20">
          <div className="text-6xl font-bold">
            <div>Experience The</div>
            Ultimate Taste Best
          </div>
          <div className="text-6xl font-bold">
            <span className="text-primary">Biryani In Adelaide</span>
          </div>
          <RedWhip className="ml-80 mt-2" />
          <br />
          <div className=" text-3xl mt-1">Specializing in mughlai cuisine</div>
          <div className="flex items-center justify-center bg-primary bg-opacity-10 rounded-2xl p-4 w-32 h-7 my-2 mt-5">
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

            <div className="text-black text-xs font-medium flex whitespace-nowrap">
              People Trust us
            </div>
          </div>
          <div className="mt-3">
            <InputSearch placeholder="Search Food" />
          </div>
          <div className="flex items-center justify-between w-80 mt-4">
            {" "}
            <div>
              <RedButton
                className="w-44"
                image={order}
                alt="order"
                name="ORDER FOOD"
                variant="active"
              />
            </div>
            <div className="ml-4">
              <RedButton
                className="w-48"
                image={cater}
                alt="cater"
                name="BOOK CATERING"
                variant="active"
              />
            </div>
          </div>
          <div className="flex justify-between w-40">
            <img className="h-14 " src={android} alt="" />
            <img className="h-14" src={apple} alt="" />
          </div>
        </div>
        <div className="mr-10">
          <br />
          <div className="relative w-44 h-10 bg-white ml-72  rounded-3xl flex justify-between items-center">
            <img className="w-9 " src={smily} alt="" />
            <div className="flex flex-col">
              <div className="text-xs mr-2 font-semibold">
                Our Happy Customer
              </div>
              <div className="flex  ">
                <img className="h-3 text-xs mt-0" src={star} alt="" />
                <span className="text-xs ml-1">4.9</span>
                <span className="text-xs ml-1">(1.989 Reviews)</span>
              </div>
            </div>
          </div>
          <div className="w-44 relative bg-white h-14 flex justify-start items-center flex-shrink-0 rounded-lg -ml-20 -mb-28">
            <img className="w-12 ml-2 " src={card1} alt="" />
            <div className="flex flex-col ">
              <span className="whitespace-nowrap text-xs ml-3 -mt-0 font-bold">
                CHICKEN BIRYANI
              </span>
              <div className="ml-4 mt-1">
                <span className=" text-xs mt-4 ml-3">$</span>9.50
              </div>
            </div>
          </div>

          <div className="h-[410px] w-[410px] rounded-full bg-primary z-10 overflow-hidden">
            <img
              src={girl}
              alt=""
              className="max-w-55 max-h-[500px] ml-5 -mt-24"
            />
          </div>
          <div className="w-[485px] h-[225px] border-[23px] border-shade  rounded-b-full border-t-0 -mt-48 -ml-9"></div>
          <img className="-mt-56 -ml-20 w-32" src={circle1} alt="" />
          <img className=" w-44" src={circle2} alt="" />
          <img className="w-44  ml-48 -mt-32" src={circle3} alt="" />
          <img className="w-40 ml-80 -mt-72 -mr-5" src={circle4} alt="" />
        </div>
      </div>
      <div className="mt-14">
        <div className="flex flex-col justify-center items-center">
          <div className="text-4xl font-bold justify-center">
            Today <span className="text-primary">Special</span> Offers
          </div>
          <div className="text-justify mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been <br /> the industry's standard dummy
            text ever since the 1500s
          </div>
        </div>
        <div className="mt-5 flex justify-evenly">
          <div className="h-79">
            <ArchedCard
              image={chickenbiryani}
              title="Chicken Biryani"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
              buttonTitle="Order Now"
              price="$28.00"
              className="h-full ml-10"
            />
          </div>
          <div className="h-79">
            <ArchedCard
              image={chickentikka}
              title="Chicken Tikka"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
              buttonTitle="Order Now"
              price="$28.00"
              className="h-full ml-10"
            />
          </div>
          <div className="h-79">
            <ArchedCard
              image={haleem}
              title="Haleem"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
              buttonTitle="Order Now"
              price="$28.00"
              className="h-full ml-10"
            />
          </div>
          <div className="h-79">
            <ArchedCard
              image={chicken65}
              title="Chicken 65"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
              buttonTitle="Order Now"
              price="$28.00"
              className="h-full ml-10"
            />
          </div>
        </div>
      </div>
      <div className="segment flex justify-between">
        <div>
          <div className="flex relative top-28 left-20">
            <img className=" " src={lefttop} alt="" />

            <img className=" " src={righttop} alt="" />
          </div>

          <div className="flex relative top-28 left-20">
            <img className=" " src={leftbottom} alt="" />

            <img className="" src={rightbottom} alt="" />
          </div>
          <div>
            <img
              className="relative -mt-[390px] ml-32 w-[350px] "
              src={chef}
              alt=""
            />
          </div>
          <img className="ml-[450px] -mt-[350px] " src={wire} alt="" />
          <img
            className="ml-[340px] -mt-[390px] relative"
            src={spices}
            alt=""
          />
          <img className="ml-32 mt-56 relative" src={leaves} alt="" />
        </div>
        <div className="flex flex-col mr-44 mt-36">
          <div className="text-6xl font-bold">
            We are <span className="text-primary">more</span> than <br />
            <span className="text-primary">multiple</span> service
          </div>
          <div className="mt-8">
            This is a type of resturent which typically serves food and drink,
            in addition to light <br /> refreshments such as baked goods or
            snacks. The term comes frome the rench <br /> word meaning food
          </div>
          <div className="grid gap-4 grid-cols-2 grid-rows-3 mt-20">
            <div className="flex justify-between items-center w-32 font-medium">
              <img src={orderB} alt="" />
              Online Order
            </div>
            <div className="flex justify-between items-center w-32 font-medium">
              <img src={img247} alt="" />
              24/7 Services
            </div>
            <div className="flex justify-between items-center w-36 font-medium">
              <img src={booking} alt="" />
              Pre-Reservation
            </div>
            <div className="flex justify-between items-center w-56 font-medium">
              <img src={booking} alt="" />
              Organized Foodhut Place
            </div>
            <div className="flex justify-between items-center w-32 font-medium">
              <img src={booking} alt="" />
              Super Chef
            </div>
            <div className="flex justify-between items-center w-32 font-medium">
              <img src={booking} alt="" />
              Clean Kitchen
            </div>
          </div>
          <div className="flex justify-center items-center mt-10 mr-36">
            <RedButton name="About Us" variant="active" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <div className="text-center text-4xl font-bold">
          <span className="text-primary">Menu</span> That{" "}
          <span className="text-primary">Always</span> Make You <br />
          Fall In <span className="text-primary">Love</span>
        </div>
      </div>
      <br />
      <div className="flex justify-evenly mt-10">
        <RedButton className="h-10" name="STARTERS" variant="active" />
        <RedButton
          className="h-10 w-44"
          name="CHARCOAL KEBABS"
          variant="inactive"
        />
        <RedButton className="h-10" name="BIRYANI's" variant="inactive" />
        <RedButton className="h-10" name="LAMB CURRIES" variant="inactive" />
        <RedButton
          className="h-10 w-44"
          name="CHICKEN CURRIES"
          variant="inactive"
        />
        <RedButton className="h-10" name="DESSERTS" variant="inactive" />
        <RedButton className="h-10" name="DRINKS" variant="inactive" />
      </div>
      <div className="grid grid-cols-3 grid-rows-4 gap-4 mt-10 ml-10">
        <div className="h-79">
          <ArchedCard
            image={chicken65}
            title="Chicken 65"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
            buttonTitle="Order Now"
            price="$28.00"
            className="h-full ml-10"
          />
        </div>
        <div className="h-79">
          <ArchedCard
            image={chicken65}
            title="Chicken 65"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
            buttonTitle="Order Now"
            price="$28.00"
            className="h-full ml-10"
          />
        </div>
        <div className="h-79">
          <ArchedCard
            image={chicken65}
            title="Chicken 65"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
            buttonTitle="Order Now"
            price="$28.00"
            className="h-full ml-10"
          />
        </div>
        <div className="h-79">
          <ArchedCard
            image={chicken65}
            title="Chicken 65"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
            buttonTitle="Order Now"
            price="$28.00"
            className="h-full ml-10"
          />
        </div>
        <div className="h-79">
          <ArchedCard
            image={chicken65}
            title="Chicken 65"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
            buttonTitle="Order Now"
            price="$28.00"
            className="h-full ml-10"
          />
        </div>
        <div className="h-79">
          <ArchedCard
            image={chicken65}
            title="Chicken 65"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
            buttonTitle="Order Now"
            price="$28.00"
            className="h-full ml-10"
          />
        </div>
        <div className="h-79">
          <ArchedCard
            image={chicken65}
            title="Chicken 65"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
            buttonTitle="Order Now"
            price="$28.00"
            className="h-full ml-10"
          />
        </div>
        <div className="h-79">
          <ArchedCard
            image={chicken65}
            title="Chicken 65"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
            buttonTitle="Order Now"
            price="$28.00"
            className="h-full ml-10"
          />
        </div>
        <div className="h-79">
          <ArchedCard
            image={chicken65}
            title="Chicken 65"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
            buttonTitle="Order Now"
            price="$28.00"
            className="h-full ml-10"
          />
        </div>
        <div className="h-79">
          <ArchedCard
            image={chicken65}
            title="Chicken 65"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
            buttonTitle="Order Now"
            price="$28.00"
            className="h-full ml-10"
          />
        </div>
        <div className="h-79">
          <ArchedCard
            image={chicken65}
            title="Chicken 65"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
            buttonTitle="Order Now"
            price="$28.00"
            className="h-full ml-10"
          />
        </div>
        <div className="h-79">
          <ArchedCard
            image={chicken65}
            title="Chicken 65"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
            buttonTitle="Order Now"
            price="$28.00"
            className="h-full ml-10"
          />
        </div>
      </div>
      <div className="segment">
        <div className="flex flex-col justify-around">
          <div className="text-left text-4xl font-bold mt-28 ml-16">
            It's Now <span className="text-primary">More Easy </span> to{" "}
            <span className="text-primary">Order</span> <br />
            by Our Mobile <span className="text-primary">App</span>
          </div>
          <div className="text-left text-xs mt-16 ml-16">
            All you need to do is downlode one of the best delivery apps, <br />
            make a and most companies are opting for mobile app <br />
            devlopment for food delivery
          </div>
          <div className="flex justify-between items-center w-36 mt-10 ml-10">
            <img className="w-44" src={android} alt="" />
            <img className="w-44 mt-2 " src={apple} alt="" />
          </div>
        </div>
        <div>
          <img className="ml-[950px] -mt-[250px]" src={roundbg} alt="" />
        <div className="w-[540px] h-[275px] border-[23px] border-shader  rounded-t-full border-b-0 ml-[920px] -mt-[520px]"></div>
          <img className="ml-[970px] -mt-[280px] h-[500px] " src={chef2} alt="" />
          <img className="ml-[1250px] -mt-[500px]" src={spices} alt="" />
          <img className="ml-[1300px] mt-52" src={leaves} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
