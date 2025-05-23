import { FaHome, FaUser, FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex justify-center items-center gap-10 flex-wrap bg-cyan-900 p-4 shadow-md text-white text-xl">
      <Link to="/" className="flex flex-col items-center hover:text-cyan-300">
        <FaHome className="text-2xl" />
        <span className="text-sm mt-1">Home</span>
      </Link>

      <Link to="/Profilo" className="flex flex-col items-center hover:text-cyan-300">
        <FaUser className="text-2xl" />
        <span className="text-sm mt-1">Profilo</span>
      </Link>

      <Link to="/Regole" className="flex flex-col items-center hover:text-cyan-300">
        <FaQuestionCircle className="text-2xl" />
        <span className="text-sm mt-1">Regole</span>
      </Link>
    </div>
  );
};

export default Header;
