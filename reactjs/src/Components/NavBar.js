import { Link } from "react-router-dom";
import { FiMapPin } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GiElephant } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="fixed border-t-2 border-gray-500 bottom-0 h-14 w-full z-50 bg-white flex items-center justify-around text-2xl text-green-800">
      <Link
        to="/"
        className="border-r-2 w-full h-full border-gray-500 flex justify-center items-center"
      >
        <FaMapMarkerAlt />
      </Link>
      <Link
        to="/animallist"
        className="border-r-2 w-full h-full border-gray-500 flex justify-center items-center"
      >
        <GiElephant />
      </Link>
      <Link
        to="/"
        className="border-r-2 w-full h-full border-gray-500 flex justify-center items-center"
      >
        Home
      </Link>
      <Link
        to="/"
        className="w-full h-full border-gray-500 flex justify-center items-center"
      >
        Home
      </Link>
    </div>
  );
};

export default Navbar;
