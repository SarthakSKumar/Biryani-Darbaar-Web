import UnifiedSlider from "../sliders/UnifiedSlider";

const reviews = [
    {
        id: 1,
        name: "Liam Thompson",
        location: "Athol Park",
        date: "12th January, 2025",
        rating: 5,
        review:
            "The Hyderabadi Biryani was absolutely spectacular! Every grain of rice was perfectly cooked, and the tender meat was infused with rich spices. The staff were welcoming, and the Gulab Jamun dessert was the cherry on top!",
    },
    {
        id: 2,
        name: "Zainab Khan",
        location: "Athol Park",
        date: "15th January, 2025",
        rating: 5,
        review:
            "I tried the Chicken Tikka Masala, and it was bursting with flavors! The creamy sauce and perfectly charred tikka pieces were amazing. The Butter Naan was soft and fluffy—highly recommend this place!",
    },
    {
        id: 3,
        name: "Ethan Clarke",
        location: "Athol Park",
        date: "18th January, 2025",
        rating: 5,
        review:
            "The Malai Kebab was a game-changer—so creamy and flavorful! The staff went above and beyond to make our dining experience special. The Garlic Naan paired perfectly with the curry. Loved it!",
    },
    {
        id: 4,
        name: "Fatima Ali",
        location: "Athol Park",
        date: "25th January, 2025",
        rating: 5,
        review:
            "The Gobi Manchurian was a delightful surprise—crispy and packed with flavor! The staff were attentive, and the Badam Kheer for dessert was the perfect sweet ending. Can't wait to visit again!",
    },
    {
        id: 5,
        name: "Sophie Harris",
        location: "Athol Park",
        date: "3rd February, 2025",
        rating: 5,
        review:
            "The Nizami Chicken curry was absolutely divine—rich, creamy, and full of flavor! The service was top-notch, and the Rumali Roti was so soft. This place is now my go-to for Indian food!",
    },
    {
        id: 6,
        name: "Omar Hassan",
        location: "Athol Park",
        date: "10th February, 2025",
        rating: 5,
        review:
            "The Chicken 65 was perfectly spicy and crispy, just how I like it! The staff were friendly, and the Chai was a great way to end the meal. The ambiance here is so cozy—I'll be back soon!",
    },
    {
        id: 7,
        name: "Isabella Moore",
        location: "Athol Park",
        date: "15th February, 2025",
        rating: 5,
        review:
            "The Vegetable Biryani was bursting with flavors, and the portion was generous! The staff made us feel so welcome, and the Gajar ka Halwa was a heavenly dessert. This place never disappoints!",
    },
];

const CustomerReviews = () => {
    const sliderItems = reviews.map((review) => ({
        content: (
            <div className="w-80 bg-white p-6 rounded-lg border border-neutral-200 hover:border-red-300 transition flex-shrink-0">
                <div className="mb-4">
                    <h4 className="font-bold text-xl mb-1 text-neutral-900">
                        {review.name}
                    </h4>
                    <p className="text-base text-primary font-medium">{review.location} 🏠</p>
                    <p className="text-sm text-neutral-500 mt-1">{review.date}</p>
                </div>
                <p className="text-neutral-700 text-base leading-relaxed line-clamp-5">
                    {review.review}
                </p>
                <div className="mt-4 flex">
                    {[...Array(review.rating)].map((_star, index) => (
                        <span key={index} className="text-yellow-400 text-xl">
                            ★
                        </span>
                    ))}
                </div>
            </div>
        ),
    }));

    return (
        <div className="container-custom pb-28">
            {/* Header and Total Rating Section */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                <h2 className="text-4xl font-bold text-neutral-900">Customer Reviews</h2>
                <div className="flex items-center gap-3 mt-4 md:mt-0">
                    <div className="text-5xl font-bold text-neutral-900">4.6</div>
                    <div>
                        <div className="flex">
                            {[...Array(4)].map((_, index) => (
                                <span key={index} className="text-2xl text-yellow-400">
                                    ★
                                </span>
                            ))}
                            <span className="text-2xl text-neutral-300">★</span>
                        </div>
                        <p className="text-base text-neutral-600 mt-1">1,360 reviews</p>
                    </div>
                </div>
            </div>

            {/* Reviews Carousel */}
            <UnifiedSlider
                items={sliderItems}
                slidesPerView={3}
                spaceBetween={24}
                autoplay={true}
                autoplayDelay={5000}
                loop={true}
                pagination={true}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            />
        </div>
    );
};

export default CustomerReviews;
