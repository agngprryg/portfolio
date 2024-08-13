import React from "react";
import { Link } from "react-router-dom";

const ErorPage = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center gap-5">
        <div className="flex items-center gap-3">
          <h1 className="text-base lg:text-xl">
            Maaf Ya Page Ini Lagi Dalam Perbaikan
          </h1>
          <img src="/logo/3.svg" alt="" className="w-12 lg:w-20 -mt-10" />
        </div>
        <Link to="/" className="-mt-5 hover:underline lg:text-base text-xs">
          kembali ke beranda
        </Link>
      </div>
    </>
  );
};

export default ErorPage;
