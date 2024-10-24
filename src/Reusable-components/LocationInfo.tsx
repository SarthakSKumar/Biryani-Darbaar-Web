import locationmap from "../assets/locationmap.png";
const LocationInfo = () => {
  return (
    <div className="relative flex justify-center items-center mr-10 ml-10 bg-white p-4">
        {/* Map Image */}
        <img
          src={locationmap}
          alt="Map"
          className="w-full h-auto object-cover rounded-lg"
        />

        {/* Overlay Card */}
        <div className="absolute top-10 left-10 bg-black bg-opacity-90 text-white p-6 rounded-lg w-72">
          <h2 className="text-2xl font-bold">
            Biryani darbaar <span className="text-red-500">in Athol oark</span>
          </h2>
          <p className="mt-4 text-sm">
            Tooley St, London Bridge, London SE1 2TF, United Kingdom
          </p>
          <p className="mt-4">
            <span className="font-bold">Phone number</span>
            <br />
            <a href="tel:+12345678990" className="text-red-500">
              +12345678990
            </a>
          </p>
          <p className="mt-4">
            <span className="font-bold">Website</span>
            <br />
            <a href="http://www.1234557.com" className="text-red-500">
              http://www.1234557.com
            </a>
          </p>
        </div>

        {/* Map Location Marker */}
        <div className="absolute top-32 right-24 flex items-center bg-black bg-opacity-80 text-white p-2 rounded-full">
          <span className="text-sm">McDonald's in Athol oark</span>
        </div>
      </div>
  );
};

export default LocationInfo;
