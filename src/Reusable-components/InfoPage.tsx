import { FaTruck, FaPhone, FaClock } from "react-icons/fa";

const InfoPage = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap p-8 lg:p-16">
      {/* Delivery Information */}
      <div className="bg-[#FBFBFB] p-6 flex-1 rounded-tl-lg rounded-bl-lg">
        <div className="flex items-center mb-4">
          <FaTruck className="text-blue-600 mr-2" />
          <h2 className="text-xl font-bold">Delivery Information</h2>
        </div>
        <ul className="text-l text-gray-700">
          <li><strong>Monday:</strong> 12:00 AM–3:00 AM, 8:00 AM–3:00 AM</li>
          <li><strong>Tuesday:</strong> 8:00 AM–3:00 AM</li>
          <li><strong>Wednesday:</strong> 8:00 AM–3:00 AM</li>
          <li><strong>Thursday:</strong> 8:00 AM–3:00 AM</li>
          <li><strong>Friday:</strong> 8:00 AM–3:00 AM</li>
          <li><strong>Saturday:</strong> 8:00 AM–3:00 AM</li>
          <li><strong>Sunday:</strong> 8:00 AM–12:00 AM</li>
        </ul>
        <p className="mt-4 text-sm"><strong>Estimated time until delivery:</strong> 20 min</p>
      </div>

      {/* Contact Information */}
      <div className="bg-[#FBFBFB] p-6 flex-1">
        <div className="flex items-center mb-4">
          <FaPhone className="text-blue-600 mr-2" />
          <h2 className="text-xl font-bold">Contact Information</h2>
        </div>
        <p className="text-l text-gray-700 mb-4">
          If you have allergies or other dietary restrictions, please contact the restaurant. The restaurant will provide food-specific information upon request.
        </p>
        <p className="text-m text-gray-700"><strong>Phone number:</strong> +12345678990</p>
        <p className="text-m text-gray-700 mt-2"><strong>Website:</strong> <a href="http://www.1234557.com" className="text-blue-600">http://www.1234557.com</a></p>
      </div>

      {/* Operational Times */}
      <div className="bg-gray-900 text-white p-6 flex-1 rounded-tr-lg rounded-br-lg">
        <div className="flex items-center mb-4">
          <FaClock className="text-yellow-400 mr-2" />
          <h2 className="text-xl font-bold">Operational Times</h2>
        </div>
        <ul className="text-l">
          <li><strong>Monday:</strong> 8:00 AM–3:00 AM</li>
          <li><strong>Tuesday:</strong> 8:00 AM–3:00 AM</li>
          <li><strong>Wednesday:</strong> 8:00 AM–3:00 AM</li>
          <li><strong>Thursday:</strong> 8:00 AM–3:00 AM</li>
          <li><strong>Friday:</strong> 8:00 AM–3:00 AM</li>
          <li><strong>Saturday:</strong> 8:00 AM–3:00 AM</li>
          <li><strong>Sunday:</strong> 8:00 AM–3:00 AM</li>
        </ul>
      </div>
    </div>
  );
};

export default InfoPage;
