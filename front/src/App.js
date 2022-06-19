import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Eventos from './components/Eventos/Eventos';
import EventoView from './pages/EventoView';
import FormEventoNuevo from './pages/FormEventoNuevo';
import PageNotFound from './pages/404';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Eventos />} />
        <Route path="/evento/:id" element={<EventoView />} />
        <Route path="/evento/crear" element={<FormEventoNuevo />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
