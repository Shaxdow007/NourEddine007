import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Client = () => {
  const client = [
    {
      message: `i'm impressed with nour eddine's FRONT-END skills. as a marketing manager, i appreciate their ability to 
      create beautiful and user-friendly interfaces with great attention to detail.`,
      name: "sarah johnson",
      job: "marketing manager",
    },
    {
      message: `i'm extremely happy with the result
      that i get. as a creative director,
      i value his creativity and innovation, which
      his bring to every priject, surpassing
      expectations. `,
      name: "najib tahiri",
      job: "creative director",
    },
    {
      message: `nour eddine is a game-changer for BACK-END development.
      i rely on their expertise is designing
      powerful and scalable systems that handle
      data seamlessly`,
      name: "emily khan",
      job: "hotel owner",
    },
  ];
  const [currentClient, setCurrentClient] = useState(0);
  // prev image slide
  const preClient = () => {
    const isFirstSlide = currentClient === 0;
    const newIndex = isFirstSlide ? client.length - 1 : currentClient - 1;
    setCurrentClient(newIndex);
  };
  // next image slide
  const nextClient = () => {
    const isLastSlide = currentClient === client.length - 1;
    const newIndex = isLastSlide ? 0 : currentClient + 1;
    setCurrentClient(newIndex);
  };
  return (
    <section className="my-24">
      <div className="container mx-auto p-2">
        <h2 className="uppercase mb-8 text-center text-4xl font-bold">
          don't just take my <br className="hidden md:block" /> word for it.
        </h2>

        <div className="lg:w-[800px] mx-auto space-y-8 capitalize text-center">
          <p className="text-darkColor/70 text-xl">
            {client[currentClient].message}
          </p>
          <p className="font-semibold text-darkColor text-base">
            {client[currentClient].name}
            <span className="text-darkColor/50 font-light text-sm">
              {" "}
              {client[currentClient].job}
            </span>
          </p>
          <div className="flex justify-between items-center flex-wrap gap-4">
            {/* prev client */}
            <button
              className="border-[1px] inline-block border-darkColor rounded-full p-4 hover:bg-secondaryColor/70 hover:text-white duration-300 ease-in"
              onClick={preClient}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            {/* next client */}
            <button
              className="border-[1px] inline-block border-darkColor rounded-full p-4 hover:bg-secondaryColor/70 hover:text-white duration-300 ease-in"
              onClick={nextClient}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
