import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../elements/Navbar";
import WebApp from "../fragments/Modal/WebApp";
import LandingPages from "../fragments/Modal/LandingPages";
import Footer from "../elements/Footer";

const BerandaLayouts = ({ children, secondary }) => {
  const [isOpenModalWebApp, setIsOpenModalWebApp] = useState(false);
  const [isOpenLandingPage, setIsOpenLandingPage] = useState(false);

  const handleOpenWebApp = () => {
    setIsOpenModalWebApp(true);
  };

  const handleHideWebApp = () => {
    setIsOpenModalWebApp(false);
  };

  const handleOpenLandingPage = () => {
    setIsOpenLandingPage(true);
  };

  const handleHideLandingPage = () => {
    setIsOpenLandingPage(false);
  };

  const [button, setButton] = useState([]);

  const handleButtonClick = () => {
    setButton([
      <>
        <button
          className="hover:-mt-1 hover:text-tertiary dark:hover:opacity-50 dark:text-white transition-all ease-in-out"
          onClick={handleOpenWebApp}
        >
          webApp
        </button>
        <button
          className="hover:-mt-1 hover:text-tertiary dark:hover:opacity-50 dark:text-white transition-all ease-in-out"
          onClick={handleOpenLandingPage}
        >
          LandingPage
        </button>
        <button className="hover:-mt-1 hover:text-tertiary dark:hover:opacity-50 dark:text-white transition-all ease-in-out">
          RevisiLagi
        </button>
      </>,
    ]);
  };

  return (
    <>
      {isOpenModalWebApp ? (
        <WebApp handleHideWebApp={handleHideWebApp} />
      ) : null}
      {isOpenLandingPage ? (
        <LandingPages handleHideLandingPage={handleHideLandingPage} />
      ) : null}
      <Navbar />
      <div className="w-full pt-20 px-4 lg:px-20">{children}</div>
      <div className="pt-5 px-4 lg:px-20 flex gap-2 items-center">
        <p className="text-xs text-black opacity-65 dark:text-white">V1.0</p>
        <p className="py-1 px-3 text-xs text-white dark:bg-black bg-tertiary">
          Beta
        </p>
      </div>
      <div className="pt-10 pb-10 px-4 lg:px-20 transition-all ease-in-out">
        <div className="max-w-[450px] lg:w-[700px] text-black">
          <h1 className="text-4xl lg:text-6xl font-extrabold dark:text-white">
            FrontEnd <br />
            <span className="dark:text-white text-tertiary">Developer.</span>
          </h1>
          <p className="max-w-[450px] mt-2 lg:mt-5 text-xs dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            architecto laudantium culpa incidunt. Repudiandae dolorum quos
            mollitia dolores magnam quis. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Architecto ea nemo deleniti quaerat
            quibusdam quisquam ratione unde rerum dolorem alias.
          </p>
          <button
            onClick={handleButtonClick}
            className="mt-10 relative bg-black dark:bg-white w-[250px] h-[35px] lg:w-[300px] p-1 font-semibold rounded-md"
          >
            <span
              className={`active:top-0 active:start-0 transition-all absolute flex justify-center items-center -start-1 -top-1 border w-[250px] h-[35px] lg:w-[300px] dark:bg-green bg-tertiary dark:text-white rounded-md font-semibold`}
            >
              Click Here
            </span>
          </button>
          <div className="my-20 flex gap-10">{button}</div>
        </div>
      </div>

      <Footer secondary={secondary} />
    </>
  );
};

export default BerandaLayouts;
