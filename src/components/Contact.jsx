import React from "react";

export default function Contact() {
  return (
    <div
      className="flex flex-col bg-gray-900 md:min-h-screen h-screen p-6  "
      id="/contact"
    >
      {/* <div className=""> */}

      <div className=" ">
        <h1 className="text-6xl p-4 font-sofadi text-white flex justify-center ">
          Contact <span className="text-red-600 md:ml-2">Me</span>{" "}
        </h1>
      </div>

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScU82WLX1fokzVh8NJdCm8kSbPOEHA2S9zozxSZHgiXGZllHg/viewform?embedded=true"
        width="100%"
        height="513"
        className=""
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading…
      </iframe>
      {/* </div> */}
    </div>
  );
}
