import { useEffect, useState } from "react";

// ----------------React Icons----------------
import { RxCross2 } from "react-icons/rx";
import { FiMenu } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { LuUserRound } from "react-icons/lu";
import { CiGrid42 } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

// ----------------Assets import----------------
import { MY_INFO } from "../assets/assets";
import { NavLink } from "react-router-dom";









const Navbar = () => {


  // ---------------------------------------------------State for theme toggle

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, [])

  // ---------------------------------------------------State for Sidebar Toggle

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // ---------------------------------------------------State for Minimizing Sidenavbar

  const [minimize, setMinimize] = useState(false);
  const toggleMinimize = () => {
    setMinimize(!minimize)
  }

  return (
    <aside className="navbar w-[20dvw] h-screen flex flex-col justify-between  bg-[#e9e9e0] dark:bg-slate-900 shadow-xl shadow-teal-300 text-teal-800 dark:text-teal-300">

      <div className="flex flex-col gap-5">
        {/* ----------SIDEBAR HEADER---------- */}

        <div className="sidebarheader flex flex-col justify-center items-center my-10 gap-2">
          <div className="profilePic">
            <img className="rounded-full size-40 object-cover" src={MY_INFO.picture} alt="image" />
          </div>
          <h1 className="text-2xl ">Nusfa Jahan Ikra</h1>
          <p className=" ">Hello! I'm a FrontEnd Web Developer.</p>
        </div>

        {/* ---------MENU OPTIONS---------- */}

        <ul className="p-5 flex flex-col gap-3 ">
          <NavLink to='/'>
            <a className={`navMenu`} href="#">
              <span className="navIcon "><IoHomeOutline /></span>
              <span className="">Home</span>
            </a>
          </NavLink>

          <NavLink>
            <a className=" navMenu" href="#">
              <span className="navIcon"><LuUserRound /></span>
              <span>About Me</span>
            </a>
          </NavLink>

          <NavLink>
            <a className=" navMenu" href="#">
              <span className="navIcon"><CiGrid42 /></span>
              <span>Projects</span>
            </a>
          </NavLink>
          <NavLink>

            <a className=" navMenu" href="#">
              <span className="navIcon"><MdOutlineVerifiedUser /></span>
              <span>Certifications</span>
            </a>
          </NavLink>

          <NavLink>
            <a className=" navMenu" href="#">
              <span className="navIcon"><LuPhone /></span>
              <span>Contact</span>
            </a>
          </NavLink>

        </ul>

      </div>

      {/* -------MODE TOGGLE------- */}
      <div className="bg-[#dadad1] dark:bg-slate-800 flex flex-row items-center justify-between s px-5 ">

        <div className="flex items-center">
          <button className="bg-[#e9e9e0] dark:bg-slate-900 font-bold rounded-full text-2xl p-3 m-2 shadow-md  hover:scale-105 transition-all ease-in-out cursor-pointer active:bg-neutral-400" onClick={toggleTheme}>
            {theme === "light" ? <CiDark /> : <CiLight />}
          </button>
          <p className="ml-1 text-sm">{theme === "light" ? "Dark Mode" : "Light Mode"}</p>
        </div>

        <div className="flex justify-end m-3">
          <button className="text-xl p-3 rounded-full bg-[#e9e9e0] dark:bg-slate-900 cursor-pointer" onClick={toggleMinimize}>{!minimize ? <FaChevronLeft /> : <FaChevronRight />}</button>
        </div>
      </div>


    </aside>
  )
}

export default Navbar