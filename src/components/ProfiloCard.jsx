import React, { useState } from "react";

const ProfiloCard = ({ cardId }) => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const playerData = { nickname, email };
    sessionStorage.setItem(`player-${cardId}`, JSON.stringify(playerData));
    alert(`Registrazione salvata per Giocatore ${cardId}`);
    setNickname("");
    setEmail("");
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
      <h2 className="text-xl font-bold mb-4">Giocatore {cardId}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Nickname</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-gray-50 text-black px-4 py-2 rounded-md mx-auto block hover:scale-110 transition-transform duration-200"
        >
          INIZIA!🚀
        </button>
      </form>
    </div>
  );
};

export default ProfiloCard;
