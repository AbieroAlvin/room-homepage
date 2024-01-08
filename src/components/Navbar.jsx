import { useState } from "react";

import Logo from "../assets/images/logo.svg";
import close from "../assets/images/icon-close.svg";
import hamburger from "../assets/images/icon-hamburger.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="mx-auto w-full bg-transparent">
      <nav className="w-full flex gap-24 items-center mx-auto max-w-[760px] py-3 px-4 md:px-0">
        {/* logo */}
        <div className="flex items-center gap-24 w-full md:mx-auto">
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer md:hidden flex"
          >
            <img src={hamburger} alt="hamburger menu" />
          </div>
          <img src={Logo} alt="logo" />
        </div>
        {/* Navigation */}
        <div className="hidden md:flex items-center">
          <ul className="flex gap-8 text-[16px] text-White">
            <li>
              <a href="#" className="hover:underline underline-offset-8">
                home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline underline-offset-8">
                shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline underline-offset-8">
                about
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline underline-offset-8">
                contact
              </a>
            </li>
          </ul>
        </div>

        {/* overlay */}
        {nav ? (
          <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
        ) : (
          ""
        )}

        {/* top drawer menu */}
        <div
          className={`fixed left-0 w-full h-[80px] z-40 duration-500 bg-white ease-in-out py-[20px] px-[10px] ${
            nav ? "top-0" : "top-[-100%]"
          }`}
        >
          <nav className="flex items-center justify-center gap-8">
            {/* close */}
            <div onClick={() => setNav(!nav)} className="cursor-pointer">
              <img src={close} alt="close" />
            </div>

            {/* navigation */}
            <div className="flex items-center">
              <ul className="flex gap-8 text-[18px] text-Black font-[600]">
                <li>
                  <a href="#" className="hover:underline underline-offset-8">
                    home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline underline-offset-8">
                    shop
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline underline-offset-8">
                    about
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline underline-offset-8">
                    contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
