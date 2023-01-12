let sideA;
let sideB;
let sideC;

function calculateSides(event){
  event.preventDefault();
  sideA = parseInt(document.getElementById("input_side_a").value);
  sideB = parseInt(document.getElementById("input_side_b").value);
  sideC = parseInt(document.getElementById("input_side_c").value);
  determineTriangle();
}

function determineTriangle(){
  if((sideA + sideB <= sideC) || (sideB + sideC <= sideA) || (sideA + sideC <= sideB)){
    //not a triangle
    changeText(document.getElementById("output"), "Not a triangle");
  } else {

    if((sideA == sideB)  && (sideB == sideC)){
      //return equilateral
      changeText(document.getElementById("output"), "Equilateral");
    }else if((sideA == sideB) || (sideB == sideC) || (sideC == sideA)){
      //return isosceles
      changeText(document.getElementById("output"), "Isoceles");
    }else if((sideA != sideB) && (sideA != sideC) && (sideB != sideC)){
      //return scalene
      changeText(document.getElementById("output"), "Scalene");
    }
  }
}

function changeText(passedInElement, result){
  passedInElement.innerText = result;
}


window.addEventListener("load", function() {
  document.getElementById("triangle_form").addEventListener("submit", calculateSides);
})