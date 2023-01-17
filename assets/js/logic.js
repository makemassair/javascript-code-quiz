const beginQuiz = document.querySelector(".start");
const quizIntro = document.querySelector("#start-screen");
const question = document.querySelector("#questions");
const questionTitle = document.querySelector("#question-title");

// declared variable
activeQuestion = [];

// convert questionsToAsk object to array
// const questionContent = Object.values(questionsToAsk);
// console.log(questionContent);

// hide the introduction
// click.start which hides id=start-screen and reveals id=questions
beginQuiz.addEventListener("click", function() {
    console.log(`The "start button" has been clicked`);
    quizIntro.setAttribute("class", "hide");
    question.setAttribute("class", "start");
    
    printQ();
})

// function showQuestion() {
//     activeQuestion = Object.entries(questionsToAsk);
// }


// display the first question
function printQ() {
    
    // questionTitle.textContent = questionContent[0][1];
    questionTitle.textContent = questionsToAsk.question;
    console.log(questionTitle);
};