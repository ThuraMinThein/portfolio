import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import menuBar from "/menu.svg";
import menuClose from "/close.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (nav === true) {
      document.addEventListener("scroll", () => {
        setNav(false);
      });
    }
  });

  return (
    <div className="flex justify-end items-center h-20 max-w-[1024px] bg-slate-100 mx-auto sticky top-0 z-[1]">
      <nav className="navBar">
        <ul className="md:flex justify-evenly items-center hidden">
          <li className=" p-4">
            <a href="/#home" className=" hover:text-[#616060]">
              Home
            </a>
          </li>
          <li className=" p-4">
            <a href="/#about" className=" hover:text-[#616060]">
              About
            </a>
          </li>
          <li className=" p-4">
            <a href="/#projects" className=" hover:text-[#616060]">
              Projects
            </a>
          </li>
          {/* <li className=" p-4">
            <Link
              to={"/contact"}
              className="resume__button font-medium text-[1em] rounded-[8px] hover:text-[#fff] hover:bg-[#3d3d40] border-transparent border border-solid px-[1.2em] py-[0.6em] transition-all duration-[0.5s] ease-out"
            >
              Contact
            </Link>
          </li> */}
          <li className="h-10 w-0.5 bg-slate-700 p-[1px]"></li>
          <li className=" p-2">
            <Link
              to={"/resume"}
              className="resume__button font-medium text-[1em] rounded-[8px] hover:text-[#fff] hover:bg-[#3d3d40] border-transparent border border-solid px-[1.2em] py-[0.6em] transition-all duration-[0.5s] ease-out"
            >
              Resume
            </Link>
          </li>
        </ul>
        {/* mobile Navbar */}
        <div
          className=" fixed top-6 right-6 cursor-pointer w-[40px] shadow-none md:hidden"
          onClick={handleNav}
        >
          {!nav ? (
            <img src={menuBar} alt="menu" />
          ) : (
            <img src={menuClose} alt="menuclose"></img>
          )}
        </div>
        <div
          className={
            nav
              ? " fixed left-6 top-6 w-[50%] bg-transparent backdrop-blur-md bg- border border-[#b9b9b9] rounded ease-out duration-500 md:hidden"
              : "fixed top-[-100%] "
          }
        >
          <ul>
            <li className=" p-4 border-b border-[#616060]">
              <a
                href="/#home"
                className=" text-slate-950 hover:text-[18px]"
                onClick={() => setNav(!nav)}
              >
                Home
              </a>
            </li>
            <li className=" p-4 border-b border-[#616060]">
              <a
                href="/#about"
                className=" text-slate-950 hover:text-[18px]"
                onClick={() => setNav(!nav)}
              >
                About
              </a>
            </li>
            <li className=" p-4 border-b border-[#616060]">
              <a
                href="/#projects"
                className=" text-slate-950 hover:text-[18px]"
                onClick={() => setNav(!nav)}
              >
                Projects
              </a>
            </li>
            {/* <li className=" border-b border-[#000] flex justify-center">
              <Link
                to={"/contact"}
                onClick={() => setNav(!nav)}
                className="resume__button text-[1em] w-full text-center text-[#000] hover:text-[#fff] hover:bg-[#3d3d40] border-transparent border border-solid px-[1.2em] py-[0.6em] duration-[0.5s] ease-out"
              >
                Contact
              </Link>
            </li> */}
            <li className=" flex justify-center">
              <Link
                to={"/resume"}
                onClick={() => setNav(!nav)}
                className="resume__button text-[1em] w-full text-center text-[#000] hover:text-[#fff] hover:bg-[#3d3d40] border-transparent border border-solid px-[1.2em] py-[0.6em] duration-[0.5s] ease-out"
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
