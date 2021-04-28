
let texto = document.getElementsByTagName('p')[0];

function countLetter(word) {
    let len = word.length;
    if(len > 5) {
        return true
    } else false;
}

let cadenaPartida = texto.split(' ');
let trozo = cadenaPartida [10];

let nueva = '<u>' + trozo + '</u>';

cadenaPartida [10] = nueva;

console.log(cadenaPartida);