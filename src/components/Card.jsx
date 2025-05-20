const Card = ({ testo, tipo }) => {
  if (!testo) return null;

  const getTitolo = () => {
    switch (tipo) {
      case "domande":
        return "Domanda";
      case "eventi":
        return "Evento";
      case "obblighi":
        return "Obbligo";
      default:
        return "";
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">{getTitolo()}</h2>
      <p>{testo}</p>
    </div>
  );
};

export default Card;
