import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { FaShareAlt } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center gap-38 items-center bg-cyan-900 text-white p-4 mt-20 text-2xl">
      <ul className="flex gap-35">
        <li>
          <Link
            to="/Contatti"
            className="flex flex-col items-center hover:text-cyan-300"
          >
            <HiOutlineMail />
            <span className="text-sm mt-1">Contatti</span>
          </Link>
        </li>

        <Link
          to="/Condividi"
          className="flex flex-col items-center hover:text-cyan-300"
        >
          <FaShareAlt />
          <span className="text-sm mt-1">Condividi</span>
        </Link>

        <li>
          <Link
            to="/ChiSiamo"
            className="flex flex-col items-center hover:text-cyan-300"
          >
            <BsPeople />
            <span className="text-sm mt-1">Chi siamo</span>
          </Link>
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
