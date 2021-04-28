//Crea un programa que imprima cada 5 segundos el tiempo desde la ejecución del mismo. 
//Formatea el tiempo para que se muestren los segundos, los minutos, las horas y los días desde la ejecución.


'use strict';

let time = new Date(2021, 3, 25, 16, 14, 20);
let hours= time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();

function program (seconds, minutes, hours) {
    const interval = setInterval(() => {
        if (seconds > 5) {
            console.log(seconds, minutes, hours);
            seconds++;
        } else {
           clearInterval(interval);
        }
    }, 5000);
}


program(seconds, minutes, hours);
console.log(time);