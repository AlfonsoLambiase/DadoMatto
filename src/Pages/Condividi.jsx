const Condividi = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'Guarda questa app!',
          text: 'Scopri questa app fantastica!',
          url: window.location.href,
        })
        .then(() => console.log('Condiviso con successo!'))
        .catch((error) => console.error('Errore condivisione:', error));
    } else {
      alert('Condivisione non supportata dal browser');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-cyan-900 rounded-2xl shadow-md border border-gray-200 text-center">
      <h1 className="text-3xl font-bold mb-6 text-white">Condividi</h1>
      <p className="text-white mb-2">
        Condividi DadoMatto con chi vuoi!
      </p>
      <button 
        onClick={handleShare}
        className="mt-4 px-6 py-2 bg-white text-cyan-900 font-semibold rounded-xl hover:bg-cyan-300 transition duration-300"
      >
        Condividi Link
      </button>
    </div>
  );
};

export default Condividi;
