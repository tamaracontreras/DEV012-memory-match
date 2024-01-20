



// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import { PokemonData } from '../data/pokemon/pokemon.js';
import { Vikingos } from '../data/vikings/vikings.js';


//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.

// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//

const App = () => {
  
  const el = document.createElement('div');
  el.classList.add('contenedor');
 // ota forma es hacer una copia del array con 
 // Vikingos.items = [...Vikingos.items, ...Vikingos.items];
  
    for (let i = 0; i < 2; i++) {
    Vikingos.items.forEach(vikingo => {
     
// console.log(Vikingos.items.length)

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

 // Crea el contenedor de información
    const infoContainerDiv = document.createElement('div');
    infoContainerDiv.classList.add('info-container');

    
  el.appendChild(cardContainer);
  cardContainer.appendChild(imgContainerDiv);
  imgContainerDiv.appendChild(imgElement)

      
    });
  }
    return el;
};

    
  


export default App;
