var button1 = document.querySelector('#button1');
var button2 = document.querySelector('#button2');
var highScoreLink = document.querySelector('.highscoreLink');

// var pageState = 0;
// var time;
// var timerVisible;
// var HSLinkVisible;
// var h1State;
// var pVisible;
// var listState;
// var inputVisible;
var button1State;
// var button2State;

var titleAndQuestion = document.querySelector('#titleAndQuestion');

startPage();
function startPage() {
    button1.innerText = "Start";
    button1State = 0;
    titleAndQuestion.textContent = 'Coding Quiz Challenge';
    titleAndQuestion.style['width'] = '50%';
}
