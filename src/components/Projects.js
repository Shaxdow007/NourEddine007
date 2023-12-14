import React, { useState } from "react";
import Project from "./Project";
import { motion, AnimatePresence } from "framer-motion";

// array projects :
const projects = [
  {
    title: "AI shadow007",
    imgPath: "aiSdw.png",
    category: ["react", "tailwind"],
    link: "https://aishadow-9620a.web.app/",
  },
  {
    title: "nft store website",
    imgPath: "nft.png",
    category: ["html & css"],
    link: "https://shaxdow007.github.io/NFTs/",
  },
  {
    title: "Chat App",
    imgPath: "chatApp.png",
    category: ["tailwind"],
    link: "https://shaxdow007.github.io/chat/",
  },
  {
    title: "E-commerce webiste",
    imgPath: "ecommerce.png",
    category: ["react", "tailwind"],
    link: "https://e-commerce-4f000.web.app/",
  },
  {
    title: "nike store website",
    imgPath: "nike.png",
    category: ["html & css"],
    link: "https://shaxdow007.github.io/Nike/",
  },
  {
    title: "metaCode website",
    imgPath: "metaCode.png",
    category: ["tailwind"],
    link: "https://shaxdow007.github.io/metaCode/",
  },
  {
    title: "photograph portfolio",
    imgPath: "photograph.png",
    category: ["html & css"],
    link: "https://shaxdow007.github.io/photographer/",
  },
  {
    title: "hush webiste",
    imgPath: "hush.png",
    category: ["react", "tailwind"],
    link: "https://hash-5c2b8.web.app/",
  },
  {
    title: "barberShop website",
    imgPath: "barberShop.png",
    category: ["html & css"],
    link: "https://shaxdow007.github.io/bestbarber/",
  },
  {
    title: "image search api",
    imgPath: "searchApi.png",
    category: ["react", "tailwind"],
    link: "https://imagesercheapi.web.app/",
  },
];
const Projects = () => {
  const [activeBtn, setActiveBtn] = useState("all");
  const [projectArr, setProjectArr] = useState(projects);
  // caterogy filter :
  const handelFilterArr = (category) => {
    setActiveBtn(category);
    // filter array by the category :
    const newArr = projects.filter((item) => {
      const arr = item.category.find((ctg) => {
        return ctg === category;
      });
      return arr === category;
    });
    setProjectArr(newArr);
  };
  return (
    <section id="projects" className="my-24">
      <div className="container mx-auto p-2">
        <h2 className="uppercase text-4xl font-bold">
          here's some of the exciting <br className="hidden md:block" />{" "}
          projects i've done.
        </h2>
        {/* buttons */}
        <div className="flex justify-end items-center flex-wrap gap-4 my-12">
          <button
            className={activeBtn === "all" ? "active" : "btn"}
            onClick={() => {
              setActiveBtn("all");
              setProjectArr(projects);
            }}
          >
            all
          </button>
          <button
            className={activeBtn === "html & css" ? "active" : "btn"}
            onClick={() => handelFilterArr("html & css")}
          >
            html & css
          </button>
          <button
            className={activeBtn === "react" ? "active" : "btn"}
            onClick={() => handelFilterArr("react")}
          >
            react
          </button>
          <button
            className={activeBtn === "tailwind" ? "active" : "btn"}
            onClick={() => handelFilterArr("tailwind")}
          >
            tailwindCss
          </button>
        </div>
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
        >
          <AnimatePresence>
            {projectArr.map((item, index) => (
              <div key={index}>
                <Project
                  title={item.title}
                  img={item.imgPath}
                  category={item.category}
                  link={item.link}
                />
              </div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
