import React from "react";
import Modal from "../../elements/Modal";

const LandingPages = ({ handleHideLandingPage }) => {
  return (
    <Modal>
      <div className=" bg-white lg:w-[900px] max-h-96 my-3 overflow-auto flex flex-col gap-10">
        <div className="rounded-lg shadow-xl border-b-4 p-1 lg:p-2">
          <div className="mb-10">
            <div className="flex items-center gap-2">
              <h2 className="text-xl lg:text-2xl font-bold">Movie List</h2>
            </div>
            <p className="my-5 max-w-xl">
              Web Movie List adalah platform online yang dirancang untuk
              membantu pengguna mengelola dan mengorganisasi daftar film favorit
              mereka dengan mudah. Melalui antarmuka yang intuitif, pengguna
              dapat membuat daftar film yang ingin ditonton, menambahkan ulasan
              pribadi, dan memberikan peringkat pada setiap film.
            </p>
            <div className="flex items-center gap-3">
              <p className="px-3 py-1 rounded-md shadow-xl">ReactJs</p>
              <p className="px-3 py-1 rounded-md shadow-xl">Vite</p>
              <p className="px-3 py-1 rounded-md shadow-xl">Redux</p>
              <p className="px-3 py-1 rounded-md shadow-xl">Tailwindcss</p>
            </div>
          </div>
          <div className="modal-content">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 ">
              <img
                src="/LandingPage/MovieList/1.png"
                alt=""
                className="w-full h-auto shadow-xl rounded-xl"
              />
              <img
                src="/LandingPage/MovieList/2.png"
                alt=""
                className="w-full h-auto shadow-xl rounded-xl"
              />
              <img
                src="/LandingPage/MovieList/3.png"
                alt=""
                className="w-full h-auto shadow-xl rounded-xl"
              />
              <img
                src="/LandingPage/MovieList/4.png"
                alt=""
                className="w-full h-auto shadow-xl rounded-xl"
              />
              <img
                src="/LandingPage/MovieList/5.png"
                alt=""
                className="w-full h-auto shadow-xl rounded-xl"
              />
              <img
                src="/LandingPage/MovieList/6.png"
                alt=""
                className="w-full h-auto shadow-xl rounded-xl"
              />
              <img
                src="/LandingPage/MovieList/7.png"
                alt=""
                className="w-full h-auto shadow-xl rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleHideLandingPage}>close</button>
    </Modal>
  );
};

export default LandingPages;
