import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SliderItem {
    content: React.ReactNode;
}

interface UnifiedSliderProps {
    items: SliderItem[];
    slidesPerView?: number;
    spaceBetween?: number;
    autoplay?: boolean;
    autoplayDelay?: number;
    loop?: boolean;
    pagination?: boolean;
    breakpoints?: {
        [key: number]: {
            slidesPerView: number;
            spaceBetween?: number;
        };
    };
    className?: string;
}

const UnifiedSlider: React.FC<UnifiedSliderProps> = ({
    items,
    slidesPerView = 1,
    spaceBetween = 24,
    autoplay = false,
    autoplayDelay = 3000,
    loop = true,
    pagination = true,
    breakpoints,
    className = "",
}) => {
    return (
        <div className={`relative ${className}`}>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={slidesPerView}
                spaceBetween={spaceBetween}
                loop={loop}
                autoplay={
                    autoplay
                        ? {
                            delay: autoplayDelay,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }
                        : false
                }
                pagination={
                    pagination
                        ? {
                            clickable: true,
                            bulletClass: "swiper-pagination-bullet !bg-neutral-300",
                            bulletActiveClass: "swiper-pagination-bullet-active !bg-red-500",
                        }
                        : false
                }
                navigation={{
                    nextEl: ".swiper-button-next-custom",
                    prevEl: ".swiper-button-prev-custom",
                }}
                breakpoints={breakpoints}
                className="pb-12"
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index} className="flex items-center justify-center">{item.content}</SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Buttons - Always visible with Red-500 background */}
            <button
                className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full p-3 shadow-lg transition-all duration-300"
                aria-label="Previous slide"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full p-3 shadow-lg transition-all duration-300"
                aria-label="Next slide"
            >
                <ChevronRight size={24} />
            </button>
        </div>
    );
};

export default UnifiedSlider;