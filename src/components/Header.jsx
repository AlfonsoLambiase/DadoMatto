import { FaHome, FaUser, FaQuestionCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="flex justify-around items-center bg-gray-700 p-4 shadow-md text-white text-2xl">
      <button className="flex flex-col items-center hover:text-blue-300">
        <FaHome />
        <span className="text-sm mt-1">Home</span>
      </button>

      <button className="flex flex-col items-center hover:text-blue-300">
        <FaUser />
        <span className="text-sm mt-1">Profilo</span>
      </button>

      <button className="flex flex-col items-center hover:text-blue-300">
        <FaQuestionCircle />
        <span className="text-sm mt-1">Regole</span>
      </button>
    </div>
  );
};

export default Header;
