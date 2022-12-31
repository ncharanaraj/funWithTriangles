const adjacentA = document.querySelector("#adjacent");
const oppositeO = document.querySelector("#opposite");
const hypotenuseH = document.querySelector("#hypotenuse-btn");
const hypotenuseOutput = document.querySelector("#hypotenuse-result");

function squareInputs(adjacent, opposite){
    const inputSquare =  Math.sqrt((adjacent*adjacent) + (opposite*opposite));
    return inputSquare.toFixed(2);
}

function caculateHypotenuse(){
    const inputSquare = squareInputs(Number(adjacentA.value), Number(oppositeO.value))
    
    if(inputSquare > 0) {
        hypotenuseOutput.innerText = "The length of hypotenuse is " + inputSquare;
    } else {
        hypotenuseOutput.innerText = "Please, fill all the fields."
    }
}

hypotenuseH.addEventListener('click', caculateHypotenuse)