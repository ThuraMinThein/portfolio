import { Document, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import resumePDF from "../assets/resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-6">
      <div className="bg-surface/50 backdrop-blur-md border border-surface/10 rounded-2xl p-6 shadow-lg">
        <Document
          file={resumePDF}
          className="pdf-document"
        >
        </Document>
      </div>

      <a
        href={resumePDF}
        download="ThuraMinThein.pdf"
        className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg transition-all duration-300"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;