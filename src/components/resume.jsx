import resume from "../img/resume.png";

const Resume = () => {
  return (
    <div className="resume w-full h-full flex justify-center items-center p-6 overflow-auto">
      <img
        src={resume}
        alt="resume"
        className="max-w-full max-h-full object-contain"
      />
    </div>
  );
};

export default Resume;