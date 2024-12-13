import locationmap from "../assets/locationmap.png";
const LocationInfo = () => {
  return (
    <div className="relative flex justify-center items-center mr-10 ml-10 bg-white p-4">
          <img
            src={locationmap}
            alt="Map"
            className="md:w-full md:h-auto md:object-cover rounded-lg w-[400px] h-[300px] cursor-pointer"
            onClick={() => window.location.href = 'https://www.google.com/maps/place/Biryani+Darbaar/@-34.8583383,138.5459891,16.87z/data=!4m6!3m5!1s0x6ab0c722dfd0d20f:0xf8e9dbeca90ef566!8m2!3d-34.858247!4d138.5469798!16s%2Fg%2F11j15jr692?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D'}
          />

          {/* Overlay Card */}
        <div className="absolute top-10 md:left-10 -left-4 bg-black bg-opacity-90 text-white p-6 rounded-lg md:w-72 w-52 ">
          <h2 className="md:text-2xl font-bold">
            Biryani darbaar <span className="text-red-500">in Athol oark</span>
          </h2>
          <p className=" mt-2 md:mt-4 md:text-sm">
            Tooley St, London Bridge, London SE1 2TF, United Kingdom
          </p>
          <p className="md:mt-4 mt-2">
            <span className="font-bold">Phone number</span>
            <br />
            <a href="tel:+12345678990" className="text-red-500">
              +12345678990
            </a>
          </p>
          <p className="md:mt-4 mt-2">
            <span className="font-bold">Website</span>
            <br />
            <a href="http://www.1234557.com" className="text-red-500">
              http://www.1234557.com
            </a>
          </p>
        </div>

        {/* Map Location Marker */}
        <div className="absolute top-32 right-0 md:right-24 flex items-center bg-black bg-opacity-80 text-white p-2 rounded-full">
          <span className="text-sm">McDonald's in Athol oark</span>
        </div>
      </div>
  );
};

export default LocationInfo;
