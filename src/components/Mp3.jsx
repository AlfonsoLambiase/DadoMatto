import { useRef, useState } from "react";
import SoundGame from "../assets/SoundGame.mp3";
import Play from "../assets/Play.jsx";
import Mute from "../assets/Mute.jsx";

const Mp3 = () => {
  const audioRef = useRef(null); // File audio
  const [isPlaying, setIsPlaying] = useState(false); // Stato per sapere se il brano è in play o pausa
  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause(); // Se sta giocando, metti in pausa
    } else {
      audioRef.current.play(); // Se non sta giocando, avvia
    }
    setIsPlaying(!isPlaying); // Cambia stato (da play a pausa o viceversa)
  };

  return (
    <div
      onClick={handlePlayPause}
      className="cursor-pointer w-20 h-20 bg-cyan-900 text-white rounded-full shadow-lg m-5 flex items-center justify-center
             hover:bg-cyan-500 active:scale-95 transition duration-200 ease-in-out "
    >
      <button>
        {isPlaying ? <Mute /> : <Play />} {/* Testo play o pause */}
      </button>
      <audio ref={audioRef} src={SoundGame} loop />
    </div>
  );
};

export default Mp3;