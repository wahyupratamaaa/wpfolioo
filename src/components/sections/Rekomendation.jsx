import user_info from "../../data/user_info.js";
import Mentor from "../Mentor.jsx";

function Rekomendation() {
  return (
    <section
      id="projects"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:px-16 "
    >
      {user_info.rekomendation.map((mentor, index) => {
        return (
          <Mentor
            key={index}
            profile={mentor.profile}
            name={mentor.name}
            title={mentor.title}
            date={mentor.date}
            description={mentor.description}
            linkedin={mentor.linkedin}
          />
        );
      })}
    </section>
  );
}

export default Rekomendation;
