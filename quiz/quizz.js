const quizForm = document.querySelector(".quiz-form");
const answersBtn = document.querySelector("#answers-btn");
const outputMessage = document.querySelector("#show-message")

const rightAnswers = ["90°","right angle triangle"];

function calculateScore(){
     let score = 0;
     let index = 0;
     const formAnswers = new FormData(quizForm);
     
     for( let value of formAnswers.values()){
        if(value === rightAnswers[index]){
            score++;
        }
        index++;
     }
     
     if(score > 0) {
         outputMessage.innerText = "Your score is " + score ;
        } else {
         outputMessage.innerText = "Answer all the questions to know your score";
     }


}

answersBtn.addEventListener('click', calculateScore)