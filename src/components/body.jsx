import { TypeAnimation } from "react-type-animation";
//import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import { useState } from "react";

import profile from "../img/p.jpg";
import github from "../img/github.svg";
import emailLogo from "../img/email.svg";
import linkedin from "../img/linkedin.svg";

const Body = () => {
  const email = "thur7012@gmail.com";

  const launchEmail = () => {
    // window.open("https://mail.google.com");

    //window.location.href = `mailto:${email}`;

    navigator.clipboard
      .writeText(email)
      .then(() => {
        console.log(email);
        alert("copied email to clipboard");
      })
      .catch(() => {
        console.error("couldn't copy email");
      });
  };

  // const copyEmail = () => {
  //   navigator.clipboard
  //     .writeText(email)
  //     .then(() => {
  //       console.log("copied email to clipboard");
  //     })
  //     .catch(() => {
  //       console.error("couldn't copy eamil");
  //     });
  // };

  return (
    <main className="flex justify-center items-center flex-col">
      <div id="home" className=" h-screen flex items-center">
        <div className="profile w-[450px] md:w-[700px] h-[350px] md:h-[500px] rounded-xl md:rounded-3xl hover:-rotate-2 hover:scale-105 ease-in duration-300">
          <img
            src={profile}
            alt="profile"
            className="profile__pic w-28 md:w-40 rounded-full hover:rotate-[360deg] ease-in-out duration-300"
          />
          <div>
            <h1 className="p-3 mt-4 text-4xl md:text-[60px]">
              Hi, I am Thura Min Thein
            </h1>
            <h2 className=" p-3 text-xl md:text-[30px] my-4">
              Software Developer <br />
              <TypeAnimation
                className=" text-[16px] md:text-xl text-[#9370db] "
                sequence={["Java", 1000, "Dart", 1000, "JavaScript", 1000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
          </div>
        </div>
      </div>
      {/*home end */}
      <div id="about" className="flex items-center h-screen">
        <div className="about w-[450px] md:w-[700px] h-[350px] md:h-[500px] rounded-xl md:rounded-3xl transition duration-300 ease-in ">
          <h1 className="text-center font-bold text-lg md:text-2xl">
            About Me
          </h1>
          <p className=" text-[10px] md:text-[15px] text-justify px-6 pb-9">
            Hello there! I'm Thura Min Thein, an 18-year-old software enthusiast
            who absolutely loves coding. For the year I've been fully immersed
            in the field of software engineering finding great satisfaction, in
            solving complex problems with lines of code. Coding isn't a skill to
            me; it's a way to express my creativity and satisfy my curiosity.
            What truly keeps me engaged is the thrill of taking on challenges
            and creating solutions. I strongly believe in the power of
            technology. Constantly explore new programming languages and
            methodologies. Beyond all the technicalities I see coding as a tool
            for making changes. Collaboration is at the core of how I work. I
            deeply value teamwork and effective communication which're essential
            in every project I'm involved in. As I continue to learn and refine
            my skills, I'm excited, about contributing to advancements in the
            evolving world of software engineering.
          </p>
        </div>
      </div>
      {/* about end */}

      <div id="projects" className="flex items-center h-screen">
        <div>
          <div className="">
            <h1 className="text-4xl my-10">Projects</h1>
            <div className="flex md:max-w-5xl flex-col ">
              <a href="https://github.com/ThuraMinThein/DailyList">
                <div className=" projectDiv text-center my-auto w-[500px] h-[350px] rounded-xl md:rounded-3xl transition duration-300 ease-in mb-[50px]">
                  DailyList
                </div>
              </a>
              <a href="https://github.com/ThuraMinThein/Physics-Spot">
                <div className="projectDiv text-center my-auto w-[500px] h-[350px] rounded-xl md:rounded-3xl transition duration-300 ease-in ">
                  Physics Spot
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* project end */}

      <div id="contact" className=" flex h-60 max-w-[1024px]">
        <a href="https://github.com/thuraminthein">
          <img src={github} alt="github" className="github w-[55px]" />
        </a>
        <a href="https://www.linkedin.com/in/thura-min-thein-05dec12/">
          <img src={linkedin} alt="linkedin" className="linkedin w-[55px]" />
        </a>
        <div className=" cursor-pointer" onClick={launchEmail}>
          <img src={emailLogo} alt="email" className="email w-[55px]" />
        </div>
      </div>
      {/**contact end */}
    </main>
  );
};

export default Body;
