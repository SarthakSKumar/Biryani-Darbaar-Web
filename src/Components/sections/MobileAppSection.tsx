import android from "@/assets/android.png";
import apple from "@/assets/download2.png";
import homechef2 from "@/assets/homechef2.png";

const MobileAppSection: React.FC = () => {
    return (
        <div className="w-full">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Left Content */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-bold text-center md:text-left">
                            {/* Ordering is <span className="text-primary">easier than ever</span><br className="hidden md:block" />
                            with our <span className="text-primary">mobile app</span> */}
                            Ordering is now <span className="text-primary">Easier</span> with <span className="text-primary">Biryani Darbar App</span><br className="hidden md:block" />
                        </h2>

                        <p className="mt-6 text-base md:text-lg text-neutral-600 text-center md:text-left">
                            Download our app, browse the full menu, and place your order in seconds.
                            Choose pickup or delivery and track your order in real time.
                        </p>

                        <div className="flex items-center justify-center md:justify-start gap-4 mt-8">
                            <img className="w-40" src={android} alt="Download on Android" />
                            <img className="w-40" src={apple} alt="Download on iOS" />
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="hidden md:block left-8 relative md:w-1/2">
                        <img src={homechef2} alt="Mobile App" className="w-full h-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileAppSection;
