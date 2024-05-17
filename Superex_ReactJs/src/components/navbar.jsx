import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ navLight, gradient }) {
  let [toggle, setToggle] = useState(false);
  let [scrolling, setScrolling] = useState(false);

  let current = window.location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.scrollY > 50;
      setScrolling(isScrolling);
    };

    window.addEventListener("scroll", handleScroll);
    window.scrollTo(0, 0);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [current]);

  return (
    <header
      id="topnav"
      className={`defaultscroll sticky ${
        scrolling ? "nav-sticky !bg-[#f9f711]" : ""
      } ${gradient ? "gradient" : ""}`}
    >
      <div className="container lg:!flex lg:!justify-between">
        <Link className="logo" to="/">
          <span className=""></span>
          <img src={"/assets/9.png"} className="h-20" alt="" />
        </Link>
        <div className="menu-extras">
          <div className="menu-item">
            <button
              className={`navbar-toggle z-[999] ${toggle ? "open" : ""}`}
              id="isToggle"
              onClick={(e) => {
                setToggle(!toggle);
              }}
            >
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
        <div id="navigation" className="lg:ml-0 ml-32">
          <ul
            className={`navigation-menu nav-left ${
              navLight ? "nav-light" : ""
            }`}
          >
            <li className={`has-submenu parent-parent-menu-item`}>
              <Link to="#">Home</Link>
            </li>
            <li className={`has-submenu parent-parent-menu-item`}>
              <Link to="#">About</Link>
            </li>
            <li className={`has-submenu parent-parent-menu-item`}>
              <Link to="#">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="w-1/3 lg:flex hidden items-center justify-end">
          <Link className="w-14 h-14 rounded-full overflow-hidden">
            <img
              src="/assets/01.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </Link>
        </div>
        <div
          className={`nav py-20 w-2/3 h-screen bg-[#f9f711] fixed top-0 ${
            toggle ? "right-0" : "-right-full"
          } transition-all duration-700`}
        >
          <div className="w-full flex flex-col">
            <Link
              to={""}
              className="w-full !text-zinc-700 !font-bold px-4 py-3 hover:bg-[#c3e010]"
            >
              Home
            </Link>
            <Link
              to={""}
              className="w-full !text-zinc-700 !font-bold px-4 py-3 hover:bg-[#c3e010]"
            >
              About
            </Link>
            <Link
              to={""}
              className="w-full !text-zinc-700 !font-bold px-4 py-3 hover:bg-[#c3e010]"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
