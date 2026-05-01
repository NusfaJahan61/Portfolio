import { FaLocationDot } from "react-icons/fa6";
import { MdAlternateEmail, MdPhone } from "react-icons/md";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact"
      className="w-full h-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 bg-[#f0f0f3] dark:bg-[#121d37] transition">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">

        {/* LEFT SIDE */}
        <div className="space-y-6">
          <h4 className="text-sm text-teal-600 dark:text-teal-400 font-semibold uppercase tracking-widest">
            Contact
          </h4>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white">
            Let’s Work Together
          </h2>

          <p className="text-gray-600 dark:text-gray-300">
            Got a project in mind or just want to say hi? Feel free to reach out.
            I’m always open to discussing new ideas.
          </p>

          <div className="space-y-4">

            <div className="flex items-start gap-4 p-4 rounded-xl bg-[#f0f0f3] dark:bg-slate-800 shadow-[5px_5px_10px_#c5c5c5,-5px_-5px_10px_#ffffff] dark:shadow-none hover:scale-[1.02] transition">
              <FaLocationDot className="text-teal-500 text-2xl mt-1" />
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">
                  Address
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Foleshore, Feni, Chottogram, Bangladesh
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-[#f0f0f3] dark:bg-slate-800 shadow-[5px_5px_10px_#c5c5c5,-5px_-5px_10px_#ffffff] dark:shadow-none hover:scale-[1.02] transition">
              <MdPhone className="text-teal-500 text-2xl mt-1" />
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">
                  Phone
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  +8801872446490
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-[#f0f0f3] dark:bg-slate-800 shadow-[5px_5px_10px_#c5c5c5,-5px_-5px_10px_#ffffff] dark:shadow-none hover:scale-[1.02] transition">
              <MdAlternateEmail className="text-teal-500 text-2xl mt-1" />
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">
                  Email
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  nusfaikra@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#f0f0f3] dark:bg-slate-800 shadow-[8px_8px_16px_#c5c5c5,-8px_-8px_16px_#ffffff] dark:shadow-none">

          <form className="space-y-5">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 sm:p-4 rounded-xl bg-[#f0f0f3] dark:bg-slate-700 shadow-inner outline-none focus:shadow-[0_0_10px_#14b8a6] transition text-gray-700 dark:text-white"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 sm:p-4 rounded-xl bg-[#f0f0f3] dark:bg-slate-700 shadow-inner outline-none focus:shadow-[0_0_10px_#14b8a6] transition text-gray-700 dark:text-white"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 sm:p-4 rounded-xl bg-[#f0f0f3] dark:bg-slate-700 shadow-inner outline-none focus:shadow-[0_0_10px_#14b8a6] transition text-gray-700 dark:text-white"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 sm:p-4 rounded-xl bg-[#f0f0f3] dark:bg-slate-700 shadow-inner outline-none focus:shadow-[0_0_10px_#14b8a6] transition text-gray-700 dark:text-white"
            />

            <textarea
              rows="4"
              placeholder="Your Message..."
              className="w-full p-3 sm:p-4 rounded-xl bg-[#f0f0f3] dark:bg-slate-700 shadow-inner outline-none focus:shadow-[0_0_10px_#14b8a6] transition text-gray-700 dark:text-white"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-teal-500 text-white font-semibold hover:bg-teal-600 transition hover:scale-[1.02] shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;