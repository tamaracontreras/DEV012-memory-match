import App from './components/App.js';
// import  PokemonData from './components/App.js';
// import Vikingos  from './components/App.js';

// Función para barajar 
export function shuffleArray(array) {
    // Comienza desde el último elemento en la lista (o juguete en la fila)
    for (let i = array.length - 1; i > 0; i--) {
    //Esto corresponde al segundo paso en la explicación, donde elegimos un 
    //juguete al azar en la parte restante de la fila.
      const j = Math.floor(Math.random() * (i + 1));

      //Aquí estamos intercambiando los juguetes en las posiciones i y j, lo 
      //que es similar a cambiar de lugar dos juguetes en la fila.
      [array[i], array[j]] = [array[j], array[i]]; // Intercambia elementos
    }
  }
  
  //Entonces, en conjunto, esta función toma una lista (o array) de cosas y 
//   las mezcla de una manera similar a mezclar juguetes en una fila.
  

document.getElementById('root').appendChild(App());
//, la línea completa está seleccionando un elemento en el documento HTML con el
//  id 'root' y luego agregando un nuevo nodo al final de sus hijos. 

export function cambiarEstilosCarta(event) {
    // Obtiene el contenedor de la carta actual
    const cardContainer =  event.currentTarget;

    // Obtiene los contenedores de imagen y dorso dentro de la carta actual
    const imgContainerDiv = cardContainer.querySelector('.img-container');
    const containerDorso = cardContainer.querySelector('.dorso-container');

    // Cambia los estilos
    imgContainerDiv.style.display = 'flex';
    containerDorso.style.display = 'none';
    
  }
  