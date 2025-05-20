import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./Pages/Home";
import Contatti from "./Pages/Contatti";
import FAQ from "./Pages/FAQ";
import SocialMedia from "./Pages/SocialMedia";
import Profilo from "./Pages/Profilo";
import Regole from "./Pages/Regole";
import Gioco from "./Pages/Gioco";
import Mp3 from "./Components/Mp3";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
        <Mp3/>
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contatti" element={<Contatti />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/SocialMedia" element={<SocialMedia />} />
          <Route path="/Profilo" element={<Profilo />} />
          <Route path="/Regole" element={<Regole />} />
          <Route path="/Gioco" element={<Gioco />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
