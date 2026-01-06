import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  Notepad,
} from "@phosphor-icons/react";

const Navbar = () => {
  return (
    <nav className="fixed py-4 px-2 lg:px-20 text-black dark:text-white flex items-center gap-5 lg:gap-20">
      <h1 className="font-apple mt-3.5 text-xl">hello</h1>
      <h1 className="text-[9px] text-black dark:text-white">
        Last Update : 6 jan 2026
      </h1>
      {/* <div className="flex gap-4">
        <Link
          to="/"
          className="text-xs hover:-mt-1 hover:text-tertiary dark:hover:text-secondary transition-all ease-in-out"
        >
          Beranda
        </Link>
        <Link
          to="/about"
          className="text-xs hover:-mt-1 hover:text-tertiary dark:hover:text-secondary transition-all ease-in-out"
        >
          About
        </Link>
        <Link
          to="/project"
          className="text-xs hover:-mt-1 hover:text-tertiary dark:hover:text-secondary transition-all ease-in-out"
        >
          Project
        </Link>
      </div> */}
      <div className="flex items-center gap-2">
        <a href="https://github.com/agngprryg/">
          <GithubLogo weight="fill" size={20} />
        </a>
        <a href="https://www.instagram.com/agngprryg">
          <InstagramLogo weight="duotone" size={20} />
        </a>
        <a href="https://www.linkedin.com/in/agngprryg">
          <LinkedinLogo weight="duotone" size={20} />
        </a>
        <a href="">
          <Notepad weight="duotone" size={20} />
        </a>
        <div className="hidden md:block lg:block ml-5 w-[35px] h-[35px] rounded-full dark:bg-white bg-tertiary">
          <img
            src="/profile/1.png"
            alt=""
            className="w-full h-full rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
