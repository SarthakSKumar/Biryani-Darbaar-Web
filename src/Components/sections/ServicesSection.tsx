
const ServicesSection: React.FC = () => {
    return (
        <div className="w-full bg-yellow-100 py-14">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Left Image */}
                    <div className="hidden md:block md:w-2/5">
                        <img src="/assets/homechef1.png" alt="Chef" className="w-full h-auto" />
                    </div>

                    {/* Right Content */}
                    <div className="w-full md:w-2/3">
                        <h2 className="text-4xl md:text-5xl font-bold text-center md:text-left">
                            Offering <span className="text-primary">multiple</span> culinary experiences for every occasion
                        </h2>

                        <p className="mt-6 text-base md:text-lg text-neutral-600 text-center md:text-left">
                            At Biryani Darbar, we pride ourselves on being more than just a
                            restaurant. We are a culinary destination that offers a diverse
                            range of services to cater to your every need. From our exquisite
                            catering services to our personalized dining experiences, we go
                            above and beyond to ensure your satisfaction.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mt-12 mx-auto md:mx-0">
                            <div className="flex items-center gap-3">
                                <img src="/assets/order.png" alt="Online Order" className="w-10 h-10" />
                                <span className="font-medium text-base md:text-lg">Online Ordering</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <img src="/assets/24.7.png" alt="24/7 Services" className="w-10 h-10" />
                                <span className="font-medium text-base md:text-lg">24/7 Services</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <img src="/assets/booking.png" alt="Pre-Reservation" className="w-10 h-10" />
                                <span className="font-medium text-base md:text-lg">Pre-Reservations</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <img src="/assets/booking.png" alt="Organized Place" className="w-10 h-10" />
                                <span className="font-medium text-base md:text-lg">Organizing FoodHuts</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <img src="/assets/booking.png" alt="Super Chef" className="w-10 h-10" />
                                <span className="font-medium text-base md:text-lg">Super Chefs</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <img src="/assets/booking.png" alt="Clean Kitchen" className="w-10 h-10" />
                                <span className="font-medium text-base md:text-lg">Clean Kitchens</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
