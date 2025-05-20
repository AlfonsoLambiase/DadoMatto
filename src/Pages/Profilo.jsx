import ProfiloCard from "../components/ProfiloCard";

const Profilo = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((id) => (
          <ProfiloCard key={id} cardId={id} />
        ))}
      </div>
    </div>
  );
};

export default Profilo;
