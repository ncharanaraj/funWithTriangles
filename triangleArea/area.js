const baseArea = document.querySelector("#base");
const heightArea = document.querySelector("#height");
const calcTriangleArea = document.querySelector("#calc-area");
const showMessage = document.querySelector("#display-calc-area");

function calcTriangle(base, height){
    const triangleArea = (1/2) * base * height; 
    return triangleArea;
}

function areaOfTriangle(){
   const areaTriangle =  calcTriangle(Number(baseArea.value), Number(heightArea.value));

   if(areaTriangle > 0){
       showMessage.innerText = "Area of triangle is " + areaTriangle ;
   } else {
    showMessage.innerText = "Enter all the fields."
   }
}

calcTriangleArea.addEventListener('click', areaOfTriangle)