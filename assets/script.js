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

function questionEnder() {
    var scoreTag = document.createElement("h1");
    var inputTag = document.createElement("input");
    var submitButton = document.createElement("button");
    score += maxTime * .1;
    score = score.toFixed(2);
    document.getElementById("question").textContent = "Completed";
    answer1.remove();
    answer2.remove();
    answer3.remove();
    document.body.children[1].appendChild(scoreTag);
    document.getElementsByTagName("h1")[0].setAttribute("id", "score");
    document.getElementById("score").textContent = "Your Score: " + score;
    document.body.children[1].appendChild(inputTag);
    document.getElementsByTagName("input")[0].setAttribute("id", "input-field");
    submitButton.textContent = "Submit";
    document.body.children[1].appendChild(submitButton);

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        var scoreText = new Object();
        scoreText.name = inputTag.value.trim();
        scoreText.newScore = score;
        storeScores(scoreText);
        window.location.href = "leaderboard.html";
    });
}

function questionStarter() {
    answer1.hidden = false;
    answer2.hidden = false;
    answer3.hidden = false;

    document.getElementById("startBtn").hidden = true;
    if (i===questions.length) {
        questionEnder();
    }
    else{
        document.getElementById("question").textContent = questions[i]["title"];
        document.getElementById("answer1").textContent = questions[i]["choices"][0];
        document.getElementById("answer2").textContent = questions[i]["choices"][1];
        document.getElementById("answer3").textContent = questions[i]["choices"][2];
    }
}

function storeScores (scoreText) {
    tempArray = JSON.parse(localStorage.getItem("scores"));
    if (tempArray === null) {
        scoreList.push(scoreText);
        localStorage.setItem("scores", JSON.stringify(scoreList));
    }
    else {
        tempArray.push(scoreText);
        localStorage.setItem("scores", JSON.stringify(tempArray));
    }

}

document.getElementById("startBtn").addEventListener("click", questionStarter);
document.getElementById("startBtn").addEventListener("click", setTime);
document.getElementById("startBtn").addEventListener("click", function () {
    messageDiv.textContent = "";
});

answer1.hidden = true;
answer2.hidden = true;
answer3.hidden = true;

document.getElementById("answer1").addEventListener("click", function () {
    if (questions[i]["choices"][0] === questions[i]["answer"]) {
        messageDiv.textContent = "Correct!";
        score++;
    }
    else {
        messageDiv.textContent = "Wrong!";
        maxTime -= 10;
    }
    i++;
    questionStarter();
})
document.getElementById("answer2").addEventListener("click", function () {
    if (questions[i]["choices"][1] === questions[i]["answer"]) {
        messageDiv.textContent = "Correct!";
        score++;
    }
    else {
        messageDiv.textContent = "Wrong!";
        maxTime -= 10;
    }
    i++;
    questionStarter();
})

document.getElementById("answer3").addEventListener("click", function () {
    if (questions[i]["choices"][2] === questions[i]["answer"]) {
        messageDiv.textContent = "Correct!";
        score++;
    }
    else {
        messageDiv.textContent = "Wrong!";
        maxTime -= 10;
    }
    i++;
    questionStarter();
})