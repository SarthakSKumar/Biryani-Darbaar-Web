import SpecialOfferComponent from "../Reusable-components/SpecialOfferComponent";
import MainOrderLayout from "../Reusable-components/order-component/MainOrderLayout";
import InfoPage from "../Reusable-components/InfoPage";
import LocationInfo from "../Reusable-components/LocationInfo";
import CustomerReviews from "../Reusable-components/CustomerReview";
import DineInMenuSlider from "../Reusable-components/DineInMenuSlider";

const Order = () => {
  return (
    <>
    <SpecialOfferComponent />
    <MainOrderLayout />
    <InfoPage />
    <LocationInfo />
    <CustomerReviews />
    <DineInMenuSlider />
    </>
  );
};

export default Order;
