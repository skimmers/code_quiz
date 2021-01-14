var question = document.getElementById("question");
var answerChoices = Array.from(document.getElementsByClassName("answerChoices-text"));
var scoreText = document.getElementById("score");
var quizCounterText = document.getElementById("questionCounter");
var viewQuestion = {};
var chosenAnswer = true;
var score = 0;
var questionCounter = 0;
var allQuestions = [];
var time = 30;

var questions = [
    {
        question: "What does HTML stand for?",
        choice1: "Hype TV Man Lives",
        choice2: "Hypertext Markup Language",
        choice3: "Hyper Texting Mail Line",
        answer: 2,
    },

    {
        question: "What does CSS stand for?",
        choice1: "Cascading Style Sheets",
        choice2: "Cascading Singing Songs",
        choice3: "Cats Sing Songs",
        answer: 1,

    },

    {
        question: "Can you write CSS internally or externally of a HTML file?",
        choice1: "Internally",
        choice2: "Externally",
        choice3: "Both",
        answer: 3,
    }

];

var all_Questions = 3;

function quizStart () {
    questionCounter = 0;
    score = 0;
    allQuestions = [...questions];
    getNewQuestion();
}

getNewQuestion = () => {
    if (allQuestions.length === 0 || questionCounter <= all_Questions){
        localStorage.setItem('scoreKeeper', score);
        localStorage.setItem('timeKeeper', time);
        return window.location.assign("end html");
    }
    
    questionCounter++;
    quizCounterText.innerText = questionCounter + "/" + all_questions;
    var questionIndex = Math.floor(Math.random() * allQuestions.length);
    viewQuestion = allQuestions[questionIndex];
    question.innerText = viewQuestion.question;

    answerChoices.forEach(choice => {
    var number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

    allQuestions.splice(questionIndex, 1);
    
    chosenAnswer = true;

}; 