import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
// import { motion, AnimatePresence } from "framer-motion";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Guess game state
  const [target, setTarget] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("Guess 1 - 100 👀");

  const handleGuess = () => {
    const num = Number(guess);
    if (!num) return;

    if (num === target) {
      setMessage("🎉 Correct! New number set!");
      setTarget(Math.floor(Math.random() * 100) + 1);
    } else if (num > target) {
      setMessage("Too high ↓");
    } else {
      setMessage("Too low ↑");
    }
    setGuess("");
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  const linkClasses = ({ isActive }) =>
    `relative px-4 py-2 rounded-lg transition-all duration-300 group ${isActive ? "text-[#FFF2E1] bg-[#A79277]" : "text-[#FFF2E1]/80"
    }`;

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden flex justify-between items-center p-4 bg-[#102C26] text-[#FFF2E1] fixed w-full z-50">
        <h1 className="font-semibold">Ikra</h1>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      {/* <AnimatePresence> */}
      {(isOpen || window.innerWidth >= 768) && (
        // <motion.aside
        //   initial={{ x: -300 }}
        //   animate={{ x: 0 }}
        //   exit={{ x: -300 }}
        //   transition={{ type: "spring", stiffness: 80 }}
        //   className="fixed top-0 left-0 h-screen w-72 bg-[#102C26] text-[#FFF2E1] flex flex-col justify-between p-6 shadow-2xl z-40"
        // >
        <div className="">
          {/* Top Section */}
          <div>
            {/* Profile */}
            <div className="flex flex-col items-center text-center">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400"
                alt="profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-[#A79277] mb-4"
              />
              <h2 className="text-lg font-bold">Nusfa Jahan Ikra</h2>
              <p className="text-sm text-[#FFF2E1]/70 mt-1">
                Front-End Web Developer
              </p>
            </div>

            {/* Nav Links */}
            <nav className="mt-8 flex flex-col gap-2">
              {navItems.map((item, i) => (
                <NavLink key={i} to={item.path} className={linkClasses}>
                  <span className="relative z-10">{item.name}</span>

                  {/* Hover Glow */}
                  <span className="absolute inset-0 bg-[#A79277] opacity-0 group-hover:opacity-20 blur-lg transition-all duration-300"></span>
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Fun Section - Guess Game */}
          <div className="mt-6 p-4 bg-[#A79277]/20 rounded-xl backdrop-blur">
            <p className="text-sm mb-2 font-medium">Feeling bored? 🎯</p>
            <p className="text-xs mb-2 text-[#FFF2E1]/70">{message}</p>

            <div className="flex gap-2">
              <input
                type="number"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                placeholder="Enter"
                className="w-full px-2 py-1 rounded bg-[#FFF2E1] text-black text-sm outline-none"
              />
              <button
                onClick={handleGuess}
                className="px-3 py-1 bg-[#A79277] rounded text-sm hover:scale-105 transition"
              >
                Go
              </button>
            </div>
          </div>
          {/* </motion.aside> */}
        </div>
      )}
      {/* </AnimatePresence> */}

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
        ></div>
      )}
    </>
  );
}


export default Navbar
