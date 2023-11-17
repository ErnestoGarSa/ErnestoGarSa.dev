"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiLocationMarker } from "react-icons/hi";
import Link from "next/link";
import ErnestoGarSa from "../../public/IMG_6793.jpg";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  let emailAddress = "ernestogarsa.dev@gmail.com";

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-cyan-950 py-4 absolute w-screen">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <Image
              className="h-12 w-12 rounded-full"
              src={ErnestoGarSa}
              alt=""
            />
            <Link
              href="/"
              className="text-white text-xl font-semibold hover:text-lime-400 duration-300"
            >
              ErnestoGarSa
            </Link>
          </div>
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none md:hidden"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <ul
            className={`md:flex space-x-4 text-white text-lg ${
              isOpen ? "block" : "hidden md:block"
            }`}
          >
            <li className="md:ml-8 text-xl md:my-0 my-5 ms-4">
              <Link
                className="hover:text-lime-400 duration-300"
                href="https://www.github.com/ErnestoGarSa"
                target="_blank"
              >
                <FaGithub className="nav-icon w-12 h-12" />
              </Link>
            </li>
            <li className="md:ml-8 text-xl md:my-0 my-5">
              <Link
                className="hover:text-lime-400 duration-300"
                href="https://www.linkedin.com/in/ErnestoGarSa"
                target="_blank"
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
      </div>
    </nav>
  );
};

export default Navbar;
