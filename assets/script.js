var question = document.getElementById("question");
var answerChoices = document.getElementById("answerChoices");
var scoreText = document.getElementById("score");
var viewQuestion = {};
var chosenAnswer = {};
var score = 0;
var allQuestions = [];
var time = 30;

var allQuestions = [
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

]