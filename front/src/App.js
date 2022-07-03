import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Eventos from "./components/Eventos/Eventos";
import EventoView from "./pages/EventoView";
import FormEventoNuevo from "./pages/FormEventoNuevo";
import FormLogin from "./pages/FormLogin";
import Contactos from "./pages/Contactos.page";
import Register from "./pages/Register.page";
import BuscarContactos from "./pages/BuscarContactos.page";
import PageNotFound from "./pages/404";
import "./App.css";

function App() {
  
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || token === "undefined") {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  function onLogin(user, token) {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    navigate("/", { replace: true });
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Eventos />} />
        <Route path="/evento/:evento_id" element={<EventoView />} />
        <Route path="/evento/crear" element={<FormEventoNuevo />} />
        <Route path="/login" element={<FormLogin onLogin={onLogin} />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/buscarContactos" element={<BuscarContactos />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
