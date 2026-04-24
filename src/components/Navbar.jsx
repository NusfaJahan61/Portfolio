import { RxCross2 } from "react-icons/rx";
import { FiMenu } from "react-icons/fi";
import { IoHome } from "react-icons/io5";
import { MdVerifiedUser } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { MY_INFO } from "../assets/assets";

const Navbar = () => {
  return (
    <aside className="navbar ">

      {/* ----------SIDEBAR HEADER---------- */}

      <div className="sidebarheader">
        <img className="rounded-full size-50 object-cover shadow-xl" src={MY_INFO.picture} alt="image" />
        <h1>Nusfa Jahan Ikra</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, ut?</p>
        <button><FaChevronLeft /></button>
      </div>

      {/* ---------MENU OPTIONS---------- */}

      <ul>
        <li>
          <a href="#">
            <span><IoHome /></span>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span><IoHome /></span>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span><IoHome /></span>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span><IoHome /></span>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span><IoHome /></span>
            <span>Home</span>
          </a>
        </li>
      </ul>

      {/* -------SIDEBAR FOOTER------- */}

      <button>
        <div className={``}>
          <span>Dark Mode</span>
          <span><CiDark /></span>
        </div>
        <div className={``}>
          <span>Light Mode</span>
          <span><CiLight /></span>
        </div>
      </button>

    </aside>
  )
}

export default Navbar