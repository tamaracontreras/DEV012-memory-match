// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import { PokemonData } from '../data/pokemon/pokemon.js';
import { Vikingos } from "../data/vikings/vikings.js";
import { mostrarCarta, shuffleArray, ocultarCarta } from "../main.js";

// import { buscarCartaPorId } from "../main.js";

//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.

// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);

export const App = () => {
  let cartaGuardada = "";
  let cartaGuardadaDos = "";
  let objetoGuardado = "";
  let objetoGuardadoDos = "";
  let puntos = 0;
const contenedorGeneral = document.createElement("div");
contenedorGeneral.classList.add("contenedorGeneral");

  //contenedor para la puntuacion
  const contNuevoH1 = document.createElement("div");
  contNuevoH1.classList.add("contenedorPuntuacion");
  // elemento h1 que indica la puntuacion
  const nuevoH1 = document.createElement("h1");
  nuevoH1.classList.add("puntuacion");
  nuevoH1.textContent = "Puntuación: " + puntos;

  contenedorGeneral.appendChild(contNuevoH1);
  contNuevoH1.appendChild(nuevoH1);
  

  const contenedorboton = document.createElement("div");
  contenedorboton.classList.add("contenedor_boton");
  

  const boton = document.createElement("button");
  boton.classList.add("revolver");
  boton.textContent = "Shuffle";
  contenedorGeneral.appendChild(contenedorboton);
  contenedorboton.appendChild(boton);
  

  const contenedor_principal = document.createElement("div");
  contenedor_principal.classList.add("contenedor");


  boton.addEventListener("click", barajarYCrearCartas);

  function barajarYCrearCartas() {
    puntos = 0;
    nuevoH1.textContent = "Puntuación: " + puntos;
    Vikingos.copia = [...Vikingos.items, ...Vikingos.items];
    shuffleArray(Vikingos.copia);
    renderizarCartas();
  }

  function renderizarCartas() {
    contenedor_principal.innerHTML = "";
    
    shuffleArray(Vikingos.copia);
    for (let i = 0; i < 18; i++) {
      // Dentro del bucle, se crea un contenedor para cada carta,
      // se establecen las propiedades de la imagen y se agregan
      //  al contenedor principal.
      // Crea un contenedor general
      const cardContainer = document.createElement("div");
      cardContainer.classList.add("card-container");
      // Crea un contenedor para la dorso imagen
      const containerDorso = document.createElement("div");
      containerDorso.classList.add("dorso-container");
      containerDorso.style.display = "flex";

      // Crea el elemento de imagen de Dorso
      const imgDorso = document.createElement("img");
      imgDorso.classList.add("imagenDorso");
      imgDorso.setAttribute("src", "./Imagenes/dorso.jpg");
      imgDorso.setAttribute("alt", "rubik");

      // Crea un contenedor para la imagen
      const imgContainerDiv = document.createElement("div");
      imgContainerDiv.classList.add("img-container");
      imgContainerDiv.style.display = "none";

      // Crea el elemento de imagen
      const imgElement = document.createElement("img");
      imgElement.setAttribute("src", Vikingos.copia[i].image);
      imgElement.setAttribute("alt", Vikingos.copia[i].id);
      imgElement.setAttribute("id", "imagen");


      cardContainer.appendChild(imgContainerDiv);
      imgContainerDiv.appendChild(imgElement);

      cardContainer.appendChild(containerDorso);
      containerDorso.appendChild(imgDorso);
      contenedor_principal.appendChild(cardContainer);

      cardContainer.addEventListener("click", function (e) {
        if (cartaGuardada === "") {
          cartaGuardada = Vikingos.copia[i].id;
          // guarda el objeto seleccionado del primer click (cardContainer) aplicando la funcion mostrarCarta
          objetoGuardado = mostrarCarta(e);
          console.log(cartaGuardada);
          console.log(objetoGuardado);
          console.log("cartauno");
          // con el return termina la ejecucion de esta funcion
          return;
        }

        if (cartaGuardadaDos === "") {
          cartaGuardadaDos = Vikingos.copia[i].id;
          objetoGuardadoDos = mostrarCarta(e);
          console.log(objetoGuardadoDos);
          console.log("cartados");
        }

        if (cartaGuardada !== cartaGuardadaDos) {
          console.log("Son distintos!");
          setTimeout(function () {
            ocultarCarta(objetoGuardado);
            ocultarCarta(objetoGuardadoDos);
          }, 1000);
        } else {
          puntos = puntos + 1;
          nuevoH1.textContent = "Puntuación: " + puntos;
          //puntos++
          //puntos+=1
        }
        // Después de incrementar los puntos, verifica si la puntuación alcanza diez
        if (puntos === 9) {
          // Muestra un alert indicando que el juego ha terminado
          alert("¡Felicitaciones! Has completado el juego.");
        }

        cartaGuardada = "";
        cartaGuardadaDos = "";
      });
    
    }
    contenedorGeneral.appendChild(contenedor_principal);
    // contenedor_principal.appendChild(contenedorboton);
    // contenedorboton.appendChild(boton);

    // Agrega el evento de clic a cada carta

    // cardContainer.addEventListener("click", cambiarEstilosCarta);
  }
  barajarYCrearCartas();

  return contenedorGeneral;
};
