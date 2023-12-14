import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
const Project = ({ title, img, link, category }) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="capitalize border-darkColor/20 border-[1px] rounded-3xl p-4 hover:border-darkColor/90 duration-300 ease-in"
    >
      <img src={`./img/${img}`} alt="img" className="rounded-3xl" />
      <h4 className="text-2xl my-4">{title}</h4>
      <div className="flex items-center flex-wrap gap-4">
        {category.map((category) => (
          <button className="uppercase my-4 border-[1px] text-darkColor/80 border-darkColor/50 px-4 py-2 rounded-full hover:bg-secondaryColor/70 hover:text-white duration-300 ease-in">
            {category}
          </button>
        ))}
      </div>
      <a
        href={link}
        className="mb-4 font-medium text-sm md:text-[18px] group hover:text-secondaryColor/70 duration-300 ease-in"
        target="_blank"
        rel="noopener noreferrer"
      >
        view project
        <FontAwesomeIcon
          icon={faArrowRight}
          className="ml-2 group-hover:-rotate-45 group-hover:text-secondaryColor/70 duration-300 ease-in"
        />
      </a>
    </motion.div>
  );
};

export default Project;
