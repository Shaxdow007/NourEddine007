import React from "react";

const AboutMe = () => {
  return (
    <section id="about me" className="my-24">
      <div className="container mx-auto p-2">
        {/* social media */}
        <div className="mb-8">
          <p className="capitalize font-normal mb-6">Follow me:</p>
          <a
            href="https://www.linkedin.com/in/nour-eddine-houmame-6493052a2/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
            title="Linkden"
          >
            <button className="border-[1px] border-darkColor rounded-full p-4 hover:bg-secondaryColor/70 hover:text-white duration-300 ease-in">
              Lg.
            </button>
          </a>
          <a
            href="https://github.com/Shaxdow007"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <button className="border-[1px] border-darkColor rounded-full p-4 hover:bg-secondaryColor/70 hover:text-white duration-300 ease-in">
              Gh.
            </button>
          </a>
          <a
            href="https://www.instagram.com/shax_dow007/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4"
            title="Instagram"
          >
            <button className="border-[1px] border-darkColor rounded-full p-4 hover:bg-secondaryColor/70 hover:text-white duration-300 ease-in">
              In.
            </button>
          </a>
        </div>
        {/* about me */}
        <p className="capitalize text-center  lg:text-2xl xl:text-4xl">
          hello! i'm nour eddine, a creative and driven web
          <br className="hidden md:block" /> developer with{" "}
          <span className="uppercase text-secondaryColor font-medium underline">
            2 years of experience
          </span>{" "}
          in the
          <br className="hidden md:block" /> field. i thrive on turning
          imaginative ideas into digital <br className="hidden md:block" />
          realities, constantly seeking innovative ways to blend design and
          technology. i prossess a strong foundation in{" "}
          <span className="uppercase text-secondaryColor font-medium underline">
            Fron-End
          </span>{" "}
          and{" "}
          <span className="uppercase text-secondaryColor font-medium underline">
            Back-end
          </span>{" "}
          <br className="hidden md:block" />
          development, as well as a keep eye for responsive
          <br className="hidden md:block" /> design and user-centered interfaces
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
