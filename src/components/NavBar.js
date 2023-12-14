import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {
  const links = ["home", "about me", "projects",];
  const [mobileNav, setMobileNav] = useState(false);
  const handelMobileNav = () => {
    setMobileNav((prev) => !prev);
  };
  return (
    <header className="bg-darkColor">
      <nav className="container mx-auto p-2 relative">
        <div className="flex justify-between items-center">
          {/* box logo */}
          <div className="logo">
            <a href="#home">
              <img src={Logo} alt="Logo" className="w-[60px] h-[60px]" />
            </a>
          </div>
          {/* box logo close */}
          {/* box links descktop */}
          <div className="capitalize">
            <ul className="hidden md:flex items-center gap-4">
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
              <li>
                <a
                  href="#contact"
                  className="lg:text-sm xl:text-base text-darkColor bg-primaryColor py-2 px-4 rounded-full hover:bg-primaryColor/90 duration-300 ease-in"
                >
                  contact me
                </a>
              </li>
            </ul>
          </div>
          {/* box links descktop logo */}
          <div className="md:hidden">
            <button className="text-white" onClick={handelMobileNav}>
              {mobileNav ? (
                <FontAwesomeIcon icon={faXmark} className="text-2xl" />
              ) : (
                <FontAwesomeIcon icon={faBars} className="text-2xl" />
              )}
            </button>
          </div>
          {/* mobile navBar */}
          <ul
            className={
              mobileNav
                ? "z-10 bg-black capitalize w-[75%] h-[100vh] py-12 absolute top-[76px] right-0 md:hidden"
                : "hidden"
            }
          >
            {links.map((item, key) => (
              <li key={key}>
                <a
                  href={`#${item}`}
                  className="block text-left text-white/80 p-4 hover:text-white duration-300 ease-in"
                  onClick={handelMobileNav}
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="block text-white/80 p-4 hover:text-white duration-300 ease-in"
                onClick={handelMobileNav}
              >
                contact me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
