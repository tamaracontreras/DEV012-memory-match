import { App } from "./components/App.js";
// import { Vikingos } from './data/vikings/vikings.js';
// import  PokemonData from './components/App.js';
// import Vikingos  from './components/App.js';

// Función para barajar
export function shuffleArray(array) {
  // Comienza desde el último elemento en la lista 
  for (let i = array.length - 1; i > 0; i--) {
    //Esto corresponde al segundo paso en la explicación, donde elegimos un
    //elemento al  al azar en la parte restante de la fila.
    const j = Math.floor(Math.random() * (i + 1));

    //Aquí estamos intercambiando los juguetes en las posiciones i y j, lo
    //que es similar a cambiar de lugar dos juguetes en la fila.
    [array[i], array[j]] = [array[j], array[i]]; // Intercambia elementos
  }
}

//funcion para bajar
// tener 18 cartas e intercambiarlos de posicion

//Entonces, en conjunto, esta función toma una lista (o array) de cosas y
//   las mezcla de una manera similar a mezclar juguetes en una fila.

document.getElementById("root").appendChild(App());
//, la línea completa está seleccionando un elemento en el documento HTML con el
//  id 'root' y luego agregando un nuevo nodo al final de sus hijos.

export function mostrarCarta(event) {
  // guarda el objeto actual en la variable card container al cual se le asocia un evento
  const cardContainer = event.currentTarget;

  // captura el elemento que tiene la  clases imagen-container
  const imgContainerDiv = cardContainer.querySelector(".img-container");
   // captura el elemento que tiene la  clases dorso-container
  const containerDorso = cardContainer.querySelector(".dorso-container");
  // dentro de cardContainer buscar el elemento que tenga la clase ...

  // Cambia los estilos
  imgContainerDiv.style.display = "flex";
  containerDorso.style.display = "none";
  // retorno el objeto cardContainer
  //guardo para reutilizar 
  return cardContainer;
}

export function ocultarCarta(cardContainer) {
 
//  captura el elemento que tenga las clases ...
  const imgContainerDiv = cardContainer.querySelector(".img-container");
  const containerDorso = cardContainer.querySelector(".dorso-container");

  // Cambia los estilos
  imgContainerDiv.style.display = "none";
  containerDorso.style.display = "flex";
  
}



