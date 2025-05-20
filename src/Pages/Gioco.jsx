import { useRef, useState, useEffect } from "react";
import Lottie from "lottie-react";
import dado from "../animation/dado.json";

import interazione from "../fileJson/interazione.json";
import Card from "../components/Card";

const Gioco = () => {
  const lottieRef = useRef();
  const [showCard, setShowCard] = useState(false);
  const [animateCard, setAnimateCard] = useState(false);
  const [tipoCard, setTipoCard] = useState(null);
  const [cardData, setCardData] = useState(null);

  const giraDado = () => {
    setShowCard(false);
    setAnimateCard(false);
    lottieRef.current?.stop();
    lottieRef.current?.play();
  };

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
        return "bg-blue-500 text-white";
      case "eventi":
        return "bg-yellow-400 text-black";
      case "obblighi":
        return "bg-red-500 text-white";
      default:
        return "bg-white text-black";
    }
  };

  return (
    <div className="flex items-center flex-col min-h-screen">
      <h1 className="mt-16 text-4xl font-bold">PRONTO A GIOCARE?</h1>

      <div className="relative w-[300px] h-[300px] my-12">
        <Lottie
          lottieRef={lottieRef}
          animationData={dado}
          loop={false}
          autoplay={false}
          style={{ width: "300px", height: "300px" }}
          onComplete={() => {
            scegliCardRandom();
            setShowCard(true);
          }}
        />

        {showCard && (
          <div
            className={`absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-lg pointer-events-none`}
          >
            <div
              className={`p-15 rounded-xl shadow-lg text-center text-2xl transform transition-transform duration-300   ${getCardBgColor()} ${
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
        className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
      >
        Tira il Dado!
      </button>
    </div>
  );
};

export default Gioco;
