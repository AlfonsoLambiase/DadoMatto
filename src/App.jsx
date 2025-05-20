import {Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import Profilo from './Pages/Profilo';
import Regole from './Pages/Regole';
import Gioco from './Pages/Gioco';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profilo" element={<Profilo />} />
        <Route path="/Regole" element={<Regole />} />
        <Route path="/Gioco" element={<Gioco />} />
      </Routes>
   </>
  );
}

export default App;
