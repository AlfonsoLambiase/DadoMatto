import { FaLinkedin, FaGithub } from "react-icons/fa";

const ChiSiamo = () => {
  const membri = [
    {
      nome: "Alfonso Lambiase",
      linkedin: "https://www.linkedin.com/in/alfonso-lambiase-b3107733a/",
      github: "https://github.com/AlfonsoLambiase",
    },
    {
      nome: "Natascia Rufino",
      linkedin: "https://www.linkedin.com/in/natascia-rufino-694279346/",
      github: "https://github.com/Natasciaruf",
    },
    {
      nome: "Cristian Rinaldi",
      linkedin: "https://www.linkedin.com/in/cristian-rinaldi-62904935a/",
      github: "https://github.com/Cristian-Rinaldi",
    },
  ];

  return (
    <div className="px-4 sm:px-6">
    <div className="max-w-xl mx-auto p-6 bg-cyan-900 rounded-2xl shadow-md border border-gray-200 text-center text-white">
      <h1 className="text-3xl font-bold mb-6">Chi Siamo</h1>
      <p className="mb-8">
        Scopri chi sono le menti dietro questo gioco pazzesco e resta aggiornato con le ultime novità!
      </p>

      {membri.map((membro, index) => (
        <div key={index} className="mb-6">
          <p className="text-xl font-semibold mb-2">{membro.nome}</p>
          <div className="flex justify-center gap-4 text-2xl">
            <a
              href={membro.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href={membro.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ChiSiamo;
