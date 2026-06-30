import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BusinessType from "./pages/BusinessType";
import Onboarding from "./pages/OnBoarding";
import Navbar from "./components/Navbar";
import Roadmap from "./pages/Roadmap";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business-type" element={<BusinessType />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;