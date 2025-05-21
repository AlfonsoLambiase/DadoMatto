import { Link } from "react-router-dom";

const Home = () => {

  return (
    <>
      <div className="max-w-xl mx-auto p-6 bg-cyan-900 rounded-2xl shadow-md border border-gray-200 text-center text-white" >
        <h1 className="text-2xl font-bold ">DADO MATTO</h1>
        <br/>
        <p>
          Siete pronti a mettere alla prova fortuna, coraggio e un
          pizzico di follia.
          <br/>
        A turno si tira il dado... e da lì in poi può
          succedere di tutto: 
          <br/>
         una domanda imbarazzante, un obbligo assurdo o un
          evento inaspettato che può cambiare le carte in tavola. 
           <br/>
           Preparatevi a
          ridere, bluffare e magari anche a fare qualcosa di un po’ fuori dagli
          schemi. 
           <br/>
           Chi riuscirà ad arrivare alla fine senza perdere la faccia?
           Pronti?
           <br/>
            Si tira il dado! 🎲
        </p>
         <br/>

<Link to="/Profilo" className="bg-cyan-600 text-white py-2 px-4 rounded-lg hover:bg-cyan-500 transition">
    REGISTRATI CON I TUOI AMICI!
</Link>

      </div>
    </>
  );
};

export default Home;
