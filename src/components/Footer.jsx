import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { FaShareAlt } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full bg-cyan-900 text-white p-4 mt-20 text-xl">
      <ul className="flex justify-center items-center gap-22  text-center">
        <li>
          <Link
            to="/Contatti"
            className="flex flex-col items-center hover:text-cyan-300"
          >
            <HiOutlineMail className="text-2xl" />
            <span className="text-sm mt-1">Contatti</span>
          </Link>
        </li>

        <li>
          <Link
            to="/Condividi"
            className="flex flex-col items-center hover:text-cyan-300"
          >
            <FaShareAlt className="text-2xl" />
            <span className="text-sm mt-1">Condividi</span>
          </Link>
        </li>

        <li>
          <Link
            to="/ChiSiamo"
            className="flex flex-col items-center hover:text-cyan-300"
          >
            <BsPeople className="text-2xl" />
            <span className="text-sm mt-1">Chi siamo</span>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
