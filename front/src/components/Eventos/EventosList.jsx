import { Link } from "react-router-dom";

function EventoJugadorListItem({ event }) {
  return (
        <>
        <div className="col-md-4">
          <div className="card card-01">
            <img className="card-img-top" src="https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?h=350&auto=compress&cs=tinysrgb" alt="Card image cap" />
            <div className="card-body">
              <span className="badge-box"><i className="fa fa-check"></i></span>
              <h4 className="card-title">{event.titulo}</h4>
              <p className="card-text">{event.lugar}</p>
              <Link className="btn btn-default btn-event text-uppercase" to={`/evento/${event._id}`}>Ver más</Link>
            </div>
          </div>
          </div>
        </>
  );
}

export default EventoJugadorListItem;
