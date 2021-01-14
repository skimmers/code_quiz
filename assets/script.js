// These are my variables //

var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var timer = document.querySelector("#timer");
var messageDiv = document.querySelector("#message");
var i = 0;
var score = 0;
var maxTime = 120;
var storedScores;
var scoreList = [];

// Function for timer //
function setTime() {
    var timerInterval = setInterval(function() {
        maxTime--;
        timer.textContent = "Timer" + maxTime;

        if (maxTime ===0) {
            clearInterval(timerInterval);
            alert("Out of Time");
            questionEnder();
        }

        else if (i === questions.length) {
            clearInterval(timerInterval);
        }
    }, 1000)
    return (score)
}

