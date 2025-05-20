import { FaHome, FaUser, FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex justify-center gap-38 items-center bg-gray-700 p-4 shadow-md text-white text-2xl">
      <Link to="/" className="flex flex-col items-center hover:text-blue-300">
        <FaHome />
        <span className="text-sm mt-1">Home</span>
      </Link>

      <Link to="/Profilo" className="flex flex-col items-center hover:text-blue-300">
        <FaUser />
        <span className="text-sm mt-1">Profilo</span>
      </Link>

      <Link to="/Regole" className="flex flex-col items-center hover:text-blue-300">
        <FaQuestionCircle />
        <span className="text-sm mt-1">Regole</span>
      </Link>
    </div>
  );
};

export default Header;
