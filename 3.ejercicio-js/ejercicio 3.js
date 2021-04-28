//Crea un programa que reciba un número en decimal o binario y devuelva la conversión:

//-   Si le pasamos un nº en decimal debe retornar la conversión a binario.

//-   Si le pasamos un nº en binario deberá devolver su equivalente decimal.

//Para ello la función deberá recibir un segundo parámetro que indique la base: 10 (decimal) o 2 (binario).

//No se permite utilizar el método parseInt().

'use strict';

function binarioDecimal(number)
{
    let divisor = 2;
    let dividendo = number;
    let binario = '';
    let resto;
    while(dividendo != 0) {
        resto = Math.trunc(dividendo % divisor);
        dividendo = Math.trunc(dividendo / divisor);
        if(resto===0){
           binario=binario.concat('0');
        } else {
           binario=binario.concat('1');
        }
    }
        binario = [].map.call(binario, function(x) {
                return x;
                    }).reverse().join(''); 
  return binario;
}
console.log(`${binarioDecimal(4)}`);
