import { motion } from "framer-motion";

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
                <div className="relative flex justify-center items-center bg-white rounded-lg border">
                    <img
                        src="/assets/locationmap.png"
                        alt="Map"
                        className="md:w-full md:h-auto md:object-cover rounded-lg w-[400px] h-[300px] cursor-pointer"
                        onClick={() =>
                        (window.location.href =
                            "https://share.google/JwLESgCIPQA71AUfZ")
                        }
                    />

                    {/* Overlay Card */}
                    <div className="absolute top-10 md:left-10 -left-4 bg-white/90 backdrop-blur-md shadow-xl border border-neutral-200 p-6 rounded-lg md:w-80 w-64 flex flex-col gap-2">
                        <div className="space-y-1">
                            <h2 className="text-lg font-bold tracking-tight text-neutral-900">
                                Biryani Darbaar
                            </h2>
                            <p className="text-sm text-muted-foreground">
                                Athol Park
                            </p>
                        </div>
                        <p className="text-neutral-700 text-base mt-1 leading-relaxed">
                            183 Hanson Rd,<br /> Athol Park SA 5012, Australia
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A2 2 0 008.48 19h7.04a2 2 0 001.83-1.3L17 13M7 13V6a1 1 0 011-1h5a1 1 0 011 1v7"></path>
                            </svg>
                            <a href="tel:+61460747490" className="text-primary font-semibold hover:underline hover:text-orange-500 transition-colors">
                                +61 460 747 490
                            </a>
                        </div>
                    </div>

                    {/* Map Location Marker */}
                    <div className="absolute top-32 right-0 md:right-24 flex items-center bg-neutral-900/80 text-white px-3 py-2 rounded-full shadow">
                        <span className="text-sm">Find us on Google Maps</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationInfo;
