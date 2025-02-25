import { TypeAnimation } from "react-type-animation";
import emailLogo from "../img/email.svg";
import github from "../img/github.svg";
import linkedin from "../img/linkedin.svg";
import profile from "../img/profile.png";
import Projects from './Projects';
import Skills from './Skills';

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
      <section id="home" className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <img
            src={profile}
            alt="Profile"
            className="w-40 h-40 md:w-56 md:h-56 mx-auto mb-6 object-cover rounded-full border-4 border-primary shadow-lg"
          />

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-indigo-600 text-transparent bg-clip-text">Thura Min Thein</span>
          </h1>

          <h2 className="text-xl md:text-3xl mb-6">
            Software Developer <br />
            <TypeAnimation
              sequence={[
                "Java", 1000,
                "Dart", 1000,
                "JavaScript", 1000,
                "TypeScript", 1000,
                "NestJS", 1000,
                "SpringBoot", 1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-primary"
            />
          </h2>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center">
        <div className="max-w-4xl p-6 bg-surface rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-6">About Me</h1>
          <p className="text-lg text-justify">
            Hello there! I'm Thura Min Thein, a 19-year-old software enthusiast who absolutely loves coding.
            For the past year, I've been fully immersed in the field of software engineering, finding great satisfaction in solving complex problems with lines of code.
            Coding isn't just a skill to me; it's a way to express my creativity and satisfy my curiosity.
            I strongly believe in the power of technology and constantly explore new programming languages and methodologies.
            Beyond all the technicalities, I see coding as a tool for making changes.
            Collaboration is at the core of how I work, and I deeply value teamwork and effective communication.
            As I continue to learn and refine my skills, I'm excited about contributing to advancements in the evolving world of software engineering.
          </p>
        </div>
      </section>

      <Skills />

      <Projects />

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