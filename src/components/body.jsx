import { TypeAnimation } from "react-type-animation";

const Body = () => {
  return (
    <main className="flex justify-center items-center flex-col">
      <div
        className="profile md:mt-[100px] w-[450px] md:w-[700px] h-[350px] md:h-[500px] rounded-xl md:rounded-3xl hover:-rotate-2 hover:scale-105 ease-in duration-300"
        id="home"
      >
        <img
          src="p.jpg"
          alt="profile"
          className="profile__pic w-28 md:w-40 rounded-full hover:rotate-[360deg] ease-in-out duration-300"
        />
        <div>
          <h1 className="p-3 mt-4 text-4xl md:text-[60px]">
            Hi, I'm Thura Min Thein
          </h1>
          <h2 className=" p-3 text-xl md:text-[30px]">
            Software Developer <br />
            {/* <Typed
              className=""
              strings={["Java", "Dart", "Javascript"]}
              typeSpeed={60}
              backSpeed={60}
              loop
            /> */}
            <TypeAnimation
              className=" text-[16px] md:text-xl text-[#9370db]"
              sequence={["Java", 1000, "Dart", 1000, "JavaScript", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>
        </div>
      </div>
      {/*home end */}
      <div
        id="about"
        className="about w-[450px] md:w-[700px] h-[350px] md:h-[500px] rounded-xl md:rounded-3xl mt-[100px]"
      >
        <h1 className="text-center font-bold text-lg md:text-2xl">About Me</h1>
        <p>blah blah blah</p>
      </div>
      <div id="projects">
        <div>
          <h1 className="text-4xl my-10">Projects</h1>
          <div className="flex md:max-w-5xl justify-between flex-wrap">
            <a href="https://github.com/ThuraMinThein/DailyList">
              <div className="  text-center my-auto w-[500px] h-[350px] bg-slate-400 m-1 rounded-xl ">
                Daily List
              </div>
            </a>
            <a href="https://github.com/ThuraMinThein/Physics-Spot">
              <div className=" text-center my-auto w-[500px] h-[350px] bg-slate-400 m-1 rounded-xl ">
                Physics Spot
              </div>
            </a>
          </div>
        </div>
      </div>
      <div id="contact"></div>
    </main>
  );
};

export default Body;
