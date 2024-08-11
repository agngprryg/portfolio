import { InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = ({ secondary }) => {
  // const [secondary, setSecondary] = useState(false);

  const dark = "/bg/1.png";
  const white = "/bg/2.png";

  return (
    <footer className="w-full py-2 px-4 lg:px-20 dark:text-white text-black">
      <div className="flex flex-wrap gap-20 items-center">
        <div>
          <p className=" text-xs mb-2">powered by:</p>
          <div className="w-[100px] px-1 ">
            <img
              src={!secondary ? dark : white}
              alt="revisiLagi"
              className="w-full "
            />
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3  text-xs">
          <p className="opacity-80 hover:opacity-100">Bantuan</p>
          <p className="opacity-80 hover:opacity-100">Pertanyaan</p>
          <p className="opacity-80 hover:opacity-100">Tentang</p>
          <p className="opacity-80 hover:opacity-100">Comunity</p>
          <p className="opacity-80 hover:opacity-100">support</p>
          <p className="opacity-80 hover:opacity-100">Perjalanan</p>
          <p className="opacity-80 hover:opacity-100">Kebijakan</p>
          <p className="opacity-80 hover:opacity-100">Perusahaan</p>
        </div>
        <img src="/logo/1.svg" alt="" className="w-[200px] -mt-5" />
      </div>
      <div className="mt-10 flex items-center">
        <p className="mr-5 text-xs  opacity-65">@build by agngprryg</p>
      </div>
    </footer>
  );
};

export default Footer;
