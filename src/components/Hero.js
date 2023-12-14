import React from "react";

const Hero = () => {
  return (
    <section id="home" className="bg-darkColor py-24">
      <div className="container mx-auto p-2">
        <h1 className="uppercase font-semibold text-white text-4xl lg:text-6xl xl:text-8xl">
          coding with <br className="hidden md:block" /> passion, creating
          <br className="hidden md:block" /> with purpose
        </h1>
        <p className="capitalize font-normal my-6 text-white/75 md:text-xs xl:text-base">
          hello and welcome to my web developer portfolio! i'm
          <br className="hidden md:block" /> thrilled to showcase my passion for
          crafting captivating <br className="hidden md:block" /> and functinal
          websites.
        </p>
        <div>
          <a
            href="#contact"
            className="capitalize font-medium bg-primaryColor px-12 py-2 rounded-full hover:bg-primaryColor/90"
          >
            let's talk
          </a>
          <button></button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
