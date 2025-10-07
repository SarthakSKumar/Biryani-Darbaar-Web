import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import InputSearch from "@/components/InputSearch";
import RedButton from "@/components/RedButton";
import RedWhip from "@/components/atoms/RedWhip";

interface HeroSectionProps {
    onSearch: (query: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onSearch }) => {
    return (
        <motion.div
            className="relative min-h-screen flex items-center justify-center overflow-hidden w-full pt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div
                className="absolute inset-0 max-h-screen"
                style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: `url("/background.png")`,
                }}
            />
            {/* Content Container */}
            <div className="container-custom section-spacing">
                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Left side content */}
                    <motion.div
                        className="w-full md:w-1/2 text-center md:text-left z-10"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div className="text-left text-4xl md:text-6xl font-extrabold">
                            <div>
                                Experience The <br /> Ultimate Taste Best
                            </div>
                            <div>
                                <span className="text-primary">
                                    Biryani In Adelaide
                                </span>
                            </div>
                        </motion.div>

                        <RedWhip className="md:ml-80 mt-2" />

                        <motion.div
                            className="text-left text-2xl font-semibold md:text-3xl mt-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            Specializing in Mughlai Cuisine
                        </motion.div>

                        <motion.div
                            className="flex items-center justify-start bg-primary bg-opacity-10 rounded-2xl w-fit p-4 h-7 mt-2"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                            <div className="flex items-center justify-center bg-primary rounded-full w-5 h-5 mr-3">
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
                            <div className="text-black text-xs font-medium">
                                Trusted by food lovers across Adelaide
                            </div>
                        </motion.div>

                        <motion.div className="mt-3">
                            <InputSearch placeholder="Explore our Delicacies" onSearch={onSearch} />
                        </motion.div>

                        <motion.div
                            className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-4"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Link to="/Order">
                                <RedButton
                                    className="h-12 w-fit flex font-semibold"
                                    image="/assets/ordericon.png"
                                    alt="order"
                                    name="Order Food"
                                    variant="active"
                                />
                            </Link>
                            <Link to="/Contact">
                                <RedButton
                                    className="h-12 w-fit flex font-semibold"
                                    image="/assets/cateringicon.png"
                                    alt="cater"
                                    name="Book Catering Services"
                                    variant="active"
                                />
                            </Link>
                        </motion.div>

                        <div className="flex justify-start items-center gap-4 mt-8">
                            <img className="w-40" src="/assets/images/play-store.png" alt="Download on Android" />
                            <img className="w-40" src="/assets/images/app-store.png" alt="Download on iOS" />
                        </div>
                    </motion.div>

                    {/* Right side content */}
                    <motion.div
                        className="hidden md:flex md:w-1/2 items-center justify-end relative"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative">
                            {/* Happy Customer Badge */}
                            <div className="absolute top-0 right-0 w-fit gap-2 h-fit py-2 bg-white rounded-3xl flex items-center justify-between px-4 border border-neutral-200 z-20">
                                <img className="w-9" src="/assets/smilyicon.svg" alt="" />
                                <div className="flex flex-col">
                                    <div className="text-xs font-semibold">Our Happy Customer</div>
                                    <div className="flex items-center">
                                        <img className="h-3" src="/assets/Star.svg" alt="" />
                                        <span className="text-xs ml-1">4.9</span>
                                        <span className="text-xs ml-1">(1989 Reviews)</span>
                                    </div>
                                </div>
                            </div>

                            {/* Chicken Biryani Card */}
                            <div className="absolute -left-20 top-16 w-48 bg-white h-14 flex items-center rounded-lg border border-neutral-200 z-20">
                                <img className="w-10 ml-2" src="/assets/card1.png" alt="" />
                                <div className="flex flex-col ml-2">
                                    <span className="text-xs font-bold">Chicken Biryani</span>
                                    <div className="text-md font-medium text-red-700">@ Just $9.50</div>
                                </div>
                            </div>

                            {/* Girl Image with Circle */}
                            <div className="w-[410px] h-[410px] rounded-full bg-primary overflow-hidden relative z-10">
                                <img
                                    src="/assets/Girl.png"
                                    alt="Food delivery"
                                    className="max-h-[500px] ml-5 -mt-24 object-cover"
                                />
                            </div>

                            {/* Bottom Border Arc */}
                            <div className="w-[485px] h-[225px] z-50 border-[23px] border-shade rounded-b-full border-t-0 -mt-48 -ml-9"></div>

                            {/* Rotating Meal Circles */}
                            <motion.img
                                className="absolute -bottom-8 -left-32 w-44 z-10"
                                src="/assets/mealcircle1.png"
                                alt=""
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.img
                                className="absolute -bottom-32 left-4 w-56 z-10"
                                src="/assets/mealcircle2.png"
                                alt=""
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.img
                                className="absolute -bottom-32 right-2 w-52 z-10"
                                src="/assets/mealcircle3.png"
                                alt=""
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.img
                                className="absolute top-56 -right-32 w-54 z-10"
                                src="/assets/mealcircle4.png"
                                alt=""
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default HeroSection;
