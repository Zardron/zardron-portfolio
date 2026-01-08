import "animate.css";
import Transition from "./components/Transition.jsx";
import StarsCanvas from "./components/StarBackground.jsx";
import Home from "./pages/index.jsx";
import Dashboard from "./pages/dashboard/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[#030014] overflow-x-hidden">
      <StarsCanvas />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
};

export default App;
