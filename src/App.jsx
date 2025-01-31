import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Body from "./components/body";
import NotFound from "./components/notFound";
import { ThemeProvider } from './components/ThemeProvider';
import Resume from "./components/resume";

const App = () => {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
};
export default App;
