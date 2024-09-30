import React from "react";
import CardContent from "@mui/material/CardContent";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function About() {
  const timelineData = [
    {
      title: "Computer Science & Engineering",
      // subtitle: "Miami, FL",
      description:
        "Babu Banarasi Das Institute of Technology and Management, Lucknow, 2020 - 2024 B.Tech. - Computer Science & Engineering | AKTU | Percentage: 64.86 / 100.00",
      iconType: "work",
      date: "2020 - 2024",
      background: "rgb(28, 29, 31)",
      color: "#fff",
      icon: (
        <img className="rounded-full" src="../img/bbd.png" alt="bbd img"></img>
      ),
    },
    {
      title: "Intermediate",
      // subtitle: "Miami, FL",
      description:
        "Guru Nanak Public Sr. Sec. School, Kanpur, 2020 | 12 th | CBSE | Percentage: 72 / 100.00",
      date: "2019 - 2020",
      iconType: "work",
      background: "rgb(28, 29, 31)",
      color: "#fff",
      icon: (
        <img
          className=" rounded-full"
          src="../img/inter.png"
          alt="gurunanak public school img"
        ></img>
      ),
    },
    {
      title: "High School",
      // subtitle: "Miami, FL",
      description:
        "Doon International School, Kanpur, 2018 | 10 th | CBSE | Percentage: 73.4 / 100.00",
      date: "2017 - 2018",
      iconType: "work",
      background: "rgb(28, 29, 31)",
      color: "#fff",
      icon: (
        <img className="rounded-full" src="../img/dis.jpeg" alt="dis img"></img>
      ),
    },
    // {
    // icon:<StarIcon />,
    // background: "black",
    //   color: "#fff",
    //   iconType: "work",
    // }
  ];
  return (
    <div className=" text-white" id="/about">
      <div className="text-white  md:flex justify-items-center p-3 md:ml-20 md:my-5 my-40">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-7xl font-sofadi w-auto lg:my-36 xl:my-40 md:my-44"
        >
          A little bit<div className="text-red-600">about me!</div>
        </motion.h1>
        <br />
        <motion.p
          initial={{ opacity: 0, x: "4%" }}
          whileInView={{ opacity: 1, x: "0" }}
          transition={{ delay: 0.9, duration: 0.9 }}
          viewport={{ once: true }}
          className="md:ml-12  md:my-36 text-lg md:w-3/5 "
        >
          I am committed to improving my programming, communication, and
          teamwork skills. I have completed my B.Tech in Computer Science and
          Engineering from BBDITM, Lucknow, and I am currently learning
          <span className="text-red-600"> React.js</span>, which is also the
          framework{" "}
          <span className=" italic">i used to build this website</span>. I am
          eager to seize opportunities to learn new skills and broaden my
          knowledge. My goal is to continuously grow both personally and
          professionally, enabling me to contribute more effectively to any team
          or project. I look forward to challenges that will push me to innovate
          and apply creative solutions while collaborating with others to
          achieve common goals.
        </motion.p>
      </div>
      <div>
        <h1 className="flex justify-center items-center text-7xl font-sofadi">
          <span className="flex">
            <span className="hidden md:block mr-2">My </span>Tech
            <span className="ml-4 text-red-600">Skills</span>
          </span>
        </h1>

        <div className="md:flex md:flex-col md:items-center my-20 sm:flex sm:justify-center sm:items-center">
          <motion.div
            initial={{ opacity: 0, x: "3%" }}
            whileInView={{ opacity: 1, x: "0" }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
            className="md:flex "
          >
            {/* <div className="flex "> */}
            <CardContent className="bg-gray-800 mx-3 my-2 rounded-3xl">
              <svg
                className="md:w-24 md:h-24 h-32 w-72"
                fill="none"
                // height="2500"
                // width="2183"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 124 141.53199999999998"
              >
                <path
                  d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z"
                  fill="#e34f26"
                />
                <path
                  d="M62.468 129.277V12.085l51.064.17-9.106 104.851z"
                  fill="#ef652a"
                />
                <path
                  d="M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z"
                  fill="#fff"
                />
              </svg>
            </CardContent>

            {/* </div> */}
            <CardContent className="bg-gray-800 mx-3 my-2 rounded-3xl">
              <svg
                fill="none"
                className="md:w-24 md:h-24 h-32 w-72"
                //js
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 124 141.53199999999998"
              >
                <path
                  d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z"
                  fill="#e9ca32"
                />
                <path
                  d="M62.468 129.277V12.085l51.064.17-9.106 104.851z"
                  fill="#ffde25"
                />
                <g fill="#fff">
                  <path d="M57 26H43.5v78L33 102V91.5l-12.5-2V113l36.5 9.5zM67.127 26H104.5L102 40.95H81.394v24.533H102L99.5 115l-32.373 7.5V107L89 99.5 90.263 79l-23.136 3.35z" />
                </g>
              </svg>{" "}
            </CardContent>
            <CardContent className="bg-gray-800 mx-3 my-2 rounded-3xl">
              <svg
                fill="blue"
                className="md:w-24 md:h-24 h-32 w-72"
                //react
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>ionicons-v5_logos</title>
                <path d="M410.66,180.72h0q-7.67-2.62-15.45-4.88,1.29-5.25,2.38-10.56c11.7-56.9,4.05-102.74-22.06-117.83-25-14.48-66,.61-107.36,36.69q-6.1,5.34-11.95,11-3.9-3.76-8-7.36c-43.35-38.58-86.8-54.83-112.88-39.69-25,14.51-32.43,57.6-21.9,111.53q1.58,8,3.55,15.93c-6.15,1.75-12.09,3.62-17.77,5.6C48.46,198.9,16,226.73,16,255.59c0,29.82,34.84,59.72,87.77,77.85q6.44,2.19,13,4.07Q114.64,346,113,354.68c-10,53-2.2,95.07,22.75,109.49,25.77,14.89,69-.41,111.14-37.31q5-4.38,10-9.25,6.32,6.11,13,11.86c40.8,35.18,81.09,49.39,106,34.93,25.75-14.94,34.12-60.14,23.25-115.13q-1.25-6.3-2.88-12.86,4.56-1.35,8.93-2.79c55-18.27,90.83-47.81,90.83-78C496,226.62,462.5,198.61,410.66,180.72Zm-129-81.08c35.43-30.91,68.55-43.11,83.65-34.39h0c16.07,9.29,22.32,46.75,12.22,95.88q-1,4.8-2.16,9.57a487.83,487.83,0,0,0-64.18-10.16,481.27,481.27,0,0,0-40.57-50.75Q276,104.57,281.64,99.64ZM157.73,280.25q6.51,12.6,13.61,24.89,7.23,12.54,15.07,24.71a435.28,435.28,0,0,1-44.24-7.13C146.41,309,151.63,294.75,157.73,280.25Zm0-48.33c-6-14.19-11.08-28.15-15.25-41.63,13.7-3.07,28.3-5.58,43.52-7.48q-7.65,11.94-14.72,24.23T157.7,231.92Zm10.9,24.17q9.48-19.77,20.42-38.78h0q10.93-19,23.27-37.13c14.28-1.08,28.92-1.65,43.71-1.65s29.52.57,43.79,1.66q12.21,18.09,23.13,37t20.69,38.6Q334,275.63,323,294.73h0q-10.91,19-23,37.24c-14.25,1-29,1.55-44,1.55s-29.47-.47-43.46-1.38q-12.43-18.19-23.46-37.29T168.6,256.09ZM340.75,305q7.25-12.58,13.92-25.49h0a440.41,440.41,0,0,1,16.12,42.32A434.44,434.44,0,0,1,326,329.48Q333.62,317.39,340.75,305Zm13.72-73.07q-6.64-12.65-13.81-25h0q-7-12.18-14.59-24.06c15.31,1.94,30,4.52,43.77,7.67A439.89,439.89,0,0,1,354.47,231.93ZM256.23,124.48h0a439.75,439.75,0,0,1,28.25,34.18q-28.35-1.35-56.74,0C237.07,146.32,246.62,134.87,256.23,124.48ZM145.66,65.86c16.06-9.32,51.57,4,89,37.27,2.39,2.13,4.8,4.36,7.2,6.67A491.37,491.37,0,0,0,201,160.51a499.12,499.12,0,0,0-64.06,10q-1.83-7.36-3.3-14.82h0C124.59,109.46,130.58,74.61,145.66,65.86ZM122.25,317.71q-6-1.71-11.85-3.71c-23.4-8-42.73-18.44-56-29.81C42.52,274,36.5,263.83,36.5,255.59c0-17.51,26.06-39.85,69.52-55q8.19-2.85,16.52-5.21a493.54,493.54,0,0,0,23.4,60.75A502.46,502.46,0,0,0,122.25,317.71Zm111.13,93.67c-18.63,16.32-37.29,27.89-53.74,33.72h0c-14.78,5.23-26.55,5.38-33.66,1.27-15.14-8.75-21.44-42.54-12.85-87.86q1.53-8,3.5-16a480.85,480.85,0,0,0,64.69,9.39,501.2,501.2,0,0,0,41.2,51C239.54,405.83,236.49,408.65,233.38,411.38Zm23.42-23.22c-9.72-10.51-19.42-22.14-28.88-34.64q13.79.54,28.08.54c9.78,0,19.46-.21,29-.64A439.33,439.33,0,0,1,256.8,388.16Zm124.52,28.59c-2.86,15.44-8.61,25.74-15.72,29.86-15.13,8.78-47.48-2.63-82.36-32.72-4-3.44-8-7.13-12.07-11a484.54,484.54,0,0,0,40.23-51.2,477.84,477.84,0,0,0,65-10.05q1.47,5.94,2.6,11.64h0C383.81,377.58,384.5,399.56,381.32,416.75Zm17.4-102.64h0c-2.62.87-5.32,1.71-8.06,2.53a483.26,483.26,0,0,0-24.31-60.94,481.52,481.52,0,0,0,23.36-60.06c4.91,1.43,9.68,2.93,14.27,4.52,44.42,15.32,71.52,38,71.52,55.43C475.5,274.19,446.23,298.33,398.72,314.11Z" />
                <path d="M256,298.55a43,43,0,1,0-42.86-43A42.91,42.91,0,0,0,256,298.55Z" />
              </svg>
            </CardContent>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: "-3%" }}
            whileInView={{ opacity: 1, x: "0" }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
            className="md:flex md:my-14 md:x-[10%]"
          >
            <CardContent className="bg-gray-800 mx-3 my-2 rounded-3xl">
              <svg
                fill="none"
                alt="css" //css
                className="md:w-24 md:h-24 h-32 w-72"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 124 141.53"
              >
                <path
                  d="M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z"
                  fill="#1b73ba"
                />
                <path
                  d="M62.468 129.275V12.085l51.064.17-9.106 104.85z"
                  fill="#1c88c7"
                />
                <path
                  d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z"
                  fill="#fff"
                />
              </svg>
            </CardContent>{" "}
            <CardContent className="bg-gray-800 mx-3 my-2 rounded-3xl">
              <svg
                className="md:w-24 md:h-24 h-32 w-72"
                // height="1499"
                viewBox=".15 .13 799.7 479.69"
                // width="2500"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m400 .13c-106.63 0-173.27 53.3-199.93 159.89 39.99-53.3 86.64-73.28 139.95-59.96 30.42 7.6 52.16 29.67 76.23 54.09 39.2 39.78 84.57 85.82 183.68 85.82 106.62 0 173.27-53.3 199.92-159.9-39.98 53.3-86.63 73.29-139.95 59.97-30.41-7.6-52.15-29.67-76.22-54.09-39.2-39.78-84.58-85.82-183.68-85.82zm-199.93 239.84c-106.62 0-173.27 53.3-199.92 159.9 39.98-53.3 86.63-73.29 139.95-59.96 30.41 7.61 52.15 29.67 76.22 54.08 39.2 39.78 84.58 85.83 183.68 85.83 106.63 0 173.27-53.3 199.93-159.9-39.99 53.3-86.64 73.29-139.95 59.96-30.42-7.59-52.16-29.67-76.23-54.08-39.2-39.78-84.57-85.83-183.68-85.83z"
                  fill="#06b6d4"
                />
              </svg>
            </CardContent>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: "3%" }}
            whileInView={{ opacity: 1, x: "0" }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
            className="md:flex"
          >
            {" "}
            <CardContent className="bg-gray-800 mx-3 my-2 rounded-3xl">
              <svg
                className="md:w-24 md:h-24 h-32 w-72"
                //router
                viewBox="0 -58 256 256"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="xMidYMid"
              >
                <g>
                  <path
                    d="M78.0659341,92.5875806 C90.8837956,92.5875806 101.274726,82.1966508 101.274726,69.3787894 C101.274726,56.5609279 90.8837956,46.1699982 78.0659341,46.1699982 C65.2480726,46.1699982 54.8571429,56.5609279 54.8571429,69.3787894 C54.8571429,82.1966508 65.2480726,92.5875806 78.0659341,92.5875806 Z M23.2087913,139.005163 C36.0266526,139.005163 46.4175825,128.614233 46.4175825,115.796372 C46.4175825,102.97851 36.0266526,92.5875806 23.2087913,92.5875806 C10.3909298,92.5875806 0,102.97851 0,115.796372 C0,128.614233 10.3909298,139.005163 23.2087913,139.005163 Z M232.791209,139.005163 C245.60907,139.005163 256,128.614233 256,115.796372 C256,102.97851 245.60907,92.5875806 232.791209,92.5875806 C219.973347,92.5875806 209.582418,102.97851 209.582418,115.796372 C209.582418,128.614233 219.973347,139.005163 232.791209,139.005163 Z"
                    fill="white"
                  ></path>
                  <path
                    d="M156.565464,70.3568084 C155.823426,62.6028163 155.445577,56.1490255 149.505494,51.6131676 C141.982638,45.8687002 133.461166,49.5960243 122.964463,45.8072968 C112.650326,43.3121427 105,34.1545727 105,23.2394367 C105,10.4046502 115.577888,0 128.626373,0 C138.29063,0 146.599638,5.70747659 150.259573,13.8825477 C155.861013,24.5221258 152.220489,35.3500418 159.258242,40.8041273 C167.591489,47.2621895 178.826167,42.5329154 191.362109,48.6517412 C195.390112,50.5026944 198.799584,53.4384578 201.202056,57.0769224 C203.604528,60.7153869 205,65.0565524 205,69.7183101 C205,80.633446 197.349674,89.7910161 187.035538,92.2861702 C176.538834,96.0748977 168.017363,92.3475736 160.494506,98.092041 C152.03503,104.551712 156.563892,115.358642 149.669352,126.774447 C145.756163,134.291567 137.802119,139.43662 128.626373,139.43662 C115.577888,139.43662 105,129.03197 105,116.197184 C105,106.873668 110.581887,98.832521 118.637891,95.1306146 C131.173833,89.0117889 142.408511,93.7410629 150.741758,87.2830007 C155.549106,83.5574243 156.565464,77.8102648 156.565464,70.3568084 Z"
                    fill="#D0021B"
                  ></path>
                </g>
              </svg>
            </CardContent>
            <CardContent className="bg-gray-800 mx-3 my-2 rounded-3xl">
              <svg
                className="md:w-24 md:h-24 h-32 w-72"
                //redux toolkit
                viewBox="0 0 256 244"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
              >
                <path
                  d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z"
                  fill="#764ABC"
                />
              </svg>
            </CardContent>
            <CardContent className="bg-gray-800 mx-3 my-2 rounded-3xl">
              <svg
                viewBox="0 0 467.046 250.164"
                className="md:w-24 md:h-24 h-32 w-72"
                xmlns="http://www.w3.org/2000/svg"
                width="2500"
                height="1339"
              >
                <path
                  d="M293.91 212.775c-6.025 0-10.926-4.905-10.926-10.93s4.901-10.926 10.926-10.926c6.026 0 10.927 4.9 10.927 10.926s-4.901 10.93-10.927 10.93m-120.774 0c-6.025 0-10.926-4.905-10.926-10.93s4.9-10.926 10.926-10.926c6.025 0 10.926 4.9 10.926 10.926s-4.9 10.93-10.926 10.93m124.693-65.82l21.838-37.822a4.548 4.548 0 0 0-1.663-6.206 4.549 4.549 0 0 0-6.206 1.663l-22.111 38.3c-16.91-7.716-35.9-12.015-56.164-12.015-20.264 0-39.254 4.299-56.163 12.015l-22.112-38.3a4.549 4.549 0 0 0-6.206-1.663 4.545 4.545 0 0 0-1.663 6.206l21.838 37.822c-37.499 20.395-63.146 58.358-66.898 103.209h262.408c-3.755-44.85-29.402-82.814-66.898-103.21"
                  fill="#3ddb85"
                />
                <path d="M0 0h467.046v250.164H0z" fill="none" />
              </svg>
            </CardContent>
          </motion.div>
        </div>
      </div>

      <div className="my-40">
        <h1 className=" flex justify-center items-center font-sofadi  text-7xl overflow-hidden p-3 ">
          <span className="text-red-600">Edu</span>cation
        </h1>
        <VerticalTimeline className="my-10 ">
          {timelineData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className={`vertical-timeline-element--${item.iconType}`}
              contentStyle={{ background: item.background, color: item.color }}
              contentArrowStyle={{
                borderRight: ` 0.5rem solid ${item.background}`,
              }}
              date={item.date}
              iconStyle={{ background: item.background, color: item.color }}
              icon={item.icon}
            >
              <h3 className="vertical-timeline-element-title text-red-600 font-sofadi font-bold text-2xl">
                {item.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.subtitle}
              </h4>
              <p>{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}
