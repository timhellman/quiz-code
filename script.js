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
var answerResults = document.querySelector("#answer-results");
var choicesElement = document.querySelector("#choices");
var quiz = document.querySelector("#quiz");
var quizBtn = document.querySelector("#quiz_start");
var result = document.querySelector("#answer-results");
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

function submitFinalScore(){
    var initials = document.getElementById("scoreInput").value;
    const highScore = {
        initials: initials,
        score: score
      };
    localStorage.setItem("highscore",JSON.stringify(highScore));
    
    console.log(highScore)
}

//var highScore = JSON.parse(localStorage.getItem("highscore"))

function doSomething() {
    clearTimeout(timerId);
    scoreSpan.textContent = `${score}/${questions.length}`
    var initialsScore = document.createElement("input");
    initialsScore.setAttribute("id", "scoreInput")
    answerResults.appendChild(initialsScore)
    var buttons = document.createElement("button");
    buttons.textContent = "Submit";
    buttons.addEventListener("click", submitFinalScore)
    answerResults.appendChild(buttons)
}


var scoreSpan = document.querySelector("#score")
var userChoice
var currentQuestion = 0
var timerId;
//doSomething will be a function to display final score
//onclickevent that starts retrieving questions and displaying/starting the timer into id "quiz"
function countdown() {
    if (timeLeft == -1) {
        
        doSomething();
    } else {
        timer.innerHTML = timeLeft + 'seconds remaining';
        timeLeft--;
    }
}
var score = 0
function generateQuestions() {
    quiz.innerHTML = "";
    result.innerHTML = "";
    choicesElement.innerHTML = "";
    if (currentQuestion >= questions.length){
        doSomething()
    }else{
       var h2 = document.createElement("h2");
    h2.textContent = questions[currentQuestion].question;
    quiz.appendChild(h2);

    for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
        var buttons = document.createElement("button"); 
        buttons.textContent = questions[currentQuestion].answers[i];
        buttons.addEventListener("click", checkAnswer)
        choicesElement.appendChild(buttons)
    } 
    }
    
    
}
function checkAnswer() {
    if (this.textContent === questions[currentQuestion].correctAnswer) {
        result.textContent = ("correct!")
        
        //select the element with quizContent id
        //append correct to that element
        score++;

    }
    else {
        result.textContent = ("incorrect!")
        
    }

    currentQuestion++;
    setTimeout(generateQuestions, 500)
}


quizBtn.addEventListener("click", function(){
    timerId = setInterval(countdown, 2000);
    generateQuestions();
});


var timeLeft = 45;
var timer = document.getElementById('timer');







