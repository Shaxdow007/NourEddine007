import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faCodeBranch,
  faDatabase,
  faObjectGroup,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";
import { faSketch } from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <section className="my-24">
      <div className="container mx-auto p-2">
        <h2 className="uppercase mb-6 text-center text-4xl font-bold">
          i specialize in a <br className="hidden md:block" /> range of skills
        </h2>

        <div className="capitalize grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4">
          <div className="text-center p-4 border-[1px] border-darkColor/30 rounded-xl hover:bg-primaryColor hover:border-primaryColor duration-300 ease-in">
            <p className="text-2xl text-darkColor">
              <FontAwesomeIcon icon={faTerminal} />
            </p>
            <h3 className="my-2 text-lg font-medium">front-end development</h3>
            <p className="text-sm text-darkColor/50">
              i am in expert HTML5, CSS3, JAVASCRIPT <br /> (ES6+), React...
            </p>
          </div>
          <div className="text-center p-4 border-[1px] border-darkColor/30 rounded-xl hover:bg-primaryColor hover:border-primaryColor duration-300 ease-in">
            <p className="text-2xl text-darkColor">
              <FontAwesomeIcon icon={faCode} />
            </p>
            <h3 className="my-2 text-lg font-medium">back-end development</h3>
            <p className="text-sm text-darkColor/50">
              i am in expert & doing laravel and php
            </p>
          </div>
          <div className="text-center p-4 border-[1px] border-darkColor/30 rounded-xl hover:bg-primaryColor hover:border-primaryColor duration-300 ease-in">
            <p className="text-2xl text-darkColor">
              <FontAwesomeIcon icon={faDatabase} />
            </p>
            <h3 className="my-2 text-lg font-medium">database management</h3>
            <p className="text-sm text-darkColor/50">
              i am in expert & doing MySQL, MongoDB
            </p>
          </div>
          <div className="text-center p-4 border-[1px] border-darkColor/30 rounded-xl hover:bg-primaryColor hover:border-primaryColor duration-300 ease-in">
            <p className="text-2xl text-darkColor">
              <FontAwesomeIcon icon={faCodeBranch} />
            </p>
            <h3 className="my-2 text-lg font-medium">version control</h3>
            <p className="text-sm text-darkColor/50">
              i am in expert & doing Git, gitHub <br /> providing the best
            </p>
          </div>
          <div className="text-center p-4 border-[1px] border-darkColor/30 rounded-xl hover:bg-primaryColor hover:border-primaryColor duration-300 ease-in">
            <p className="text-2xl text-darkColor">
              <FontAwesomeIcon icon={faObjectGroup} />
            </p>
            <h3 className="my-2 text-lg font-medium">responsive design</h3>
            <p className="text-sm text-darkColor/50">
              creating visually appealing and functional websites across devices
            </p>
          </div>
          <div className="text-center p-4 border-[1px] border-darkColor/30 rounded-xl hover:bg-primaryColor hover:border-primaryColor duration-300 ease-in">
            <p className="text-2xl text-darkColor">
              <FontAwesomeIcon icon={faSketch} />
            </p>
            <h3 className="my-2 text-lg font-medium">UI/UX design</h3>
            <p className="text-sm text-darkColor/50">
              wireframing, prototyping, user flow <br /> analysis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
