import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { pdfjs } from "react-pdf";
import Navbar from "./ccomponents/navbar";
import Body from "./ccomponents/body";
import NotFound from "./ccomponents/notFound";
import Resume from "./ccomponents/resume";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.js",
//   import.meta.url
// ).toString();

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="Content ">
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
