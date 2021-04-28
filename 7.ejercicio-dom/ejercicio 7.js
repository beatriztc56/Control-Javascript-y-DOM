
function addSquare() {
    
    let div = document.createElement('div');
    div.className = 'square';
    div.style.backgroundColor = getColor(); 
    containerDiv = document.getElementById('container').appendChild(div);
}

function getColor() {
    let color = "rgb("+ getRandomNumber() +", " + getRandomNumber() + ", "+ getRandomNumber() + ")"; 
    return color;
}


function getRandomNumber(){
    let num = Math.floor(Math.random() * (255 - 0) + 0);
    return num;
}