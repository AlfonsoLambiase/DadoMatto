import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./Pages/Home";
import Contatti from "./Pages/Contatti";
import FAQ from "./Pages/FAQ";
import SocialMedia from "./Pages/SocialMedia";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contatti" element={<Contatti />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/SocialMedia" element={<SocialMedia />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
