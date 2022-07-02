import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

function EventosList({ event }) {
  const [evento, setEvento] = useState({});

  useEffect(() => {
    setEvento(event);
  }, [event]);

  return (
    <>
      <div className="col-md-4 mt-2">
        <div className="card card-01">
          <img
            className="card-img-top"
            src="https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?h=350&auto=compress&cs=tinysrgb"
            alt={evento.titulo}
          />
          <div className="card-body">
            <span className="badge-box">
              <i className="fa fa-check"></i>
            </span>
            <h4 className="card-title">{evento.titulo}</h4>
            <p className="card-text">{evento.lugar}</p>
            <Link
              className="btn btn-default btn-event text-uppercase"
              to={`/evento/${evento._id}`}
            >
              Ver más
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventosList;
