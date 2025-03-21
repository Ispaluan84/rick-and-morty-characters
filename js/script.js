
const characterList = document.getElementById('character-list');


const nextPage = document.getElementById('next-page');
const prevPage = document.getElementById('prev-page');

let currentPage = 1;

function getCharacters () {
fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
    .then (response => {
        if(!response.ok) {
            throw new Error(`Error: ${response.status}`)
        }
        return response.json()
    })

    .then ((data) => { 
        characterList.innerHTML = ""
        data.results.forEach(personaje => {
        characterList.innerHTML += `
        <li>
          <div class = 'card'>
            <img src="${personaje.image}" alt=${personaje.name}/>
            <h2><strong>Name:</strong>${personaje.name}</h2>
            <p><strong>Specie:</strong>${personaje.species}<p>
          </div>
        </li>`
        })
}).catch(error => console.error(error.message))

}
getCharacters()


nextPage.addEventListener("click", () => {
    if(currentPage < 42) {
        currentPage++
        getCharacters()
    }
})

prevPage.addEventListener("click", () => {
    if(currentPage !== 1) {
        currentPage--
        getCharacters()
    }
})
