import Image from "./Image";
import logo from "../assets/img/logo-black.png.png";
import cart from "../assets/img/addCart.png";
import Button from "./Button";

const navLink = ["Home", "TeeSpace", "Shop", "Blog", "Pages"];

function NavBar() {
  return (
    <nav className="px-7 py-6 flex justify-between items-center">
      <div>
        <Image addImg={logo} />
      </div>
      <div className="flex items-center gap-6">
        <ul className="flex items-center gap-6">
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
            className="w-6 h-6"
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
      <div className="flex items-center gap-4">
        <span className="p-3 rounded-full cursor-pointer bg-[#F5F5F5] inline-block">
          <Image addImg={cart} />
        </span>
        <div>
          <span className="text-[#9B9B9B] font-bold uppercase"> Hotline:</span>
          <p className="font-bold text-black leading-4">00 1900 8188</p>
        </div>
        <Button btnText={`Sign Up`} btnBg={`btn`} />
      </div>
    </nav>
  );
}

export default NavBar;
