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
      <div className="min-h-screen p-8 flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {[1, 2, 3, 4].map((id) => (
            <ProfiloCard key={id} cardId={id} personaggioImg={immagini[id]} />
          ))}
        </div>
      </div>

      <div className="flex justify-end w-full pr-16 px-8 mt-4">
        <button
          onClick={handleInizia}
          className="bg-cyan-600 text-white hover:bg-cyan-500 px-8 py-4 rounded-md block"
        >
          INIZIA! 🚀
        </button>
      </div>
    </>
  );
};

export default Profilo;
