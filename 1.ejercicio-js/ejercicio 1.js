//# Ejercicio 1

//Escribe una función que devuelva un array de usuarios. De cada usuario guardaremos el username, el nombre y apellido, el sexo, el país, 
//el email y un enlace a su foto de perfil.

//El número de usuarios a obtener se debe indicar con un parámetro de dicha función.

//Sírvete de la API: https://randomuser.me/ //


'use strict';

const user = 'https://randomuser.me/';

async function getUsers (URL) {
    try {
        const response = await fetch(URL);
        const [data] = await response.json();
        const  username =[];
        const nameSurname = [];
        const sexo =[];
        const pais = [];
        for (const user of data.users) {
            const response = await fetch (user);
            const users = await response.json();
        }
        return (getUsers);

    } 
    catch (error) {
        return error;
    }
    

};
getUsers(user);
console.log(user);