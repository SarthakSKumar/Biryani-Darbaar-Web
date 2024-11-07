import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "St Glx",
    location: "In Athol Park",
    date: "24th September, 2023",
    rating: 5,
    review:
      "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
  },
  {
    id: 2,
    name: "xyz",
    location: "In Athol Park",
    date: "24th September, 2023",
    rating: 5,
    review:
      "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
  },
  {
    id: 3,
    name: "abc",
    location: "In Athol Park",
    date: "24th September, 2023",
    rating: 5,
    review:
      "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
  },
  {
    id: 4,
    name: "abc1",
    location: "In Athol Park",
    date: "24th September, 2023",
    rating: 5,
    review:
      "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
  },
  {
    id: 5,
    name: "abc-xyz",
    location: "In Athol Park",
    date: "24th September, 2023",
    rating: 5,
    review:
      "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
  },
];

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsPerPage = window.innerWidth < 768 ? 1 : 3; // 1 review for small screens, 3 for larger screens

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - reviewsPerPage : prevIndex - reviewsPerPage
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + reviewsPerPage >= reviews.length ? 0 : prevIndex + reviewsPerPage
    );
  };

  return (
    <div className="bg-[#D9D9D9] py-10 px-4 md:px-10 lg:px-20 mb-28 ">
      <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>

      {/* Reviews Carousel */}
      <div className="relative flex items-center justify-center">
        <button
          className="absolute left-0 bg-red-500 text-white p-3 rounded-full shadow-md hover:bg-red-600 transition"
          onClick={prevSlide}
        >
          <FaChevronLeft />
        </button>

        <div className="flex overflow-hidden w-full justify-center">
          <div className="flex">
            {reviews
              .slice(currentIndex, currentIndex + reviewsPerPage)
              .map((review) => (
                <div
                  className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md mx-4"
                  key={review.id}
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={`https://via.placeholder.com/50`}
                      alt={review.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{review.name}</h4>
                      <p className="text-sm text-red-500">{review.location} 🏠</p>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{review.review}</p>
                  <div className="mt-4">
                    <div className="flex">
                      {[...Array(review.rating)].map((_star, index) => (
                        <span key={index} className="text-yellow-500">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <button
          className="absolute right-0 bg-red-500 text-white p-3 rounded-full shadow-md hover:bg-red-600 transition"
          onClick={nextSlide}
        >
          <FaChevronRight />
        </button>
      </div>
      <div className="relative ">
      <div className="text-center mt-11 md:mt-6 inline-block bg-white rounded-md md:p-1 absolute md:ml-0 ml-32 md:right-1/2 md:top-0">
        <div className="text-4xl font-semibold">3.4</div>
        <div className="text-yellow-500 flex justify-center my-2">
          {[...Array(3)].map((_, index) => (
            <span key={index} className="text-xl">★</span>
          ))}
          <span className="text-gray-400 text-xl">★</span>
        </div>
        <p className="text-gray-600">1,360 reviews</p>
        </div>
      </div>
      </div>
  );
};

export default CustomerReviews;
