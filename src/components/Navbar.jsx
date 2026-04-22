import { RxCross2 } from "react-icons/rx";
import { FiMenu } from "react-icons/fi";
import { IoHome } from "react-icons/io5";
import { MdVerifiedUser } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className='bg-teal-900 h-15 w-screen xl:w-[20dvw] xl:h-screen flex xl:flex-col justify-start items-center p-4'>
      <div className="">
        <img src="" alt="" />
        <h1 className='text-3xl uppercase text-[#E9E9E0]'>Nusfa Jahan</h1>
        <p>Hey! I'm a professional Front-end Web Developer</p>
      </div>
      <div className="">
        <a href="">Home</a>
        <a href="">About Me</a>
        <a href="">Projects</a>
        <a href="">Portfolio</a>
        <a href="">Contact</a>
      </div>
      <div className="mt-5 p-3 border-2 border-[#4fe3a5] shadow-sm shadow-[#4fe3a5] rounded-lg">
        <h1>Feeling bored?</h1>
        <h1>Let's guess the number between 0-100!</h1>
        <input type="text" name="" id="" placeholder='Enter your number:' />
        <button>enter</button>
      </div>
    </nav>
  )
}

export default Navbar