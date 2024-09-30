import DataObjectIcon from "@mui/icons-material/DataObject";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Header() {
  const [active, setActive] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setActive();
    setIsOpen(false);
  };

  return (
    <div className="fixed w-full z-50">
      <div>
        <span className="absolute top-0 left-0 p-5 text-white hidden md:block">
          <DataObjectIcon fontSize="medium" />
        </span>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className=" absolute top-0 right-0 text-white flex p-4 fixed"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        <motion.div
          className={`${
            isOpen ? "flex flex-col bg-gray-800  mr-7 ml-64 mt-12 rounded-lg" : "hidden"
          } md:flex md:flex-row md:absolute top-0 right-0 md:text-white md:p-4 `}
          whileTap={{ scale: 1.01 }}
          // className="text-white text-right p-4"
        >
          <Link
            className={`${ 
              active === "/" ? "text-red-600" : "text-white"
            } md:mx-5 mx-2  p-2 hover:text-red-600`}
            to="/"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => handleClick("/")}
          >
            Home
          </Link>
          <Link
            className={`${
              active === "/about" ? "text-red-600" : "text-white"
            } md:mx-5 mx-2  p-2 hover:text-red-600`}
            to="/about"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            onClick={() => handleClick("/about")}
          >
            About
          </Link>
          <Link
            className={`${
              active === "/project" ? "text-red-600" : "text-white"
            } md:mx-5 mx-2  p-2 hover:text-red-600`}
            to="/project"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => handleClick("/project")}
          >
            Project
          </Link>
          <Link
            className={`${
              active === "/contact" ? "text-red-600" : "text-white"
            } md:mx-5 mx-2  p-2 hover:text-red-600`}
            to="/contact"
            spy={true}
            smooth={true}
            offset={-5}
            duration={500}
            onClick={() => handleClick("/contact")}
          >
            Contact
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
