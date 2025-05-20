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

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-sm">
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
          className="bg-yellow-300 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Registrati
        </button>
      </form>
    </div>
  );
};

export default ProfiloCard;
