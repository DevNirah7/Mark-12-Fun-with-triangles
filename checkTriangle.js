var inputs = document.querySelectorAll(".angle-input")
var isTriangleBtn = document.querySelector("#is-triangle-btn")
var outputDiv = document.querySelector("#istriangle")

function calculateSumOfAngles(angle1, angle2, angle3) {
    var sumOfAngles = angle1 + angle2 + angle3
    return sumOfAngles
}


function isTriangle() {
    var sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value))
    if (Number(inputs[0].value) !==0 &  Number(inputs[1].value) !==0 & Number(inputs[2].value )!==0) {
        if (sumOfAngles === 180) {
            outputDiv.innerText = "YAAY! The angles form a Triangle"
            outputDiv.style.color ="pink"
             
        } else {
            outputDiv.innerText = "UH-OH! The angles do not form a Triangle"
            
             
        }
    } else {
        outputDiv.innerText = "Kindly ensure to enter all the fields!"
        
             
    }
}

isTriangleBtn.addEventListener("click", isTriangle)