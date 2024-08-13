import BerandaLayouts from "../components/layouts/BerandaLayouts";
import { useState } from "react";

const Beranda = () => {
  const [secondary, setSecondary] = useState(false);

  const handleClick = () => {
    setSecondary(!secondary);
    const audio = new Audio("/audio/1.mp3");
    audio.play();
  };

  return (
    <main className={secondary ? "dark" : ""}>
      <div className="bg-white dark:bg-green">
        <BerandaLayouts secondary={secondary}>
          <div className="fixed z-20 end-0 lg:top-20 flex items-center lg:gap-5 gap-1">
            <div>
              <button
                onClick={handleClick}
                className="mt-10 relative bg-black dark:bg-white w-[100px] lg:w-[130px] h-[35px] p-1 rounded-md"
              >
                <span
                  className={`active:top-0 active:start-0 transition-all absolute flex justify-center items-center -start-1 -top-1 border w-[100px] lg:w-[130px] h-[35px] dark:bg-green bg-tertiary dark:text-white rounded-md font-semibold text-sm lg:text-base`}
                >
                  {!secondary ? "mode gelap" : "mode terang"}
                </span>
              </button>
            </div>
            <img src="/logo/2.svg" alt="" className="w-[60px] mt-4 lg:w-20" />
          </div>
        </BerandaLayouts>
      </div>
    </main>
  );
};

export default Beranda;
