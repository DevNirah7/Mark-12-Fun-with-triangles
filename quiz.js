var quizForm = document.querySelector(".quiz-form");
var submitAnswerBtn = document.querySelector("#submit-answer-btn");
var outputDiv = document.querySelector(".output");

var correctAnswer = ["90°","Right angled","One right angle", "Equilateral triangle"]


function calculateScore(x){
     x.preventDefault();
     let score =0;
     let i=0;
     var formResults = new FormData(quizForm);
     for(let value of formResults.values()){
         if(value === correctAnswer[i]){
             score = score + 1;
         }
         i = i+1;
     }
    
    outputDiv.innerText ="Your final score is " + score;   
}
quizForm.addEventListener("submit", calculateScore)