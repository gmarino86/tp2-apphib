const URL_API = "http://localhost:3333";

async function find() {
  if (localStorage.getItem("user")) {
    const user_id = JSON.parse(localStorage.getItem("user"))._id;
    return fetch(`${URL_API}/api/participantes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
        user_id: user_id,
      },
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  } else {
    window.location.href = "/login";
  }
}

async function findByEventId(evento_id) {
    return fetch(`${URL_API}/api/participantes/evento/${evento_id}`, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
    },
    })
    .then((response) => response.json())
    .catch((error) => console.log(error));

}

async function participacion(evento_id, estado) {
  if (localStorage.getItem("user")) {
    return fetch(`${URL_API}/api/participantes/${evento_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        user_id: JSON.parse(localStorage.getItem("user"))._id,
        estado: estado
      }),
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  } else {
    window.location.href = "/login";
  }
}

async function addContactToEvent(evento_id, friend_id) {
  
    return fetch(`${URL_API}/api/participantes/${evento_id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        friend_id: friend_id,
        estado: 0
      })
    })
}

export { 
  find, 
  findByEventId,
  participacion,
  addContactToEvent
};
