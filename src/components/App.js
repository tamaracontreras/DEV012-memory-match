



// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import { PokemonData } from '../data/pokemon/pokemon.js';
import { Vikingos } from '../data/vikings/vikings.js';
import { shuffleArray } from '../main.js';


//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.

// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//

const App = () => {
 
  const contenedor_principal = document.createElement('div');
   contenedor_principal.classList.add('contenedor');

   const contenedorboton = document.createElement('div');
   contenedorboton.classList.add('contenedor_boton');
   
   const boton = document.createElement('button');
    boton.classList.add('revolver');
    boton.textContent = 'Shuffle';

  
 // otra forma es hacer una copia del array con 
 // Vikingos.items = [...Vikingos.items, ...Vikingos.items];
 function barajarCartas() {
  shuffleArray(Vikingos.items);
 
  contenedor_principal.innerHTML = '';
    for (let i = 0; i < 2; i++) {
    Vikingos.items.forEach(vikingo => {
      
     
// console.log(Vikingos.items.length)

// Dentro del bucle, se crea un contenedor para cada carta,
// se establecen las propiedades de la imagen y se agregan
//  al contenedor principal.

  // Crea un contenedor general
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

 // Crea un contenedor para la imagen
    const imgContainerDiv = document.createElement('div');
    imgContainerDiv.classList.add('img-container');

 // Crea el elemento de imagen
    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', vikingo.image);
    imgElement.setAttribute('alt', vikingo.id);
    imgElement.setAttribute('id', 'imagen');


  
  contenedor_principal.appendChild(cardContainer);
   cardContainer.appendChild(imgContainerDiv);
  imgContainerDiv.appendChild(imgElement);
  contenedor_principal.appendChild(contenedorboton);
  contenedorboton.appendChild(boton)


      
    });
    
  }
  }
   // Agrega el evento de clic al botón
   boton.addEventListener('click', barajarCartas);

   // Baraja las cartas inicialmente
   barajarCartas();
    return contenedor_principal;
};

    
  


export default App;

