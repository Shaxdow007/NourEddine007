import React from "react";
import Logo from "../assets/Logo.svg";
const Footer = () => {
  const links = ["home", "about me", "projects", "contact"];
  return (
    <footer className="mt-24 bg-darkColor">
      <div className="conatainer mx-auto p-2">
        <div className="capitalize flex justify-between items-center">
          <a href="#home">
            <img src={Logo} alt="logo" className="w-[60px] h-[60px]" />
          </a>
          <ul className="hidden md:flex md:items-center md:flex-wrap md:gap-4">
            {links.map((item, key) => (
              <li key={key}>
                <a
                  href={`#${item}`}
                  className="text-white/80 lg:text-sm xl:text-base px-4 hover:text-white duration-300 ease-in"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <p className="md:hidden text-white/80 text-sm">
            made by <span className="text-primaryColor">Nour Eddine</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
