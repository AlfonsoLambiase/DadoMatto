import { FaLinkedin, FaGithub } from "react-icons/fa";

const ChiSiamo = () => {
  return (
    <div className="max-w-xl mx-auto p-6 bg-cyan-900 rounded-2xl shadow-md border border-gray-200 text-center">
      <h1 className="text-3xl font-bold mb-6 text-white">Chi Siamo</h1>
      <p className="text-white mb-4">
        Scopri chi sono le menti dietro questo gioco pazzesco e resta aggiornato con le ultime novità!
      </p>



      <div className="flex justify-center gap-6 text-3xl text-white mb-3">
        <p className="text-[25px]">Alfonso Lambiase:</p>
     
        <a
          href="https://www.linkedin.com/in/alfonso-lambiase-b3107733a/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-300 transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/AlfonsoLambiase"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>


      <div className="flex justify-center gap-6 text-3xl text-white mb-3">
        <p className="text-[25px] ml-5">Natascia Rufino:</p>
      
        <a
          href="https://www.linkedin.com/in/natascia-rufino-694279346/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-300 transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Natasciaruf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>


<div className="flex justify-center gap-6 text-3xl text-white mb-3">
        <p className="text-[25px] ml-6">Cristian Rinaldi:</p>
      
        <a
          href="https://www.linkedin.com/in/cristian-rinaldi-62904935a/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-300 transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Cristian-Rinaldi"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
      

    </div>
  );
};

export default ChiSiamo;
