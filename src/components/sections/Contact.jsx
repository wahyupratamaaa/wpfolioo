import user_info from "../../data/user_info.js";

import { FaMedium, FaLinkedin, FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaArrowCircleUp } from "react-icons/fa";

function Contact() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section id="contact" className="mt-16 pt-12 px-6 lg:px-24">
      {/* =========== TITLE =========== */}
      <h4 className="text-5xl font-bold text-zinc-900 dark:text-zinc-100">
        Let&apos;s Get in Touch:{" "}
        <span className="text-red-800 dark:text-red-500">
          Ways to Connect with Me
        </span>
      </h4>

      {/* =========== DESCCRIPTION =========== */}
      <p className="mt-8 leading-7 text-base text-zinc-600 dark:text-zinc-300 font-light">
        {user_info.contact.description}
      </p>

      {/* =========== LINKS =========== */}
      <div className="mt-12">
        {/* =========== FACEBOOK =========== */}
        {/* <a
          href={user_info.socials.facebook}
          className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300  hover:text-zinc-700 transition-all duration-300"
        >
          <FaFacebook className="self-center text-lg text-red-800 dark:text-red-500" />
          <span className="self-center">Follow on Facebook</span>
        </a> */}

        {/* =========== X =========== */}
        <a
          href={user_info.socials.medium}
          className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 mt-4"
        >
          <FaMedium className="self-center text-lg text-red-800 dark:text-red-500" />
          <span className="self-center">Follow on Medium</span>
        </a>

        {/* =========== INSTAGRAM =========== */}
        <a
          href={user_info.socials.instagram}
          className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 mt-4"
        >
          <FaInstagram className="self-center text-lg text-red-800 dark:text-red-500" />
          <span className="self-center">Follow on Instagram</span>
        </a>

        {/* =========== LINKEDIN =========== */}
        <a
          href={user_info.socials.linkedin}
          className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 mt-4"
        >
          <FaLinkedin className="self-center text-lg text-red-800 dark:text-red-500" />
          <span className="self-center">Follow on Linkedin</span>
        </a>
        {/* <a
          href={user_info.socials.github}
          className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 mt-4"
        >
          <FaGithub className="self-center text-lg text-red-800 dark:text-red-500" />
          <span className="self-center">Follow on Github</span>
        </a> */}
        <a
          href={user_info.socials.tiktok}
          className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 mt-4"
        >
          <FaTiktok className="self-center text-lg text-red-800 dark:text-red-500" />
          <span className="self-center">Follow on Tiktok</span>
        </a>
      </div>

      <hr className="mt-6 w-72 border dark:border-zinc-800" />

      {/* =========== EMAIL =========== */}
      <div className="flex flex-col md:flex-row lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0 items-start justify-between mb-10">
        <a
          href={`${user_info.main.email}`}
          className="flex mt-6 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 gap-4 hover:text-zinc-700 transition-all duration-300 mb-5"
        >
          <MdEmail className="self-center text-lg text-red-800 dark:text-red-500" />
          <span>{user_info.main.email}</span>
        </a>
        <button
          onClick={() => scrollToTop()}
          className="text-zinc-600 self-center mt-2 md:mt-0 dark:text-zinc-300 mx-auto md:mx-0 text-sm font-light flex gap-2 justify-start "
        >
          <FaArrowCircleUp className="self-center text-red-800 dark:text-red-500" />
          Go back to top
        </button>
      </div>
    </section>
  );
}

export default Contact;
