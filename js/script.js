document.addEventListener('DOMContentLoaded', rickandmorty);
const characterList = document.getElementById('character-list');

function rickandmorty() {
const character = 'https://rickandmortyapi.com/api/character/?page=1';
}

fetch('https://rickandmortyapi.com/api/character/?page=1')
    .then (response => response.json())
    .then ((data) => {
        characterList.innerText = data.results;
    })
    .catch((error) => {
        characterList.innerText = 'No se pudo recuperar la imagen';
    })
