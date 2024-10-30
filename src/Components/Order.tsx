import SpecialOfferComponent from "../Reusable-components/SpecialOfferComponent";
import MainOrderLayout from "../Reusable-components/order-component/MainOrderLayout";
import InfoPage from "../Reusable-components/InfoPage";
import LocationInfo from "../Reusable-components/LocationInfo";
import CustomerReviews from "../Reusable-components/CustomerReview";
import DineInMenuSlider from "../Reusable-components/DineInMenuSlider";

const Order = () => {
  return (
    <>
    <SpecialOfferComponent title="Biryani in Australia" description="The rich flavors of Hyderabad biryani" />
    <MainOrderLayout />
    <InfoPage />
    <LocationInfo />
    <CustomerReviews />
    <DineInMenuSlider />
    </>
  );
};

export default Order;
