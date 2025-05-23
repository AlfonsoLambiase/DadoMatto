import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="px-4 sm:px-6">
      <div className=" max-w-xl mx-auto py-6 px-4 bg-cyan-900 rounded-2xl shadow-md border border-gray-200 text-center text-white">
        <h1 className="text-2xl font-bold">DADO MATTO</h1>
        <br />
        <p>
          Siete pronti a mettere alla prova fortuna, coraggio e un
          pizzico di follia.
          <br />
          A turno si tira il dado... e da lì in poi può succedere di tutto: 
          <br />
          una domanda imbarazzante, un obbligo assurdo o un evento inaspettato 
          che può cambiare le carte in tavola.
          <br />
          Preparatevi a ridere, bluffare e magari anche a fare qualcosa di un po’ fuori dagli
          schemi.
          <br />
          Chi riuscirà ad arrivare alla fine senza perdere la faccia?
          <br />
          Pronti?
          <br />
          Si tira il dado! 🎲
        </p>
        <br />

        <Link
          to="/Profilo"
          className="bg-cyan-600 text-white py-2 px-4 rounded-lg hover:scale-110 transition"
        >
          REGISTRATI CON I TUOI AMICI!
        </Link>
      </div>
    </div>
  );
};

export default Home;
