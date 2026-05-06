import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="w-full px-4 sm:px-6 lg:px-12 py-12 bg-[#f0f0f3] dark:bg-[#121d37] transition">

      <div className="max-w-6xl mx-auto text-center space-y-8">

        {/* DIVIDER */}
        <div className="w-full h-px bg-gray-300 dark:bg-gray-700"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">

          <p>© {new Date().getFullYear()} Nusfa Jahan Ikra</p>

          <div className="flex justify-center gap-5">

            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
              className="socialIcons shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] dark:shadow-none "><FaGithub /></a>

            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
              className="socialIcons shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] dark:shadow-none"
            ><FaLinkedin /></a>

            <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer"
              className="socialIcons shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] dark:shadow-none"
            ><FaFacebook /></a>

            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"
              className="socialIcons shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] dark:shadow-none"
            ><IoLogoWhatsapp /></a>

            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"
              className="socialIcons shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] dark:shadow-none"
            ><SiGmail /></a>

          </div>

          <div className="flex gap-4">
            <a href="#home" className="hover:text-teal-500 transition">Home</a>
            <a href="#about" className="hover:text-teal-500 transition">About</a>
            <a href="#projects" className="hover:text-teal-500 transition">Projects</a>
            <a href="#contact" className="hover:text-teal-500 transition">Contact</a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;