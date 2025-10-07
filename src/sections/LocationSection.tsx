import { motion } from "framer-motion";
import locationmap from "../assets/locationmap.png";

const LocationInfo = () => {
    return (
        <div className="container-custom py-12">
            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-4">
                    Find Us Here
                </h2>
                <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                    Visit our restaurant in the heart of Athol Park. Authentic flavors await you!
                </p>
            </motion.div>
            <div className="py-12">
                <div className="container-custom">
                    <div className="relative flex justify-center items-center bg-white p-4 rounded-lg border">
                        <img
                            src={locationmap}
                            alt="Map"
                            className="md:w-full md:h-auto md:object-cover rounded-lg w-[400px] h-[300px] cursor-pointer"
                            onClick={() =>
                            (window.location.href =
                                "https://share.google/JwLESgCIPQA71AUfZ")
                            }
                        />

                        {/* Overlay Card */}
                        <div className="absolute top-10 md:left-10 -left-4 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700 text-white p-6 rounded-lg md:w-80 w-64 shadow-2xl border border-primary/40">
                            <h2 className="md:text-2xl text-xl font-extrabold text-primary drop-shadow">
                                Biryani Darbaar <span className="text-yellow-400 block text-base">Athol Park</span>
                            </h2>
                            <p className="mt-2 md:mt-3 md:text-sm text-neutral-200">
                                183 Hanson Rd,<br /> Athol Park SA 5012, Australia
                            </p>
                            <p className="md:mt-3 mt-2">
                                <span className="font-bold text-neutral-200">Phone</span>
                                <br />
                                <a href="tel:+61460747490" className="text-primary font-semibold hover:underline hover:text-neutral-400 transition-colors">
                                    +61 460 747 490
                                </a>
                            </p>
                        </div>

                        {/* Map Location Marker */}
                        <div className="absolute top-32 right-0 md:right-24 flex items-center bg-neutral-900/80 text-white px-3 py-2 rounded-full shadow">
                            <span className="text-sm">Find us on Google Maps</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationInfo;
