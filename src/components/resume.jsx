import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import resumePDF from "../assets/resume.pdf"; // Path to your PDF file
import { useState } from "react";

// Configure PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // Function to handle PDF load
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-6">
      {/* PDF Viewer */}
      <div className="bg-surface/50 backdrop-blur-md border border-surface/10 rounded-2xl p-6 shadow-lg">
        <Document
          file={resumePDF}
          onLoadSuccess={onDocumentLoadSuccess}
          className="pdf-document"
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>

      {/* Pagination Controls */}
      <div className="mt-4 flex items-center gap-4">
        <button
          onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
          disabled={pageNumber <= 1}
          className="px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
        >
          Previous
        </button>
        <p className="text-text">
          Page {pageNumber} of {numPages}
        </p>
        <button
          onClick={() => setPageNumber((prev) => Math.min(prev + 1, numPages))}
          disabled={pageNumber >= numPages}
          className="px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
        >
          Next
        </button>
      </div>

      {/* Download Button */}
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