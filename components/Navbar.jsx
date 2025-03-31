"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiLocationMarker } from "react-icons/hi";
import Link from "next/link";
import ErnestoLogo from "@/public/Ernesto.png";
import Image from "next/image";
import { useState, useEffect } from "react";

import classes from "./Navbar.module.css";

const Navbar = () => {
  let emailAddress = "ernestogarsa.dev@gmail.com";

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isMovil, setIsMovil] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMovil(window.innerWidth < 768); // Cambia a `true` si es menor a 768px
    };

    checkScreenSize(); // Llamar una vez al inicio

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <nav className={`${classes.nav} navbar fixed-top px-2`}>
      <div className="container-fluid ">
        <Image
          className={classes.img}
          src={ErnestoLogo}
          alt="Logo de ErnestoGarSa"
        />
        <Link
          className="navbar-brand text-light fw-bold text-decoration-none  fs-3"
          href="/"
        >
          ErnestoGarSa
        </Link>
        {isMovil && (
          <>
            <button
              className={`text-light ${classes.button}`}
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <svg
                className={`${classes.svg}`}
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
            <div
              className={`offcanvas offcanvas-end `}
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className={`offcanvas-header ${classes.nav} text-light`}>
                <p
                  className="offcanvas-title fs-2 fw-bold"
                  id="offcanvasNavbarLabel"
                >
                  ErnestoGarSa
                </p>
                <button
                  type="button "
                  className={`btn-close btn-close-white`}
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className={`offcanvas-body ${classes.nav}`}>
                <ul
                  className={`navbar-nav justify-content-end flex-grow-1  p-3 gap-3 ${classes.lin}`}
                >
                  <li className={`nav-item `}>
                    <Link
                      className={`${classes.link}  text-decoration-none`}
                      href="https://www.github.com/ErnestoGarSa"
                      target="_blank"
                    >
                      <p className=" text-light fs-3 text-center">GitHub</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`${classes.link} text-decoration-none`}
                      href="https://www.linkedin.com/in/ErnestoGarSa"
                      target="_blank"
                    >
                      <p className=" text-light fs-3 text-center">LinkedIn</p>
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className={`${classes.link} text-decoration-none`}
                      href={`mailto:${emailAddress}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className=" text-light fs-3 text-center">Correo</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
        {!isMovil && (
          <ul
            className={`d-md-flex gap-3 text-light ${classes.lin} ${
              isOpen ? "d-block" : "d-none d-md-block"
            }`}
          >
            <li className="mt-md-4 ">
              <Link
                className={`${classes.link}`}
                href="https://www.github.com/ErnestoGarSa"
                target="_blank"
              >
                <FaGithub className={`${classes.icon}`} />
              </Link>
            </li>
            <li className="mt-md-4">
              <Link
                className={`${classes.link}`}
                href="https://www.linkedin.com/in/ErnestoGarSa"
                target="_blank"
              >
                <FaLinkedin className={`${classes.icon}`} />
              </Link>
            </li>
            <li className="mt-md-4">
              <Link
                className={`${classes.link}`}
                href={`mailto:${emailAddress}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <HiOutlineMail className={`${classes.icon}`} />
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
