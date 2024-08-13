import React from "react";
import Modal from "../../elements/Modal";

const WebApp = ({ handleHideWebApp }) => {
  return (
    <Modal>
      <div className=" bg-white lg:w-[900px] max-h-96 my-3 overflow-auto flex flex-col gap-10">
        <div className="rounded-lg shadow-xl border-b-4 p-1 lg:p-2">
          <div className="mb-10">
            <div className="flex items-center gap-2">
              <h2 className="text-xl lg:text-2xl font-bold">Guciku</h2>
              <p className="px-3 py-0.5 text-xs bg-black text-white ">Dev</p>
            </div>
            <p className="my-5 max-w-xl">
              Web aplikasi pemesanan wisata ini adalah platform digital yang
              memungkinkan pengguna untuk mencari, memilih, dan memesan berbagai
              paket wisata dengan mudah dan cepat. Dengan antarmuka yang
              user-friendly, pengguna dapat menjelajahi destinasi populer,
              melihat detail paket, membandingkan harga, dan melakukan pemesanan
              secara online.
            </p>
            <div className="flex items-center gap-3">
              <p className="px-3 py-1 rounded-md shadow-xl">MongoDB</p>
              <p className="px-3 py-1 rounded-md shadow-xl">ExpressJs</p>
              <p className="px-3 py-1 rounded-md shadow-xl">ReactJs</p>
              <p className="px-3 py-1 rounded-md shadow-xl">NodeJs</p>
            </div>
          </div>
          <div className="modal-content">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 ">
              <img
                src="/webApp/guciku/1.png"
                alt=""
                className="w-full h-auto shadow-xl rounded-xl"
              />
              <img
                src="/webApp/guciku/2.png"
                alt=""
                className="w-full h-auto shadow-xl rounded-xl"
              />
              <img
                src="/webApp/guciku/3.png"
                alt=""
                className="w-full h-auto shadow-xl rounded-xl"
              />
              <img
                src="/webApp/guciku/4.png"
                alt=""
                className="w-full h-auto shadow-xl rounded-xl"
              />
              <img
                src="/webApp/guciku/5.png"
                alt=""
                className="w-full h-auto shadow-xl rounded-xl"
              />
              <img
                src="/webApp/guciku/6.png"
                alt=""
                className="w-full h-auto shadow-xl rounded-xl"
              />
              <img
                src="/webApp/guciku/7.png"
                alt=""
                className="w-full h-auto shadow-xl rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="rounded-lg shadow-xl border-b-4 p-1 lg:p-2">
          <div className="mb-10">
            <div className="flex items-center gap-2">
              <h2 className="text-xl lg:text-2xl font-bold">E-Comerce</h2>
            </div>
            <p className="my-5 max-w-xl">
              Web aplikasi e-commerce baju ini adalah platform belanja online
              yang menyediakan berbagai pilihan pakaian untuk segala kebutuhan
              dan gaya. Dengan katalog produk yang lengkap dan terkurasi,
              pengguna dapat dengan mudah mencari dan membeli baju dari berbagai
              merek terkenal maupun lokal.
            </p>
            <div className="flex items-center gap-3">
              <p className="px-3 py-1 rounded-md shadow-xl">Code Igniter 3</p>
              <p className="px-3 py-1 rounded-md shadow-xl">Mysql</p>
              <p className="px-3 py-1 rounded-md shadow-xl">Tailwindcss</p>
            </div>
          </div>
          <div className="modal-content">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 ">
              <img
                src="/webApp/e-comerce/1.jpeg"
                alt=""
                className="w-full h-auto shadow-xl rounded-xl"
              />
              <img
                src="/webApp/e-comerce/2.jpeg"
                alt=""
                className="w-full h-auto shadow-xl rounded-xl"
              />
              <img
                src="/webApp/e-comerce/3.jpeg"
                alt=""
                className="w-full h-auto shadow-xl rounded-xl"
              />
              <img
                src="/webApp/e-comerce/4.jpeg"
                alt=""
                className="w-full h-auto shadow-xl rounded-xl"
              />
              <img
                src="/webApp/e-comerce/5.jpeg"
                alt=""
                className="w-full h-auto shadow-xl rounded-xl"
              />
              <img
                src="/webApp/e-comerce/6.jpeg"
                alt=""
                className="w-full h-auto shadow-xl rounded-xl"
              />
              <img
                src="/webApp/e-comerce/7.jpeg"
                alt=""
                className="w-full h-auto shadow-xl rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleHideWebApp} className="px-5 t-5">
        close
      </button>
    </Modal>
  );
};

export default WebApp;
