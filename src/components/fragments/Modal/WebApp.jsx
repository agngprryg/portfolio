import React from "react";
import Modal from "../../elements/Modal";

const WebApp = ({ handleHideWebApp }) => {
  return (
    <Modal>
      <div className="bg-white lg:w-[900px] max-h-96 overflow-auto rounded-lg shadow-lg p-2">
        <h2 className="text-xl lg:text-2xl mb-4 font-extrabold">Guciku</h2>
        <div className="modal-content">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 ">
            <img src="/webApp/guciku/1.png" alt="" className="w-full h-auto" />
            <img src="/webApp/guciku/2.png" alt="" className="w-full h-auto" />
            <img src="/webApp/guciku/3.png" alt="" className="w-full h-auto" />
            <img src="/webApp/guciku/4.png" alt="" className="w-full h-auto" />
            <img src="/webApp/guciku/5.png" alt="" className="w-full h-auto" />
            <img src="/webApp/guciku/6.png" alt="" className="w-full h-auto" />
            <img src="/webApp/guciku/7.png" alt="" className="w-full h-auto" />
          </div>
        </div>
      </div>
      <button onClick={handleHideWebApp}>close</button>
    </Modal>
  );
};

export default WebApp;
