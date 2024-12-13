import { AppContext } from "../App.jsx";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

import ToggleTheme from "../components/ToggleTheme.jsx";

import Hero from "../components/sections/Hero.jsx";
import Projects from "../components/sections/Projects.jsx";
import Contact from "../components/sections/Contact.jsx";
import EducationAndExperience from "../components/sections/EducationAndExperience.jsx";
import Skills from "../components/sections/Skills.jsx";
import Rekomendation from "../components/sections/Rekomendation.jsx";
// import Produks from "../components/sections/Produk.jsx";

function Homepage() {
  const { switchTheme } = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <div className="bg-zinc-100 dark:bg-zinc-900">
      <div className=" md:mx-auto h-full border-x border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <ToggleTheme switchTheme={switchTheme} />

        <Hero />
        <EducationAndExperience />
        <Projects />
        <Skills />
        <h4 className="text-4xl font-bold text-center mt-20 dark:text-white px-5 text-red-800 pb-20">
          Mentors
        </h4>
        <Rekomendation />
        <Contact />
        {/* <Produks /> */}
      </div>
    </div>
  );
}

export default Homepage;
