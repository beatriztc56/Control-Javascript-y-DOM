'use strict';

const personajes = 'https://rickandmortyapi.com/api/character';

async function getPersonajes(URL) {
    try {
        const response = await fetch(URL);

        const data = await response.json();

        console.log(data);

        const totalPages = data.info.pages; 

        const allCharacters = [...data.results];

      
        return allCharacters;
    } catch (error) {
        return error;
    }
}

const getAsyncValue = async () => {
    const characters = await getCharacters(personajes);
    console.log(characters);
};

getAsyncValue();
