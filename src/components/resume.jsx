import { useState } from "react";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import resumePDF from "../assets/resume.pdf";
import { ClipLoader } from "react-spinners";
import resume from "../img/resume.png";

const Resume = () => {
  const [isLoading, setIsLoading] = useState(true);

  useState(() => {
    setInterval(() => {
      setIsLoading(false)
    }, 1000);
  }, [])

  return (
    <div className="flex flex-col items-center mt-10 justify-center min-h-screen bg-background p-6">
      <div className="bg-surface/50 backdrop-blur-md border border-surface/10 rounded-2xl p-6 shadow-lg">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <ClipLoader color="#8B5CF6" size={50} />
          </div>
        ) : (<img src={resume} alt="resume" />)}
      </div>

      <a
        href={resumePDF}
        download="ThuraMinThein_Resume.pdf"
        className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg transition-all duration-300"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;