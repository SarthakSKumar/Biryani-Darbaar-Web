import React from "react";
import { motion } from "framer-motion";

const LocationInfo: React.FC = () => {
    return (
        <div className="container-custom">
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
            <div className="pt-12">
                <div className="relative flex justify-center items-center bg-white rounded-lg border overflow-hidden">
                    {/* Google Maps Embed */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.9076894757447!2d138.56482647587843!3d-34.87677347283451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0c8f0e1234567%3A0x1234567890abcdef!2s183%20Hanson%20Rd%2C%20Athol%20Park%20SA%205012%2C%20Australia!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                        className="w-full h-[300px] md:h-[450px] lg:h-[500px] border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Biryani Darbaar Location Map"
                    ></iframe>

                    {/* Overlay Card */}
                    <div className="absolute top-6 md:top-10 left-4 md:left-10 bg-white/95 backdrop-blur-md shadow-2xl border border-neutral-200 p-4 md:p-6 rounded-lg w-[calc(100%-2rem)] md:w-80 flex flex-col gap-2">
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
                            <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A2 2 0 008.48 19h7.04a2 2 0 001.83-1.3L17 13M7 13V6a1 1 0 011-1h5a1 1 0 011 1v7"></path>
                            </svg>
                            <a href="tel:+61460747490" className="text-primary font-semibold hover:underline hover:text-orange-500 transition-colors text-sm md:text-base">
                                +61 460 747 490
                            </a>
                        </div>
                        <a
                            href="https://www.google.com/maps/dir//183+Hanson+Rd,+Athol+Park+SA+5012,+Australia"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 bg-primary hover:bg-red-600 text-white px-4 py-2 rounded-lg text-center text-sm font-medium transition-colors"
                        >
                            Get Directions
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationInfo;
