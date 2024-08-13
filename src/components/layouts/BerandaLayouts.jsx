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
      <main className="flex items-center gap-10">
        <button
          onClick={handleOpenWebApp}
          className="mt-10 relative bg-black dark:bg-white w-[100px] h-[35px] lg:w-[100px] p-1  rounded-md"
        >
          <span
            className={`active:top-0 active:start-0 transition-all absolute flex justify-center items-center -start-1 -top-1 border w-[100px] h-[35px] lg:w-[100px] dark:bg-green bg-tertiary text-sm dark:text-white rounded-md `}
          >
            webApp
          </span>
        </button>
        <button
          onClick={handleOpenLandingPage}
          className="mt-10 relative bg-black dark:bg-white w-[100px] h-[35px] lg:w-[100px] p-1  rounded-md"
        >
          <span
            className={`active:top-0 active:start-0 transition-all absolute flex justify-center items-center -start-1 -top-1 border w-[100px] h-[35px] lg:w-[100px] dark:bg-green bg-tertiary text-sm dark:text-white rounded-md `}
          >
            Landing Page
          </span>
        </button>
      </main>,
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
        <p className="py-1 px-3 text-xs text-white dark:bg-white dark:text-black bg-tertiary">
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
            halo perkenalkan saya agung prayogo saya mahasiswa semester 4, di
            perkuliahan saya cukup aktif di organisasi, saat ini saya menjabat
            sebagai wakil ketua dewan perwakilan mahasiswa, dan saya sangat
            tertarik di bidang web development khusus nya dalam ranah frontend
            developer
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
