import Image from "./Image";
import logo from "../assets/img/logo-black.png.png";
import cart from "../assets/img/addCart.png";
import hamburger from "../assets/img/hamburger.png";
import close from "../assets/img/close.png";
import Button from "./Button";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const navLink = ["Home", "TeeSpace", "Shop", "Blog", "Pages"];

function NavBar() {
  const [open, setOpen] = useState(false);
  const menuOpen = () => {
    return setOpen(!open);
  };

  return (
    <nav className="px-5 lg:px-7 py-4 lg:py-6 flex justify-between items-center">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`z-50 bg-[#000000c7] top-0 left-0 w-full h-full ${
              open ? "fixed" : "hidden"
            }`}
          >
            {open && (
              <motion.div
                initial={{ x: -40 }}
                animate={{ x: 0 }}
                exit={{ x: -40 }}
                transition={{ duration: 0.5 }}
                className="bg-white max-w-64 h-full p-5 flex flex-col"
              >
                <div onClick={menuOpen} className="w-6 h-6 cursor-pointer mb-6">
                  <Image addImg={close} />
                </div>
                <ul className="flex flex-col items-star gap-4 mb-4">
                  {navLink.map((item, index) => (
                    <li
                      className="font-bold cursor-pointer hover:text-[#2EBB77]"
                      key={index}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <input
                  className="px-3 py-2"
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Search your item"
                />
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex items-center gap-3">
        <div
          onClick={menuOpen}
          className="w-6 h-6 block md:hidden cursor-pointer"
        >
          <Image addImg={hamburger} />
        </div>
        <div className="w-32 lg:w-fit">
          <Image addImg={logo} />
        </div>
      </div>
      <div className="hidden md:flex items-center gap-3 lg:gap-6">
        <ul className="flex items-center gap-4 lg:gap-6">
          {navLink.map((item, index) => (
            <li
              className="font-bold cursor-pointer hover:text-[#2EBB77]"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
        <span className="cursor-pointer">
          <svg
            className="w-4 lg:w-6 h-4 lg:h-6"
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z"
              fill-rule="nonzero"
            />
          </svg>
        </span>
      </div>
      <div className="flex items-center gap-2 lg:gap-4">
        <span className="p-1.5 lg:p-3 w-7 h-7 lg:w-fit lg:h-fit rounded-full cursor-pointer bg-[#F5F5F5] inline-block">
          <Image addImg={cart} />
        </span>
        <Button btnText={`Sign Up`} btnBg={`btn`} />
      </div>
    </nav>
  );
}

export default NavBar;
