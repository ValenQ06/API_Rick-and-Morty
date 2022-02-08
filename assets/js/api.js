const API = "https://rickandmortyapi.com/api/character";

//SE CREA LA FUNCION
const getAPI = (url) => {
  return (
    fetch(url) //el fetch nos permite consumir un api
      // esta es una promesa:
      .then((response) => response.json())
      .then((json) => {
        fillData(json.results), pagination(json.info); //Aqui me estoy trayendo el results que es el subjson de los personajes que esta en el json de la pagina
      })
      .catch((error) => {
        console.log("Error in the API :", error);
      })
  );
};

const fillData = (data) => {
  let html = "";
  data.forEach((ch) => {
    html += '<div class="col">';
    html += '<div class="card h-100">';
    html += `<img src="${ch.image}" class="card-img-top" alt="...">`; // esta lleva comilla acostada porque ahi vamos a poner la foto del personaje
    html += '<div class="bg-second">';
    //html += '<div class="card-body">';
    html += `<h5 class="card-title">${ch.name}</h5>`;
    html += `<p>species: ${ch.species}</p>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
    //html += "</div>";
  });
  document.getElementById("characters").innerHTML = html;
};
//Paginacion con los botones de la siguiente pagina
const pagination = (info) => {
  let html = "";

  //Este es un caso normal
  // if (info.prev == null) {
  //   prevDisabled = "disabled";
  // }

  //este es un operador ternario
  //info.prev == null ? prevDisabled = "diasable" : "";
  //caso normal
  // if (info.next == null) {
  //   nextDisabled = "disabled";

  // }

  //este es un operador ternario
  //info.next == null ? nextDisabled = "diasable" :"";

  html += `<li class="page-item ${
    info.prev == null ? (prevDisabled = "diasable") : ""
  }"><a class="btn btn-outline-info" onclick="getAPI('${info.prev}')">Prev</a></li> `;
  html += `<li class="page-item ${
    info.next == null ? (nextDisabled = "diasable") : ""
  }"><a class="btn btn-outline-info" onclick="getAPI('${info.next}')">Next</a></li> `;

  document.getElementById("pagination").innerHTML = html;
};

getAPI(API); //SE EJECUTA LA FUNCION, SE ENVIA LA VARIABLE API EL LINK Y SE VA A EJECUTAR
