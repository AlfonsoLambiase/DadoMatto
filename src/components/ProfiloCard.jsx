import  { useState } from "react";

const ProfiloCard = ({ cardId, personaggioImg }) => {
  const [nickname, setNickname] = useState("");
  const [giocatore, setGiocatore] = useState(`Giocatore ${cardId}`)


  const handleSubmit = (e) => {
    e.preventDefault();
    const playerData = { nickname };
    sessionStorage.setItem(`player-${cardId}`, JSON.stringify(playerData));
    setNickname("");
    setGiocatore(nickname)
  };

  const backgroundColors = {
    1: "bg-red-500",
    2: "bg-green-400",
    3: "bg-yellow-300",
    4: "bg-sky-300",
  };

  const cardBg = backgroundColors[cardId] || "bg-white";

  return (
    <div className={`${cardBg} shadow-md rounded-2xl p-6 w-full max-w-sm text-center`}>
      {personaggioImg && (
        <img
          src={personaggioImg}
          alt={`Personaggio ${cardId}`}
          className="w-32 h-32 mx-auto mb-4 object-contain"
        />
      )}
      <h2 className="text-xl font-bold mb-4">{giocatore}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-bold mb-1 ">Nickname</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md background-color: bg-amber-50"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-gray-50 text-black px-4 py-2 rounded-md mx-auto block hover:scale-110 transition-transform duration-200"
        >
          Registrati
        </button>
      </form>
    </div>
  );
};

export default ProfiloCard;
