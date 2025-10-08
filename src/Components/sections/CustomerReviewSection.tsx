import React from "react";
import UnifiedSlider from "../sliders/UnifiedSlider";
import { reviews } from "../../constants/Reviews";
import { Review } from "@/types/common.types";

interface SliderItem {
    content: React.ReactNode;
}

const CustomerReviews: React.FC = () => {
    const sliderItems: SliderItem[] = reviews.map((review: Review) => ({
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
                    {[...Array(review.rating)].map((_star: undefined, index: number) => (
                        <span key={index} className="text-yellow-400 text-xl">
                            ★
                        </span>
                    ))}
                </div>
            </div>
        ),
    }));

    const totalRating: number = 4.6;
    const maxStars: number = 5;
    const fullStars: number = 4;
    const totalReviews: string = "1,360 reviews";

    return (
        <div className="container-custom pb-28">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                <h2 className="text-4xl font-bold text-neutral-900">Customer Reviews</h2>
                <div className="flex items-center gap-3 mt-4 md:mt-0">
                    <div className="text-5xl font-bold text-neutral-900">{totalRating}</div>
                    <div>
                        <div className="flex">
                            {[...Array(fullStars)].map((_: undefined, index: number) => (
                                <span key={index} className="text-2xl text-yellow-400">
                                    ★
                                </span>
                            ))}
                            {[...Array(maxStars - fullStars)].map((_: undefined, index: number) => (
                                <span key={`empty-${index}`} className="text-2xl text-neutral-300">
                                    ★
                                </span>
                            ))}
                        </div>
                        <p className="text-base text-neutral-600 mt-1">{totalReviews}</p>
                    </div>
                </div>
            </div>

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
