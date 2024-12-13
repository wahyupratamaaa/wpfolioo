import { ImLinkedin2 } from "react-icons/im";

function Mentor({ profile, name, date, description, title, linkedin }) {
  return (
    <div className="hover:bg-zinc-100 hover:dark:bg-zinc-900 transition-all duration-300 p-6 md:rounded-xl pb-32 gap-6 flex flex-col relative">
      <div className="flex flex-row gap-4 items-center">
        <img
          src={profile}
          alt={`${name} profile`}
          className="w-16 h-16 rounded-full object-cover mb-4"
        />
        <div className="self-center flex flex-col">
          <h3 className="font-bold text-gray-500 font-sm text-lg  dark:text-zinc-300">
            {name}
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">{title}</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 ">{date}</p>
        </div>
      </div>
      <div className="flex flex-col justify-between p-5">
        <p className="leading-7 text-zinc-500 dark:text-zinc-300 font-light text-base">
          {description}
        </p>
        <a
          href={linkedin}
          className="absolute right-0 bottom-0 border text-red-800 hover:bg-red-800 hover:text-white hover:dark:bg-red-500 hover:dark:text-white transition-all duration-300 border-red-800 dark:border-red-500 rounded-full p-4 m-10"
        >
          <ImLinkedin2 className="text-lg cursor-pointer" />
        </a>
      </div>
    </div>
  );
}

export default Mentor;
