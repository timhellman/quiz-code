// variable declaration, data types - questions, possible answers, correct answers, user choice, timer
//start button with eventListener on-click event
//timer starting quiz - counter set to ... 60 seconds
//first question is asked not with an alert
//incorrect answer doc 10 seconds
//store answers correct in local storage
//summary appended to the page (don't use alerts!)

//quiz game 33 as a reference
//jumbotron
//highscore and timer
//transitions between questions - set up an array of questions; when one is answered the next question pops up via javascript creating an element in html;
/////////that answer stored in local storage;
/////////when an answer is clicked on - that is an if statement
/////for loop for the questions and answers

var quiz = document.querySelector("#quiz");
var quizBtn = document.querySelector("#quiz_start");
console.log(quizBtn)
var questions = [
    {
        question: "In what state does a person need a permit in order to feed garbage to a pig?",
        answers: ['Alabama', 'Alaska', 'Arizona', 'Arkansas'],
        correctAnswer: 'Arizona',
    },
    {
        question: "A frog that dies during a frog-jumping contest cannot be eaten and must be destroyed ASAP in which state?",
        answers: ['California', 'Colorado', 'Washington', 'West Virginia'],
        correctAnswer: 'California',
    },

    {
        question: "In what state is cannibalism strictly prohibited and punishable by up to 14 years in prison?",
        answers: ['Montana', 'Nebraska', 'Delaware', 'Idaho'],
        correctAnswer: 'Idaho',
    },
    {
        question: "It's a crime to possess more than $600 in salamanders in what state?",
        answers: ['Illinois', 'Wyoming', 'North Dakota', 'North Carolina'],
        correctAnswer: 'Illinois',
    },
    {
        question: "Since 1931 adultery has been a felony in what state's statute?",
        answers: ['Hawaii', 'Oklahoma', 'Mississippi', 'Michigan'],
        correctAnswer: 'Michigan',
    },
]
var quizStart = document.querySelector("#quiz_start")
var userChoice
var currentQuestion = 0

//onclickevent that starts retrieving questions and displaying/starting the timer into id "quiz"


function generateQuestions() {
    quiz.innerHTML = "";
    var h2 = document.createElement("h2");
    h2.textContent = questions[currentQuestion].question;
    quiz.appendChild(h2);

    for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
        var buttons = document.createElement("button")
        buttons.textContent = questions[currentQuestion].answers[i];
        buttons.addEventListener("click", checkAnswer)
        quizQuestions.appendChild(buttons)
    }
}
function checkAnswer() {
    if (this.textContent === questions[currentQuestion].correct) {
        var correct = document.createElement("h2")
        alert = "CORRECT!";
        // console.log(correct)
        //select the element with quizContent id
        //append correct to that element
        score++;
    }
    else {
        var wrong = document.createElement("h2")
        alert = "WRONG!";
        displayAnswer.appendChild(wrong);
    }
    currentQuestion++;
    generateQuestions()
}

quizBtn.addEventListener("click", generateQuestions);


var timeLeft = 45;
var timer = document.getElementById('timer');
var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
    } else {
        timer.innerHTML = timeLeft + 'seconds remaining';
        timeLeft--;
    }
}




