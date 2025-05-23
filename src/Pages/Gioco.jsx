import { useRef, useState, useEffect, useMemo } from "react";
import Lottie from "lottie-react";
import dado from "../animation/dado.json";
import interazione from "../fileJson/interazione.json";
import Card from "../components/Card";

import rosa from "../Personaggi/rosa.png";
import verde from "../Personaggi/verde.png";
import arancione from "../Personaggi/arancione.png";
import blu from "../Personaggi/blu.png";

const immagini = {
  1: rosa,
  2: verde,
  3: arancione,
  4: blu,
};

const Gioco = () => {
  const lottieRef = useRef();

  const [showCard, setShowCard] = useState(false);
  const [animateCard, setAnimateCard] = useState(false);
  const [tipoCard, setTipoCard] = useState(null);
  const [cardData, setCardData] = useState(null);
  const [turno, setTurno] = useState(0);
  const [mostraTurno, setMostraTurno] = useState(false);
  const [countdown, setCountdown] = useState(null);

  const players = useMemo(() => {
    const p = [];
    for (let i = 1; i <= 4; i++) {
      const data = sessionStorage.getItem(`player-${i}`);
      if (data) {
        const parsed = JSON.parse(data);
        p.push({
          id: i,
          nickname: parsed.nickname,
        });
      }
    }
    return p;
  }, []);

  const giraDado = () => {
    setShowCard(false);
    setAnimateCard(false);
    setMostraTurno(true);
    setCountdown(3);
  };

  useEffect(() => {
    if (countdown === null) return;
    if (countdown === 0) {
      setCountdown(null);
      lottieRef.current?.stop();
      lottieRef.current?.play();
      setMostraTurno(false);
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  useEffect(() => {
    if (showCard) {
      const timer = setTimeout(() => setAnimateCard(true), 10);
      return () => clearTimeout(timer);
    } else {
      setAnimateCard(false);
    }
  }, [showCard]);

  const scegliCardRandom = () => {
    const tipi = ["domande", "eventi", "obblighi"];
    const tipo = tipi[Math.floor(Math.random() * tipi.length)];
    const arrayDiCarte = interazione[tipo];
    const scelta = arrayDiCarte[Math.floor(Math.random() * arrayDiCarte.length)];

    setTipoCard(tipo);
    setCardData(scelta);
  };

  const getCardBgColor = () => {
    switch (tipoCard) {
      case "domande":
        return "bg-sky-600 text-white";
      case "eventi":
        return "bg-yellow-500 text-white";
      case "obblighi":
        return "bg-red-600 text-white";
      default:
        return "bg-white text-black";
    }
  };

  return (
    <div className="px-4 sm:px-6">
      <div className="max-w-xl mx-auto py-6 bg-cyan-900 rounded-2xl shadow-md border border-gray-200 text-center text-white mt-6">
        <h1 className="text-3xl font-bold mb-4">PRONTO A GIOCARE?</h1>

        {players.length > 0 && mostraTurno && (
          <div className="flex items-center justify-center gap-4 mt-4 mb-4">
            <img
              src={immagini[players[turno].id]}
              alt="personaggio"
              className="w-12 h-12 rounded-full"
            />
            <p className="text-lg sm:text-xl font-semibold">
              Turno di {players[turno].nickname}
            </p>
          </div>
        )}

        {countdown !== null && (
          <p className="text-5xl font-bold text-white mt-4">
            {countdown === 0 ? "Via!" : countdown}
          </p>
        )}

        <div className="relative w-[260px] sm:w-[300px] h-[260px] sm:h-[300px] my-10 mx-auto">
          <Lottie
            lottieRef={lottieRef}
            animationData={dado}
            loop={false}
            autoplay={false}
            style={{ width: "100%", height: "100%" }}
            onComplete={() => {
              scegliCardRandom();
              setShowCard(true);
              setTurno((prev) => (prev + 1) % players.length);
            }}
          />

          {showCard && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-lg pointer-events-none">
              <div
                className={`p-6 sm:p-8 rounded-xl shadow-lg text-center text-lg sm:text-2xl transform transition-transform duration-300 ${getCardBgColor()} ${
                  animateCard ? "scale-100" : "scale-0"
                }`}
              >
                <Card testo={cardData} tipo={tipoCard} />
              </div>
            </div>
          )}
        </div>

        <button
          onClick={giraDado}
          className="bg-cyan-600 text-white py-2 px-4 rounded-lg hover:bg-cyan-500 transition disabled:opacity-50"
          disabled={countdown !== null}
        >
          TIRA IL DADO!
        </button>
      </div>
    </div>
  );
};

export default Gioco;
