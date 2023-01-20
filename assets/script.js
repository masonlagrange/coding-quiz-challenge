// List variables related to element identification and selection
var button1 = document.querySelector('#button1');
var button2 = document.querySelector('#button2');
var highScoreLink = document.querySelector('.highscoreLink');
var titleAndQuestion = document.querySelector('#titleAndQuestion');
var list = document.querySelector('.list');
var input = document.querySelector('.input');
var desc = document.querySelector('#desc');
var timer = document.querySelector('.timer');
var item1 = document.querySelector('#item1');
var item2 = document.querySelector('#item2');
var item3 = document.querySelector('#item3');
var item4 = document.querySelector('#item4');
var rightOrWrong = document.querySelector('#rightOrWrong');
var initials = document.querySelector('.input');

// Variables related to internal js script
var answer;
var answerPicked;
var time;
var questionNumber;
var score;

// Setting start page element styles
startPage();
function startPage() {
    questionNumber = 0;
    button1.innerText = "Start";
    button1.style.display = 'block';
    button2.style.display = 'none';
    highScoreLink.style.display = 'flex'
    titleAndQuestion.textContent = 'Coding Quiz Challenge';
    titleAndQuestion.style['width'] = '50%';
    desc.style.display = 'block';
    list.style.display = 'none';
    input.style.display = 'none';
    timer.style.display = 'none';
    rightOrWrong.style.display = 'none';
    desc.textContent = "Welcome to the Coding Quiz Challenge! Answer the following multiple choice coding questions within the alloted 90 seconds. Beware, wrong answers lower your remaining time by 15 seconds! Good luck!";
    button1.addEventListener('click', function() {
        nextQuestion();
        questionPage();
        timeLeft();
    });
}

// Setting styles consistent to all the question pages
function questionPage() {
    highScoreLink.style.display = 'none';
    button1.style.display = 'none';
    button2.style.display = 'none';
    list.style.display = 'block';
    desc.style.display = 'none';
    timer.style.display = 'flex';
    rightOrWrong.style.display = 'block';
}

// Control of the timer
function timeLeft() {
    time = 90;
    timer.innerText = "Time: " + time;
    setInterval(function () {
        if(time > 0) {
            time--;
            timer.innerText = "Time: " + time;
        } else if(time < 0) {
            time = 0;
            timer.innerText = 'Time: ' + time;
        } else if (time = 0) {
            gameOver();
        }
    }, 1000)
}

// Event listeners for each multiple choice option click
item1.addEventListener('click', function(){
    answerPicked = 1;
    if(answerPicked === answer) {
        rightAnswer();
    } else if (answerPicked != answer) {
        wrongAnswer();
    }
    nextQuestion();
});

item2.addEventListener('click', function(){
    answerPicked = 2;
    if(answerPicked === answer) {
        rightAnswer();
    } else if (answerPicked != answer) {
        wrongAnswer();
    }
    nextQuestion();
});

item3.addEventListener('click', function(){
    answerPicked = 3;
    if(answerPicked === answer) {
        rightAnswer();
    } else if (answerPicked != answer) {
        wrongAnswer();
    }
    nextQuestion();
});

item4.addEventListener('click', function(){
    answerPicked = 4;
    if(answerPicked === answer) {
        rightAnswer();
    } else if (answerPicked != answer) {
        wrongAnswer();
    }
    nextQuestion();
});

// Function to switch to next question or game over page
function nextQuestion () {
    questionNumber++;
    if(questionNumber === 1) {
        question1();
    } else if (questionNumber === 2) {
        question2();
    } else if (questionNumber === 3) {
        question3();
    } else if (questionNumber === 4) {
        question4();
    } else if (questionNumber === 5) {
        question5();
    } else if (questionNumber === 6) {
        gameOver();
    }
}

// What happens if the entered answer is wrong
function wrongAnswer() {
    rightOrWrong.innerText = 'Wrong! -15s'
    time = time - 15;
}

// What happens if the entered answer is right
function rightAnswer() {
    rightOrWrong.innerText = "Correct!"
}

// Loading the game over / submit highscore page
function gameOver () {
    score = time;
    titleAndQuestion.textContent = "Game Over, Enter Initials:"
    desc.style.display = 'block'
    desc.textContent = "Score: " + time;
    timer.style.display = 'none';
    list.style.display = 'none';
    input.style.display = 'block';
    button2.style.display = 'block';
    button2.textContent = 'Submit';
    button2.addEventListener('click', function() {

        if(localStorage.getItem('HighScore') === null) {
            var highscore = {
            hscore: score,
            initial: initials.value.trim()
        } else if (score > JSON.parse(localStorage.getItem('HighScore')).hscore){
            var highscore = {
            hscore: score,
            initial: initials.value.trim()
        }
        localStorage.setItem('HighScore', JSON.stringify(highscore));
        highScorePage();
        } else {
            highScorePage();
        }      
    });
}

highScoreLink.addEventListener('click', function() {
    highScorePage();
});

function highScorePage() {
    titleAndQuestion.textContent = 'High Score';
    var highscoreRender = JSON.parse(localStorage.getItem('HighScore'));
    if(highscoreRender !== null) {
        desc.textContent = highscoreRender.initial + ": " + highscoreRender.hscore;
    }
    input.style.display = 'none';
    rightOrWrong.style.display = 'none';
    button2.style.display = 'none';
    list.style.display = 'none';
    button1.style.display = 'none';
}

// Page info for questions
function question1() {
    titleAndQuestion.textContent = 'Commonly used data types do NOT include:'
    item1.innerText = 'String';
    item2.innerText = 'Number';
    item3.innerText = 'Boolean';
    item4.textContent = 'Alert';
    answer = 4;
}

function question2() {
    titleAndQuestion.textContent = 'The condition in an if/else statement is enclosed with _______'
    item1.innerText = 'Curly Brackets';
    item2.innerText = 'Square Brackets';
    item3.innerText = 'Parenthesis';
    item4.textContent = 'Quotes';
    answer = 3;
}

function question3() {
    titleAndQuestion.textContent = 'Arrays in Javascript can be used to store _______'
    item1.innerText = 'Numbers and strings';
    item2.innerText = 'Other arrays';
    item3.innerText = 'Booleans';
    item4.textContent = 'All of the above';
    answer = 4;
}

function question4() {
    titleAndQuestion.textContent = 'String values must be enclosed within _______ when being assigned to variables'
    item1.innerText = 'Quotes';
    item2.innerText = 'Square Brackets';
    item3.innerText = 'Parenthesis';
    item4.textContent = 'Curly Brackets';
    answer = 1;
}

function question5() {
    titleAndQuestion.textContent = 'A very useful tool used during development and debugging for printing content to the debugger is _______'
    item1.innerText = 'Javascript';
    item2.innerText = 'Console.log';
    item3.innerText = 'Terminal/bash';
    item4.textContent = 'For loops';
    answer = 2;
}
