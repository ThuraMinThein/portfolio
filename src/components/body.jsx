import { TypeAnimation } from "react-type-animation";
import emailLogo from "../img/email.svg";
import github from "../img/github.svg";
import linkedin from "../img/linkedin.svg";
import profile from "../img/profile.jpg";

const Body = () => {
  const email = "thuraminthein.dev@gmail.com";

  const launchEmail = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("Copied email to clipboard!");
      })
      .catch(() => {
        console.error("Couldn't copy email");
      });
  };

  return (
    <main className="flex flex-col items-center justify-center">
      {/* Home Section */}
      <section id="home" className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <img
            src={profile}
            alt="Profile"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto mb-6 object-cover"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-primary">Thura Min Thein</span>
          </h1>
          <h2 className="text-xl md:text-3xl mb-6">
            Software Developer <br />
            <TypeAnimation
              sequence={["Java", 1000, "Dart", 1000, "JavaScript", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-primary"
            />
          </h2>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center">
        <div className="max-w-4xl p-6 bg-surface rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-6">About Me</h1>
          <p className="text-lg text-justify">
            Hello there! I'm Thura Min Thein, an 18-year-old software enthusiast who absolutely loves coding. For the past year, I've been fully immersed in the field of software engineering, finding great satisfaction in solving complex problems with lines of code. Coding isn't just a skill to me; it's a way to express my creativity and satisfy my curiosity. I strongly believe in the power of technology and constantly explore new programming languages and methodologies. Beyond all the technicalities, I see coding as a tool for making changes. Collaboration is at the core of how I work, and I deeply value teamwork and effective communication. As I continue to learn and refine my skills, I'm excited about contributing to advancements in the evolving world of software engineering.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center">
        <div className="max-w-6xl w-full p-6">
          <h1 className="text-4xl font-bold text-center mb-12">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a href="https://github.com/ThuraMinThein/DailyList" className="project-card">
              <div className="bg-surface rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-2xl font-bold mb-4">DailyList</h2>
                <p className="text-textSecondary">A task management app built with Flutter.</p>
              </div>
            </a>
            <a href="https://github.com/ThuraMinThein/Physics-Spot" className="project-card">
              <div className="bg-surface rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-2xl font-bold mb-4">Physics Spot</h2>
                <p className="text-textSecondary">An educational platform for learning physics concepts.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="flex justify-center items-center h-60">
        <div className="flex space-x-8">
          <a href="https://github.com/thuraminthein" className="hover:scale-110 transition-transform duration-300">
            <img src={github} alt="GitHub" className="w-12 h-12" />
          </a>
          <a href="https://www.linkedin.com/in/thura-min-thein-05dec12/" className="hover:scale-110 transition-transform duration-300">
            <img src={linkedin} alt="LinkedIn" className="w-12 h-12" />
          </a>
          <button onClick={launchEmail} className="hover:scale-110 transition-transform duration-300">
            <img src={emailLogo} alt="Email" className="w-12 h-12" />
          </button>
        </div>
      </section>
    </main>
  );
};

export default Body;