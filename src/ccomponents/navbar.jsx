import { Link } from "react-router-dom";
import menuBar from "/menu.svg";

const Navbar = () => {
  const changePage = () => {
    <Link to={"/resume"} />;
  };

  const handelMenuBar = () => {};
  return (
    <header className="flex justify-end p-3 sticky top-0">
      <nav className="navBar">
        <ul className="flex w-96 h-10 justify-evenly items-center">
          <li>
            <a href="/#home">Home</a>
          </li>
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
          <li className="h-10 w-0.5 bg-slate-700"></li>
          <li>
            <a href="/resume">
              <button
                onClick={changePage}
                className="resume__button text-[1em] rounded-[8px] hover:text-[#fff] hover:bg-[#646cff] border-transparent border border-solid px-[1.2em] py-[0.6em] transition-all duration-[0.5s] ease-out"
              >
                Resume
              </button>
            </a>
          </li>
        </ul>
      </nav>
      <button onClick={handelMenuBar}>
        <img src={menuBar} alt="" className="w-[40px] shadow-none md:hidden" />
      </button>
    </header>
  );
};

export default Navbar;
