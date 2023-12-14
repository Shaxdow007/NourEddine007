import React, { useEffect } from "react";
import { preLoaderAnim } from "../animation";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader h-[100vh] w-[100%] bg-darkColor text-white fixed bottom-0 right-0 left-0 z-50 flex justify-center items-center overflow-hidden">
      <div className="texts-container flex items-center justify-between h-[80px] w-[280px] text-[18px] font-extrabold overflow-hidden text-primaryColor">
        <span>EVERY PRO </span>
        <span>WAS ONCE </span>
        <span>A BEGINNER.</span>
      </div>
    </div>
  );
};

export default PreLoader;
