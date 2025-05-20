import Lottie from "lottie-react";
import dado from "../animation/dado.json";


const Gioco = () => {
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

<button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">
    Tira il Dado!
</button>

      </div>
    <div className="flex justify-center items-center h-screen m-0">
      <Lottie animationData={dado} loop={false}  />
    </div>
    </>
  );
};

export default Gioco;


