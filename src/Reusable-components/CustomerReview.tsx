// import { useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const reviews = [
//   {
//     id: 1,
//     name: "St Glx",
//     location: "In Athol Park",
//     date: "24th September, 2023",
//     rating: 5,
//     review:
//       "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
//   },
//   {
//     id: 2,
//     name: "xyz",
//     location: "In Athol Park",
//     date: "24th September, 2023",
//     rating: 5,
//     review:
//       "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
//   },
//   {
//     id: 3,
//     name: "abc",
//     location: "In Athol Park",
//     date: "24th September, 2023",
//     rating: 5,
//     review:
//       "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
//   },
//   {
//     id: 4,
//     name: "abc1",
//     location: "In Athol Park",
//     date: "24th September, 2023",
//     rating: 5,
//     review:
//       "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
//   },
//   {
//     id: 5,
//     name: "abc-xyz",
//     location: "In Athol Park",
//     date: "24th September, 2023",
//     rating: 5,
//     review:
//       "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
//   },
// ];

// const CustomerReviews = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const reviewsPerPage = window.innerWidth < 768 ? 1 : 3; // 1 review for small screens, 3 for larger screens

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0
//         ? reviews.length - reviewsPerPage
//         : prevIndex - reviewsPerPage
//     );
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex + reviewsPerPage >= reviews.length
//         ? 0
//         : prevIndex + reviewsPerPage
//     );
//   };

//   return (
//     <div className="customer bg-[#D9D9D9] py-10 px-4 md:px-10 lg:px-20 mb-28">
//       <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>

//       {/* Reviews Carousel */}
//       <div className="relative flex items-center justify-center">
//         <button
//           className="absolute left-0 bg-red-500 text-white p-3 rounded-full shadow-md hover:bg-red-600 transition"
//           onClick={prevSlide}
//         >
//           <FaChevronLeft />
//         </button>

//         <div className="flex overflow-hidden w-full justify-center">
//           <div className="flex">
//             {reviews
//               .slice(currentIndex, currentIndex + reviewsPerPage)
//               .map((review) => (
//                 <div
//                   className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md mx-4"
//                   key={review.id}
//                 >
//                   <div className="flex items-center mb-4">
//                     <img
//                       src={`https://via.placeholder.com/50`}
//                       alt={review.name}
//                       className="w-12 h-12 rounded-full mr-4"
//                     />
//                     <div>
//                       <h4 className="font-semibold">{review.name}</h4>
//                       <p className="text-sm text-red-500">
//                         {review.location} 🏠
//                       </p>
//                       <p className="text-sm text-gray-500">{review.date}</p>
//                     </div>
//                   </div>
//                   <p className="text-gray-600">{review.review}</p>
//                   <div className="mt-4">
//                     <div className="flex">
//                       {[...Array(review.rating)].map((_star, index) => (
//                         <span key={index} className="text-yellow-500">
//                           ★
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>

//         <button
//           className="absolute right-0 bg-red-500 text-white p-3 rounded-full shadow-md hover:bg-red-600 transition"
//           onClick={nextSlide}
//         >
//           <FaChevronRight />
//         </button>
//       </div>
//       <div className="relative ">
//         <div className="text-center mt-11 md:mt-6 inline-block bg-white rounded-md md:p-1 absolute md:ml-0 ml-32 md:right-1/2 md:top-0">
//           <div className="text-4xl font-semibold">3.4</div>
//           <div className="text-yellow-500 flex justify-center my-2">
//             {[...Array(3)].map((_, index) => (
//               <span key={index} className="text-xl">
//                 ★
//               </span>
//             ))}
//             <span className="text-gray-400 text-xl">★</span>
//           </div>
//           <p className="text-gray-600">1,360 reviews</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomerReviews;

// 2nd version

// import { useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const reviews = [
//   {
//     id: 1,
//     name: "St Glx",
//     location: "In Athol Park",
//     date: "24th September, 2023",
//     rating: 5,
//     review:
//       "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
//   },
//   {
//     id: 2,
//     name: "xyz",
//     location: "In Athol Park",
//     date: "24th September, 2023",
//     rating: 5,
//     review:
//       "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
//   },
//   {
//     id: 3,
//     name: "abc",
//     location: "In Athol Park",
//     date: "24th September, 2023",
//     rating: 5,
//     review:
//       "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
//   },
//   {
//     id: 4,
//     name: "abc1",
//     location: "In Athol Park",
//     date: "24th September, 2023",
//     rating: 5,
//     review:
//       "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
//   },
//   {
//     id: 5,
//     name: "abc-xyz",
//     location: "In Athol Park",
//     date: "24th September, 2023",
//     rating: 5,
//     review:
//       "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
//   },
// ];

// const CustomerReviews = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const reviewsPerPage = window.innerWidth < 768 ? 1 : 3;

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0
//         ? reviews.length - reviewsPerPage
//         : prevIndex - reviewsPerPage
//     );
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex + reviewsPerPage >= reviews.length
//         ? 0
//         : prevIndex + reviewsPerPage
//     );
//   };

//   return (
//     <div className="customer py-12 px-4 md:px-10 lg:px-20 bg-gradient-to-b from-gray-50 to-gray-100">
//       {/* Header and Total Rating Section */}
//       <div className="flex flex-col md:flex-row justify-between items-center mb-8">
//         <h2 className="text-3xl font-bold text-gray-800">Customer Reviews</h2>
//         <div className="flex items-center space-x-2 mt-4 md:mt-0">
//           <div className="text-4xl font-semibold text-gray-800">3.4</div>
//           <div className="flex">
//             {[...Array(3)].map((_, index) => (
//               <span key={index} className="text-xl text-yellow-400">
//                 ★
//               </span>
//             ))}
//             <span className="text-xl text-gray-300">★</span>
//           </div>
//           <p className="text-gray-600 text-sm">1,360 reviews</p>
//         </div>
//       </div>

//       {/* Reviews Carousel */}
//       <div className="relative flex items-center justify-center">
//         <button
//           className="hidden md:block absolute left-0 bg-red-500 text-white p-3 rounded-full shadow-md hover:bg-red-600 transition"
//           onClick={prevSlide}
//         >
//           <FaChevronLeft />
//         </button>

//         <div className="flex overflow-hidden w-full justify-center">
//           <div className="flex space-x-4">
//             {reviews
//               .slice(currentIndex, currentIndex + reviewsPerPage)
//               .map((review) => (
//                 <div
//                   className="w-full md:w-80 bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition"
//                   key={review.id}
//                 >
//                   <div className="flex items-center mb-4">
//                     <img
//                       src={`https://via.placeholder.com/50`}
//                       alt={review.name}
//                       className="w-12 h-12 rounded-full mr-4 border-2 border-gray-200"
//                     />
//                     <div>
//                       <h4 className="font-semibold text-gray-800">
//                         {review.name}
//                       </h4>
//                       <p className="text-sm text-red-500">
//                         {review.location} 🏠
//                       </p>
//                       <p className="text-sm text-gray-500">{review.date}</p>
//                     </div>
//                   </div>
//                   <p className="text-gray-600 text-sm leading-relaxed">
//                     {review.review}
//                   </p>
//                   <div className="mt-4 flex">
//                     {[...Array(review.rating)].map((_star, index) => (
//                       <span key={index} className="text-yellow-400 text-lg">
//                         ★
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>

//         <button
//           className="hidden md:block absolute right-0 bg-red-500 text-white p-3 rounded-full shadow-md hover:bg-red-600 transition"
//           onClick={nextSlide}
//         >
//           <FaChevronRight />
//         </button>
//       </div>

//       {/* Mobile Navigation Buttons */}
//       <div className="flex justify-center space-x-4 mt-6 md:hidden">
//         <button
//           className="bg-red-500 text-white p-3 rounded-full shadow-md hover:bg-red-600 transition"
//           onClick={prevSlide}
//         >
//           <FaChevronLeft />
//         </button>
//         <button
//           className="bg-red-500 text-white p-3 rounded-full shadow-md hover:bg-red-600 transition"
//           onClick={nextSlide}
//         >
//           <FaChevronRight />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CustomerReviews;

//2nd version

// import { useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const reviews = [
//   {
//     id: 1,
//     name: "St Glx",
//     location: "In Athol Park",
//     date: "24th September, 2023",
//     rating: 5,
//     review:
//       "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
//   },
//   {
//     id: 2,
//     name: "xyz",
//     location: "In Athol Park",
//     date: "24th September, 2023",
//     rating: 5,
//     review:
//       "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
//   },
//   {
//     id: 3,
//     name: "abc",
//     location: "In Athol Park",
//     date: "24th September, 2023",
//     rating: 5,
//     review:
//       "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
//   },
//   {
//     id: 4,
//     name: "abc1",
//     location: "In Athol Park",
//     date: "24th September, 2023",
//     rating: 5,
//     review:
//       "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
//   },
//   {
//     id: 5,
//     name: "abc-xyz",
//     location: "In Athol Park",
//     date: "24th September, 2023",
//     rating: 5,
//     review:
//       "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
//   },
// ];

// const CustomerReviews = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const reviewsPerPage = window.innerWidth < 768 ? 1 : 3;

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0
//         ? reviews.length - reviewsPerPage
//         : prevIndex - reviewsPerPage
//     );
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex + reviewsPerPage >= reviews.length
//         ? 0
//         : prevIndex + reviewsPerPage
//     );
//   };

//   return (
//     <div className="customer py-12 px-4 md:px-10 lg:px-20 bg-gradient-to-b from-gray-50 to-gray-100">
//       {/* Header and Total Rating Section */}
//       <div className="flex flex-col md:flex-row justify-between items-center mb-8">
//         <h2 className="text-3xl font-bold text-gray-800">Customer Reviews</h2>
//         <div className="flex items-center space-x-2 mt-4 md:mt-0">
//           <div className="text-4xl font-semibold text-gray-800">4.6</div>
//           <div className="flex">
//             {[...Array(4)].map((_, index) => (
//               <span key={index} className="text-xl text-yellow-400">
//                 ★
//               </span>
//             ))}
//             <span className="text-xl text-gray-300">★</span>
//           </div>
//           <p className="text-gray-600 text-sm">1,360 reviews</p>
//         </div>
//       </div>

//       {/* Reviews Carousel */}
//       <div className="relative flex items-center justify-center">
//         <button
//           className="hidden md:block absolute left-0 bg-red-500 text-white p-3 rounded-full shadow-md hover:bg-red-600 transition"
//           onClick={prevSlide}
//         >
//           <FaChevronLeft />
//         </button>

//         <div className="flex overflow-hidden w-full justify-center">
//           <div className="flex space-x-4">
//             {reviews
//               .slice(currentIndex, currentIndex + reviewsPerPage)
//               .map((review) => (
//                 <div
//                   className="w-full md:w-80 bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition"
//                   key={review.id}
//                 >
//                   <div className="flex items-center mb-4">
//                     <img
//                       src={`https://via.placeholder.com/50`}
//                       alt={review.name}
//                       className="w-12 h-12 rounded-full mr-4 border-2 border-gray-200"
//                     />
//                     <div>
//                       <h4 className="font-semibold text-gray-800">
//                         {review.name}
//                       </h4>
//                       <p className="text-sm text-red-500">
//                         {review.location} 🏠
//                       </p>
//                       <p className="text-sm text-gray-500">{review.date}</p>
//                     </div>
//                   </div>
//                   <p className="text-gray-600 text-sm leading-relaxed">
//                     {review.review}
//                   </p>
//                   <div className="mt-4 flex">
//                     {[...Array(review.rating)].map((_star, index) => (
//                       <span key={index} className="text-yellow-400 text-lg">
//                         ★
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>

//         <button
//           className="hidden md:block absolute right-0 bg-red-500 text-white p-3 rounded-full shadow-md hover:bg-red-600 transition"
//           onClick={nextSlide}
//         >
//           <FaChevronRight />
//         </button>
//       </div>

//       {/* Mobile Navigation Buttons */}
//       <div className="flex justify-center space-x-4 mt-6 md:hidden">
//         <button
//           className="bg-red-500 text-white p-3 rounded-full shadow-md hover:bg-red-600 transition"
//           onClick={prevSlide}
//         >
//           <FaChevronLeft />
//         </button>
//         <button
//           className="bg-red-500 text-white p-3 rounded-full shadow-md hover:bg-red-600 transition"
//           onClick={nextSlide}
//         >
//           <FaChevronRight />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CustomerReviews;

// import { useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const reviews = [
//   {
//     id: 1,
//     name: "St Glx",
//     location: "In Athol Park",
//     date: "24th September, 2023",
//     rating: 5,
//     review:
//       "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
//   },
//   {
//     id: 2,
//     name: "xyz",
//     location: "In Athol Park",
//     date: "24th September, 2023",
//     rating: 5,
//     review:
//       "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
//   },
//   {
//     id: 3,
//     name: "abc",
//     location: "In Athol Park",
//     date: "24th September, 2023",
//     rating: 5,
//     review:
//       "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
//   },
//   {
//     id: 4,
//     name: "abc1",
//     location: "In Athol Park",
//     date: "24th September, 2023",
//     rating: 5,
//     review:
//       "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
//   },
//   {
//     id: 5,
//     name: "abc-xyz",
//     location: "In Athol Park",
//     date: "24th September, 2023",
//     rating: 5,
//     review:
//       "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
//   },
// ];

// const CustomerReviews = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const reviewsPerPage = 3; // Always show 3 reviews, regardless of screen size

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => {
//       // If already at the start, stay at the start
//       if (prevIndex === 0) {
//         return 0;
//       }
//       return prevIndex - reviewsPerPage;
//     });
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => {
//       // Check if moving forward would show fewer than 3 reviews
//       const remainingReviews = reviews.length - (prevIndex + reviewsPerPage);
//       if (remainingReviews < 0) {
//         // If there aren't enough reviews left, reset to the start
//         return 0;
//       }
//       return prevIndex + reviewsPerPage;
//     });
//   };

//   // Calculate the reviews to display, ensuring exactly 3 reviews are shown
//   const displayedReviews = [];
//   for (let i = 0; i < reviewsPerPage; i++) {
//     const reviewIndex = (currentIndex + i) % reviews.length;
//     displayedReviews.push(reviews[reviewIndex]);
//   }

//   return (
//     <div className="customer py-12 px-4 md:px-10 lg:px-20 bg-gradient-to-b from-gray-50 to-gray-100">
//       {/* Header and Total Rating Section */}
//       <div className="flex flex-col md:flex-row justify-between items-center mb-8">
//         <h2 className="text-3xl font-bold text-gray-800">Customer Reviews</h2>
//         <div className="flex items-center space-x-2 mt-4 md:mt-0">
//           <div className="text-4xl font-semibold text-gray-800">4.6</div>
//           <div className="flex">
//             {[...Array(4)].map((_, index) => (
//               <span key={index} className="text-xl text-yellow-400">
//                 ★
//               </span>
//             ))}
//             <span className="text-xl text-gray-300">★</span>
//           </div>
//           <p className="text-gray-600 text-sm">1,360 reviews</p>
//         </div>
//       </div>

//       {/* Reviews Carousel */}
//       <div className="relative flex items-center justify-center">
//         <button
//           className="absolute left-0 bg-red-500 text-white p-3 rounded-full shadow-md hover:bg-red-600 transition"
//           onClick={prevSlide}
//         >
//           <FaChevronLeft />
//         </button>

//         <div className="flex overflow-hidden w-full max-w-5xl justify-center">
//           <div className="flex space-x-4">
//             {displayedReviews.map((review, index) => (
//               <div
//                 className="w-1/3 bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition"
//                 key={`${review.id}-${index}`} // Unique key for each displayed review
//               >
//                 <div className="flex items-center mb-4">
//                   <img
//                     src={`https://via.placeholder.com/50`}
//                     alt={review.name}
//                     className="w-12 h-12 rounded-full mr-4 border-2 border-gray-200"
//                   />
//                   <div>
//                     <h4 className="font-semibold text-gray-800">
//                       {review.name}
//                     </h4>
//                     <p className="text-sm text-red-500">{review.location} 🏠</p>
//                     <p className="text-sm text-gray-500">{review.date}</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-600 text-sm leading-relaxed">
//                   {review.review}
//                 </p>
//                 <div className="mt-4 flex">
//                   {[...Array(review.rating)].map((_star, index) => (
//                     <span key={index} className="text-yellow-400 text-lg">
//                       ★
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <button
//           className="absolute right-0 bg-red-500 text-white p-3 rounded-full shadow-md hover:bg-red-600 transition"
//           onClick={nextSlide}
//         >
//           <FaChevronRight />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CustomerReviews;

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Aaron ",
    location: "Athol Park",
    date: "15th October, 2024",
    rating: 5,
    review:
      "The biryani here is absolutely amazing! The flavors were perfectly balanced, and the lamb was so tender. The staff was super friendly, and the service was quick. Definitely coming back!",
  },
  {
    id: 2,
    name: "Priya Menon",
    location: "Athol Park",
    date: "20th March, 2025",
    rating: 4,
    review:
      "I loved the Chicken 65—it was spicy and crispy, just how I like it. The naan was soft and fresh, but I wish the portion sizes were a bit larger for the price. Overall, a great experience!",
  },
  {
    id: 3,
    name: "David",
    location: "Athol Park",
    date: "25th January, 2025",
    rating: 5,
    review:
      "The Malai Kebab was a highlight—so creamy and well-marinated! The ambiance is cozy, and the staff made us feel very welcome. The mango lassi was a perfect way to end the meal.",
  },
  {
    id: 4,
    name: "Sania",
    location: "Athol Park",
    date: "28th October, 2023",
    rating: 4,
    review:
      "The Nizami Chicken curry was delicious, with a rich and creamy texture. The service was a bit slow during peak hours, but the food quality made up for it. I’ll definitely recommend this place!",
  },
  {
    id: 5,
    name: "Chris",
    location: "Athol Park",
    date: "30th January, 2025",
    rating: 5,
    review:
      "Hands down the best Gulab Jamun I’ve ever had—soft, sweet, and perfectly syrupy! The staff was attentive, and the overall dining experience was fantastic. Can’t wait to try more dishes!",
  },
  {
    id: 1, // Updated ID to be unique
    name: "Liam Bennett", // Australian Christian name
    location: "Athol Park",
    date: "12th November, 2024",
    rating: 5,
    review:
      "The Chicken Biryani was absolutely phenomenal—spicy, aromatic, and perfectly cooked! The staff were so welcoming, and the atmosphere was warm and inviting. I’ll definitely be back for more!",
  },
  {
    id: 2, // Updated ID to be unique
    name: "Ayesha Khan", // Australian Muslim name
    location: "Athol Park",
    date: "5th December, 2024",
    rating: 5,
    review:
      "I tried the Lamb Biryani, and it was the best I’ve ever had! The meat was tender, and the spices were spot on. The service was excellent, and the Mango Lassi was a refreshing treat. Highly recommend!",
  },
  {
    id: 3, // Updated ID to be unique
    name: "Ethan Clarke", // Australian Christian name
    location: "Athol Park",
    date: "18th January, 2025",
    rating: 5,
    review:
      "The Malai Kebab was a game-changer—so creamy and flavorful! The staff went above and beyond to make our dining experience special. The Garlic Naan paired perfectly with the curry. Loved it!",
  },
  {
    id: 4, // Updated ID to be unique
    name: "Fatima Ali", // Australian Muslim name
    location: "Athol Park",
    date: "25th January, 2025",
    rating: 5,
    review:
      "The Gobi Manchurian was a delightful surprise—crispy and packed with flavor! The staff were attentive, and the Badam Kheer for dessert was the perfect sweet ending. Can’t wait to visit again!",
  },
  // Additional reviews
  {
    id: 5,
    name: "Sophie Harris", // Australian Christian name
    location: "Athol Park",
    date: "3rd February, 2025",
    rating: 5,
    review:
      "The Nizami Chicken curry was absolutely divine—rich, creamy, and full of flavor! The service was top-notch, and the Rumali Roti was so soft. This place is now my go-to for Indian food!",
  },
  {
    id: 6,
    name: "Omar Hassan", // Australian Muslim name
    location: "Athol Park",
    date: "10th February, 2025",
    rating: 5,
    review:
      "The Chicken 65 was perfectly spicy and crispy, just how I like it! The staff were friendly, and the Chai was a great way to end the meal. The ambiance here is so cozy—I’ll be back soon!",
  },
  {
    id: 7,
    name: "Isabella Moore", // Australian Christian name
    location: "Athol Park",
    date: "15th February, 2025",
    rating: 5,
    review:
      "The Vegetable Biryani was bursting with flavors, and the portion was generous! The staff made us feel so welcome, and the Gajar ka Halwa was a heavenly dessert. This place never disappoints!",
  },
];

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsPerPage = 3; // Always show 3 reviews

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - reviewsPerPage;
      // If we're at the start, stay at the start (index 0)
      return newIndex < 0 ? 0 : newIndex;
    });
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + reviewsPerPage;
      // If we reach the end, go back to the start (index 0)
      if (newIndex >= reviews.length) {
        return 0;
      }
      // If there are fewer than 3 reviews left, stay at the last valid index
      if (newIndex + reviewsPerPage > reviews.length) {
        return reviews.length - reviewsPerPage;
      }
      return newIndex;
    });
  };

  return (
    <div className="customer py-12 px-4 md:px-10 lg:px-20 bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header and Total Rating Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Customer Reviews</h2>
        <div className="flex items-center space-x-2 mt-4 md:mt-0">
          <div className="text-4xl font-semibold text-gray-800">4.6</div>
          <div className="flex">
            {[...Array(4)].map((_, index) => (
              <span key={index} className="text-xl text-yellow-400">
                ★
              </span>
            ))}
            <span className="text-xl text-gray-300">★</span>
          </div>
          <p className="text-gray-600 text-sm">1,360 reviews</p>
        </div>
      </div>

      {/* Reviews Carousel */}
      <div className="relative flex items-center justify-center">
        <button
          className="absolute left-0 bg-red-500 text-white p-3 rounded-full shadow-md hover:bg-red-600 transition"
          onClick={prevSlide}
        >
          <FaChevronLeft />
        </button>

        <div className="flex overflow-hidden w-full justify-center">
          <div className="flex space-x-4">
            {reviews
              .slice(currentIndex, currentIndex + reviewsPerPage)
              .map((review) => (
                <div
                  className="w-full md:w-80 bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition"
                  key={review.id}
                >
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800">
                      {review.name}
                    </h4>
                    <p className="text-sm text-red-500">{review.location} 🏠</p>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {review.review}
                  </p>
                  <div className="mt-4 flex">
                    {[...Array(review.rating)].map((_star, index) => (
                      <span key={index} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
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
    </div>
  );
};

export default CustomerReviews;
