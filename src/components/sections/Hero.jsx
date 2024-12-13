import user_info from "../../data/user_info.js";
import { IoIosArrowForward } from "react-icons/io";

function Hero() {
  const highlightText = (text, highlights) => {
    let modifiedText = text;

    highlights.forEach((highlight) => {
      const parts = modifiedText.split(highlight);
      modifiedText = parts.join(
        `<span class="text-red-800 dark:text-red-500 font-bold opacity-70 ">${highlight}</span>`
      );
    });

    return <span dangerouslySetInnerHTML={{ __html: modifiedText }} />;
  };

  return (
    <section
      id="hero"
      className="pb-28 pt-24 sm:pt-28 md:pt-44 flex px-6 lg:px-24"
    >
      <div className="self-center">
        <div className="hs-tooltip [--placement:right] w-[200px] hs-tooltip-toggle">
          <img
            src={user_info.main.photo}
            className="rounded-[10%] transform rotate-3 mb-6 lg:hidden"
            alt="Wahyu Pratama"
          />
          <span
            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-white border dark:border-zinc-800 dark:bg-zinc-950 text-xs font-medium text-zinc-950 dark:text-white rounded shadow-sm"
            role="tooltip"
          >
            Smt 5 Dancok angel eram 🤯
          </span>
          <div className="hidden lg:block w-[480px] self-center">
            <img
              className="rounded-[10%] transform rotate-3"
              src={user_info.main.photo}
              alt="Picture Wahyu Pratama"
            />
          </div>
        </div>
        <div className="flex gap-2 align-center flex-wrap md:flex-nowrap mt-10">
          <div className="lg:w-[80%] text-zinc-900 dark:text-zinc-100 self-center">
            <h2 className="text-lg opacity-60">{user_info.main.role}</h2>
            <h1 className="mt-4 text-5xl lg:w-[85%] font-poppins dark:text-zinc-100  text-gray-400 flex flex-row items-center gap-4 ">
              {user_info.main.name}
              <img
                src={user_info.main.icon}
                alt="icon"
                className="w-20 h-auto opacity-80"
              />
            </h1>

            <p className="mt-6 dark:text-zinc-300 text-base font-light lg:w-[87%] leading-7">
              {highlightText(user_info.main.description, [
                "Independent Study Fullstack Web Developer MSIB Kampus Merdeka Batch 7",
                "Fullstack Talent Class at Kemnaker Semarang Batch 17",
                "Kampus Merdeka Mandiri Inbound program at Malang State University.",
                "Web Developer",
              ])}
            </p>

            <div className="flex gap-2 mt-6 text-xs font-bold font-poppins">
              <a
                href="#projects"
                className="px-6 py-3 rounded border border-gray hover:bg-red-800 hover:text-white dark:border-white transition-all duration-300"
              >
                Portofolio
              </a>
              <a
                href="#contact"
                className="px-6 py-3 hover:text-red-800 dark:hover:text-red-500 transition-all duration-300 flex gap-3 hover:gap-4"
              >
                <span className="self-center">Contact</span>
                <IoIosArrowForward className="self-center" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
