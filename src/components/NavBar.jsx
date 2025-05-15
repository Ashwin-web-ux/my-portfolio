import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleSetActive = (to) => {
    setActiveLink(to);
    setNav(false);
  };

  return (
    <div className="flex justify-between items-center w-full h-20 bg-black text-white fixed px-4 z-50">
      <div>
        <h1 className="text-4xl md:text-5xl font-logo bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer">
          @
        </h1>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:text-cyan-400 hover:scale-105 duration-200">
          <Link
            to="home"
            smooth
            duration={500}
            spy={true}
            activeClass="text-cyan-400"
            onSetActive={() => setActiveLink("home")}
            className={activeLink === "home" ? "text-cyan-400" : ""}
          >
            home
          </Link>
        </li>

        <li className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:text-cyan-400 hover:scale-105 duration-200">
          <Link
            to="about"
            smooth
            duration={500}
            spy={true}
            activeClass="text-cyan-400"
            onSetActive={() => setActiveLink("about")}
            className={activeLink === "about" ? "text-cyan-400" : ""}
          >
            about
          </Link>
        </li>

        <li className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:text-cyan-400 hover:scale-105 duration-200">
          <Link
            to="portfolio"
            smooth
            duration={500}
            spy={true}
            activeClass="text-cyan-400"
            onSetActive={() => setActiveLink("portfolio")}
            className={activeLink === "portfolio" ? "text-cyan-400" : ""}
          >
            portfolio
          </Link>
        </li>

        <li className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:text-cyan-400 hover:scale-105 duration-200">
          <Link
            to="skills"
            smooth
            duration={500}
            spy={true}
            activeClass="text-cyan-400"
            onSetActive={() => setActiveLink("skills")}
            className={activeLink === "skills" ? "text-cyan-400" : ""}
          >
            skills
          </Link>
        </li>

        <li className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:text-cyan-400 hover:scale-105 duration-200">
          <Link
            to="contact"
            smooth
            duration={500}
            spy={true}
            activeClass="text-cyan-400"
            onSetActive={() => setActiveLink("contact")}
            className={activeLink === "contact" ? "text-cyan-400" : ""}
          >
            contact
          </Link>
        </li>
        
      </ul>

      {/* Mobile Screen */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-300 hover:text-cyan-400 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Navigation */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 z-40">
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl font-bold text-gray-300 hover:text-cyan-400 transition-colors duration-300">
            <Link
              onClick={() => handleSetActive("home")}
              to="home"
              smooth
              duration={500}
              className={activeLink === "home" ? "text-cyan-400" : ""}
            >
              home
            </Link>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl font-bold text-gray-300 hover:text-cyan-400 transition-colors duration-300">
            <Link
              onClick={() => handleSetActive("about")}
              to="about"
              smooth
              duration={500}
              className={activeLink === "about" ? "text-cyan-400" : ""}
            >
              about
            </Link>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl font-bold text-gray-300 hover:text-cyan-400 transition-colors duration-300">
            <Link
              onClick={() => handleSetActive("portfolio")}
              to="portfolio"
              smooth
              duration={500}
              className={activeLink === "portfolio" ? "text-cyan-400" : ""}
            >
              portfolio
            </Link>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl font-bold text-gray-300 hover:text-cyan-400 transition-colors duration-300">
            <Link
              onClick={() => handleSetActive("skills")}
              to="skills"
              smooth
              duration={500}
              className={activeLink === "skills" ? "text-cyan-400" : ""}
            >
              skills
            </Link>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl font-bold text-gray-300 hover:text-cyan-400 transition-colors duration-300">
            <Link
              onClick={() => handleSetActive("contact")}
              to="contact"
              smooth
              duration={500}
              className={activeLink === "contact" ? "text-cyan-400" : ""}
            >
              contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
