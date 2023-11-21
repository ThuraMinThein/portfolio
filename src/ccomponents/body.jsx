const Body = () => {
  return (
    <main className="flex justify-center items-center flex-col">
      <div
        className="profile w-[350px] md:w-[700px] h-[250px] md:h-[500px] rounded-xl md:rounded-3xl "
        id="home"
      >
        <img
          src="profile.jpg"
          alt="profile"
          className=" w-20 md:w-40 rounded-full mt-5"
        />
        <div>
          <h1 className="p-3 mt-4 text-4xl md:text-[60px]">
            I'm Thura Min Thein
          </h1>
          <h2 className=" p-3 text-1xl md:text-[30px]">
            full-stack Software developer
          </h2>
        </div>
      </div>
      <div id="about"></div>
      <div id="projects"></div>
      <div id="contact"></div>
    </main>
  );
};

export default Body;
