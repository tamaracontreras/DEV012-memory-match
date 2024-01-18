



// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import { PokemonData } from '../data/pokemon/pokemon.js';
import { Vikingos } from '../data/vikings/vikings.js';


//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//

const App = () => {
  const el = document.createElement('div');
    el.classList.add('contenedor');
    

    Vikingos.items.forEach(vikingo => {
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

        // Crea el elemento de descripción
    

        // Crea el elemento de nombre
        const nombre = document.createElement('div');
        nombre.classList.add('nombre');
        nombre.textContent = vikingo.id;

        // Agrega la imagen al contenedor de la imagen


        // Agrega todos los elementos al contenedor de información
        el.appendChild(cardContainer);
        cardContainer.appendChild(imgContainerDiv);
        imgContainerDiv.appendChild(imgElement);
 
        imgContainerDiv.appendChild(nombre);
      

        // Agrega el contenedor de imagen y el contenedor de información al contenedor general
       

        // Agrega el contenedor general al DOM
      
    });

    return el;
};
 




export default App;
