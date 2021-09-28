var sides = document.querySelectorAll(".side-input");
var checkAreaBtn = document.querySelector("#check-area-btn");
var outputDiv = document.querySelector(".output");


function areaFormula(a, b) {
  var finalArea = 1 / 2 * a * b;
  return finalArea
}


function calculateAreaOfTriangle() 
{
  if(Number(sides[0].value)!==0 & Number(sides[1].value)!==0 ){
  var finalArea = areaFormula(Number(sides[0].value), Number(sides[1].value));
  outputDiv.innerText = "The Area of Triangle is " + finalArea;
 }
 
  else
  {
  outputDiv.innerText = "Kindly ensure to enter all the fields!"
  }
}

checkAreaBtn.addEventListener("click",calculateAreaOfTriangle)