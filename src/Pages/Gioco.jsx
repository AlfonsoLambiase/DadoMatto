import Lottie from "lottie-react";
import dado from "../animation/dado.json";


const Gioco = () => {
  return (
        <>
    
<div className="flex items-center flex-col gap-20">
      <Lottie animationData={dado} loop={false} style={{ width: '300px', height: '300px' }}  />
      <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition ">
      Tira il Dado!
       </button>
</div>


   

    </>
  );
};

export default Gioco;


