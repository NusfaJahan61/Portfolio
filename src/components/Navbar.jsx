import { useState } from "react";

// ----------------React Icons----------------
import { RxCross2 } from "react-icons/rx";
import { FiMenu } from "react-icons/fi";
import { CiHome } from "react-icons/ci";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { LuUserRound } from "react-icons/lu";
import { CiGrid42 } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { FaChevronLeft } from "react-icons/fa";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

// ----------------Assets import----------------
import { MY_INFO } from "../assets/assets";









const Navbar = () => {


  // ---------------------------------------------------State for theme toggle

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  };

  // ---------------------------------------------------State for sidebar toggle

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <aside className="navbar w-[20dvw] h-screen flex flex-col justify-between bg-white">

      {/* ----------SIDEBAR HEADER---------- */}

      <div className="sidebarheader flex flex-col justify-center items-center my-10 gap-2">
        <img className="rounded-full size-40 object-cover shadow-xl" src={MY_INFO.picture} alt="image" />
        <h1 className="text-2xl text-neutral-700">Nusfa Jahan Ikra</h1>
        <p className="text-neutral-600 ">Hello! I'm a professional frontEnd Web Developer.</p>
        <button><FaChevronLeft /></button>
      </div>

      {/* ---------MENU OPTIONS---------- */}

      <ul className="p-5 flex flex-col gap-3 ">
        <li>
          <a className=" navMenu shadow-md active:bg-teal-600 flex flex-row items-center justify-start gap-3 rounded-full p-3" href="#">
            <span className="rounded-full text-2xl p-2 shadow-md hover:text-teal-300 transition-all ease-in-out font-bold"><CiHome /></span>
            <span className="">Home</span>
          </a>
        </li>

        <li>
          <a className=" navMenu shadow-md active:bg-teal-600 flex flex-row items-center justify-start gap-3 rounded-full p-3" href="#">
            <span className="rounded-full text-2xl p-2 shadow-md hover:text-teal-300 transition-all ease-in-out font-bold"><LuUserRound /></span>
            <span>About Me</span>
          </a>
        </li>

        <li>
          <a className=" navMenu shadow-md active:bg-teal-600 flex flex-row items-center justify-start gap-3 rounded-full p-3" href="#">
            <span className="rounded-full text-2xl p-2 shadow-md hover:text-teal-300 transition-all ease-in-out font-bold"><CiGrid42 /></span>
            <span>Projects</span>
          </a>
        </li>
        <li>
          <a className=" navMenu shadow-md active:bg-teal-600 flex flex-row items-center justify-start gap-3 rounded-full p-3" href="#">
            <span className="rounded-full text-2xl p-2 shadow-md hover:text-teal-300 transition-all ease-in-out font-bold"><MdOutlineVerifiedUser /></span>
            <span>Certifications</span>
          </a>
        </li>
        <li>
          <a className=" navMenu shadow-md active:bg-teal-600 flex flex-row items-center justify-start gap-3 rounded-full p-3" href="#">
            <span className="rounded-full text-2xl p-2 shadow-md hover:text-teal-300 transition-all ease-in-out font-bold"><LuPhone /></span>
            <span>Contact</span>
          </a>
        </li>

      </ul>

      {/* -------SIDEBAR FOOTER------- */}
      <div className="flex justify-between items-center px-5 rounded-full shadow-md mx-5 mb-5">
        <p>{theme === "light" ? "Dark Mode" : "Light Mode"}</p>
        <button className="rounded-full text-2xl p-3 m-3 shadow-md shadow-teal-300 hover:text-teal-300 transition-all ease-in-out cursor-pointer active:bg-neutral-400" onClick={toggleTheme}>
          {theme === "light" ? <CiDark /> : <CiLight />}
        </button>
      </div>

    </aside>
  )
}

export default Navbar