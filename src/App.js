import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Personagens from  './pages/Personagens'
import Episodios from  './pages/Episodios'
import Contatos from  './pages/Contatos'
import GloblalStyles from './styles/GlobalStyle';

function App() {
  return (
    <Router>
      <GloblalStyles/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/personagens" element={<Personagens/>}/>
        <Route path="/episodios" element={<Episodios/>}/>
        <Route path="/contato" element={<Contatos/>}/>
      </Routes>
    </Router>
  );
}

export default App;


