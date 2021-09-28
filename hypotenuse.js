const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputDiv = document.querySelector(".output")

function calculateSumOfSquare(a, b) {
  var sumOfSquare = a * a + b * b
  return sumOfSquare

}

function calculateHypotenuse() 
{
  if(Number(sides[0].value) !==0 & Number(sides[1].value) !==0)
  {
  var sumOfSquare = calculateSumOfSquare(Number(sides[0].value), Number(sides[1].value))
  var lengthOfHypotenuse = Math.sqrt(sumOfSquare)
  outputDiv.innerText = "The Length of Hypotenuse is " + lengthOfHypotenuse.toFixed(2);
  }
  else
  {
  outputDiv.innerText = "Kindly ensure to enter all the fields!"

  }
}
hypotenuseBtn.addEventListener("click", calculateHypotenuse)