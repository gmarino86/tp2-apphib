import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Eventos from './components/Eventos/Eventos';
import EventoView from './pages/EventoView';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Eventos />} />
        <Route path="/evento/:id" element={<EventoView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
