import * as React from "react";
import Card from "@mui/material/Card";
import { motion } from "framer-motion";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Project() {
  return (
    <div className="bg-gray-950 min-h-screen  " id="/project">
      <h1 className="text-white text-7xl font-sofadi md:flex  items-center justify-center  p-4 ">
        <span className="hidden md:block ">My</span>{" "}
        <span className="text-red-600 ml-3"> Projects</span>
      </h1>

      <div className="md:flex  md:ml-8 md:mt-48 justify-center items-center  p-2 ">
        <motion.Card
          initial={{ opacity: 0, x: "20%" }}
          whileInView={{ opacity: 1, x: "0" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className=" md:w-72 md:h-auto p-3  "
        >
          <CardMedia
            component="img"
            // height="194"
            image=".\img\BPV.png"
            alt="blogPostView"
          />
          <CardContent className="bg-gray-800 text-white ">
            <Typography variant="body2">
              {" "}
              {/*sx={{ color: "text.secondary" }}*/}
              Built a responsive blog app with React.js and React Router,
              utilizing local storage for efficient data management. Features
              include creating, viewing, and toggling between short and full
              descriptions, all within a clean, userfriendly interface.
            </Typography>
            <a href="https://github.com/utkarsh1121/blogPost " target="_blank">
              <GitHubIcon />
            </a>{" "}
          </CardContent>
        </motion.Card>

        <motion.Card
          initial={{ opacity: 0, x: "20%" }}
          whileInView={{ opacity: 1, x: "0" }}
          transition={{ delay: 0.7, duration: 0.7 }}
          viewport={{ once: true }}
          className="md:w-72  md:ml-8 p-3 "
        >
          <CardMedia
            component="img"
            // height="194"
            image=".\img\P.png"
            alt="Portfolio"
          />
          <CardContent className="bg-gray-800 text-white">
            <Typography variant="body2">
              {" "}
              {/*sx={{ color: "text.secondary" }}*/}I created a responsive
              portfolio website using React.js, featuring smooth scrolling,
              animations with Framer Motion, and a Material-UI design. It
              includes Home, About, Projects, and a Contact section with a
              Google Form, effectively showcasing my skills and work.
            </Typography>
            <a href="https://github.com/utkarsh1121/portfolio " target="_blank">
              <GitHubIcon />
            </a>{" "}
          </CardContent>
        </motion.Card>
      </div>
    </div>
  );
}
