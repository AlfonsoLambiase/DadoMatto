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
    <Home/>
    </>
  )
};

export default App;
