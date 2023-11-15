import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiLocationMarker } from "react-icons/hi";
import Link from "next/link";
import ErnestoGarSa from "../../public/IMG_6793.jpg";
import Image from "next/image";

const Navbar = () => {
  let emailAddress = "ernestogarsa.dev@gmail.com";
  return (
    <>
      <div className="flex items-center justify-between bg-cyan-950 py-5 md:px-12 px-8 text-green-400 absolute w-[100%]">
        <div className="flex items-center gap-5">
          <Image className="h-12 w-12 rounded-full" src={ErnestoGarSa} alt="" />
          <a
            className="text-xl font-semibold hover:text-lime-400 duration-300"
            href=""
          >
            ErnestoGarSa
          </a>
        </div>
        <div className="text-3xl cursor-pointer md:hidden">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
        <ul className="font-medium shadow-md md:shadow-none md:flex md:items-center md:pb-0 pb-4 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-10 transition-all duration-300 ease-in-out  top-[-500px] ">
          <li className="md:ml-8 text-xl md:my-0 my-5">
            <Link
              className="hover:text-lime-400 duration-300"
              href="https://www.github.com/ErnestoGarSa"
            >
              <FaGithub className="nav-icon w-12 h-12" />
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-5">
            <Link
              className="hover:text-lime-400 duration-300"
              href="https://www.linkedin.com/in/ErnestoGarSa"
            >
              <FaLinkedin className="nav-icon w-12 h-12" />
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-5">
            <Link
              className="hover:text-lime-400 duration-300"
              href={`mailto:${emailAddress}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <HiOutlineMail className="nav-icon w-12 h-12" />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
