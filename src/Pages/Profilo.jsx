import { useNavigate } from "react-router-dom";
import ProfiloCard from "../components/ProfiloCard";
import arancione from "../Personaggi/arancione.png";
import blu from "../Personaggi/blu.png";
import rosa from "../Personaggi/rosa.png";
import verde from "../Personaggi/verde.png";

const Profilo = () => {
  const navigate = useNavigate();

  const immagini = {
    1: rosa,
    2: verde,
    3: arancione,
    4: blu,
  };

  const handleInizia = () => {
    navigate("/Gioco");
  };

  return (
    <>
      <div className="min-h-screen p-8 flex justify-center items-center overflow-x-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {[1, 2, 3, 4].map((id) => (
            <ProfiloCard key={id} cardId={id} personaggioImg={immagini[id]} />
          ))}
        </div>
      </div>

      <div className="flex justify-center w-full px-8 mt-4">
        <button
          onClick={handleInizia}
          className="bg-cyan-900 text-white hover:scale-110 transition-transform px-4 py-4 rounded-md block"
        >
          INIZIA! 🚀
        </button>
      </div>
    </>
  );
};

export default Profilo;
