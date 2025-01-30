import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import menuBar from "../img/menu.svg";
import menuClose from "../img/close.svg";
import { useTheme } from './ThemeProvider';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { isDark, setIsDark } = useTheme();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (nav) {
      document.addEventListener("scroll", () => setNav(false));
    }
  }, [nav]);

  return (
    <div className="fixed top-0 w-full bg-surface bg-opacity-90 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <ul className="hidden md:flex space-x-8 items-center">
          <li><a href="/#home" className="hover:text-primary transition-colors duration-300">Home</a></li>
          <li><a href="/#about" className="hover:text-primary transition-colors duration-300">About</a></li>
          <li><a href="/#projects" className="hover:text-primary transition-colors duration-300">Projects</a></li>
          <li className="h-8 w-px bg-textSecondary"></li>
          <li>
            <Link to="/resume" className="btn-primary">
              Resume
            </Link>
          </li>
        </ul>

        <button onClick={handleNav} className="md:hidden">
          <img src={nav ? menuClose : menuBar} alt="Menu" className="w-8 h-8" />
        </button>

        {nav && (
          <div className="fixed top-16 right-4 bg-surface rounded-lg shadow-lg p-4 md:hidden">
            <ul className="space-y-4">
              <li><a href="/#home" onClick={handleNav} className="hover:text-primary">Home</a></li>
              <li><a href="/#about" onClick={handleNav} className="hover:text-primary">About</a></li>
              <li><a href="/#projects" onClick={handleNav} className="hover:text-primary">Projects</a></li>
              <li>
                <Link to="/resume" onClick={handleNav} className="btn-primary">
                  Resume
                </Link>
              </li>
            </ul>
          </div>
        )}

        <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-full hover:bg-primary/10">
          {isDark ? "🌙" : "☀️"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;