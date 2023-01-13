const angleOne = document.querySelector("#first-angle");
const angleTwo = document.querySelector("#second-angle");
const angleThree = document.querySelector("#third-angle");
const triangleBtn = document.querySelector("#triangle-btn")
const triangleMessage = document.querySelector("#showMessage");

function calculateSumOfAngles(angle1, angle2, angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle(){
    const sumOfAngles = calculateSumOfAngles(Number(angleOne.value), Number(angleTwo.value), Number(angleThree.value))

    if(sumOfAngles === 180){
        triangleMessage.innerText = "Possible to make a🔺"
    } else {
        triangleMessage.innerText = "Not possible to make a🔺"
    }
}

triangleBtn.addEventListener('click', isTriangle)