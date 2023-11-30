import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { pdfjs } from "react-pdf";
import Navbar from "./components/navbar";
import Body from "./components/body";
import NotFound from "./components/notFound";
import Resume from "./components/resume";
import Contact from "./components/contact";

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
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
