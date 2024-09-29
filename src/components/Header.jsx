import DataObjectIcon from "@mui/icons-material/DataObject";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

export default function Header() {
  const [active, setActive] = useState();

  const handleClick = () => {
    setActive();
  };

  return (
    <div className="fixed w-full z-50">
      <div>
        <span className="absolute top-0 left-0 p-4 text-white hidden md:block">
          <DataObjectIcon fontSize="medium" />
        </span>

        <motion.div
          whileTap={{ scale: 1.01 }}
          // drag="x"
          className="text-white text-right p-4"
        >
          <Link
            className={`${
              active === "/" ? "text-red-600" : "text-white"
            } md:mx-5 mx-2 hover:text-red-600`}
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
            } md:mx-5 mx-2 hover:text-red-600`}
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
            } md:mx-5 mx-2 hover:text-red-600`}
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
            } md:mx-5 mx-2 hover:text-red-600`}
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

// import DataObjectIcon from "@mui/icons-material/DataObject";
// import React, { useState } from "react";
// import { Link } from "react-scroll";

// export default function Header() {
//   const [active, setActive] = useState("");

//   const handleSetActive = (link) => {
//     setActive(link);
//   };

//   return (
//     <div className="fixed w-full bg-gray-800">
//       <div className="flex justify-between items-center p-4">
//         <span className="text-white">
//           <DataObjectIcon fontSize="medium" />
//         </span>

//         <div className="text-white text-right">
//           {["/", "/about", "/project", "/contact"].map((link, index) => (
//             <Link
//               key={link}
//               className={`md:mx-5 mx-2 cursor-pointer ${
//                 active === link ? "text-red-600" : "text-white"
//               } hover:text-red-600`}
//               to={link}
//               spy={true}
//               smooth={true}
//               offset={-50}
//               duration={500}
//               onClick={() => handleSetActive(link)} // Use onClick to update active state
//             >
//               {link === "/" ? "Home" : link.charAt(1).toUpperCase() + link.slice(2)}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
