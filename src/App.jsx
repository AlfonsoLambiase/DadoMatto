import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Contatti from "./Pages/Contatti";
import ChiSiamo from "./Pages/ChiSiamo";
import Condividi from "./Pages/Condividi";
import Profilo from "./Pages/Profilo";
import Regole from "./Pages/Regole";
import Gioco from "./Pages/Gioco";
import Mp3 from "./Components/Mp3";

function App() {
  return (
    <div
      className="flex flex-col min-h-screen bg-[url('/SfondoDadoMatto2.jpg')] bg-cover bg-center bg-fixed"
    >
      <Header />
        <Mp3/>
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contatti" element={<Contatti />} />
          <Route path="/ChiSiamo" element={<ChiSiamo />} />
          <Route path="/Condividi" element={<Condividi />} />
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
