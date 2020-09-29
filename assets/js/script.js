var questions = [
    {
        question:
            "Commonly used data types DO NOT include:",
        choices: [
            "strings",
            "booleans",
            "alerts",
            "numbers"
        ],
        answer: "alerts"
    },
    {
        question:
            "The condition in an if / else statement is enclosed within ______.",
        choices: [
            "quotes",
            "curly brackets",
            "parentheses",
            "square brackets"
        ],
        answer: "parentheses"
    },
    {
        question:
            "Arrays in JavaScript can be used to store ______.",
        choices: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above"
        ],
        answer: "all of the above"
    },
    {
        question:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: [
            "JavaScript",
            "terminal / bash",
            "for loops",
            "console.log"
        ],
        answer: "console.log"
    },
    {
        question:
            "String values must be enclosed within _____ when being assigned to variables.",
        choices: [
            "commas",
            "curly brackets",
            "quotes",
            "parentheses"
        ],
        answer: "quotes"
    }

];
var questionIndex = 0;
var time = questions.length * 10;
var timerId;
var startBtn = document.getElementById("start-button");
var questionsEl = document.getElementById("question-box");
var answersEl = document.getElementById("answers");
var timerEl = document.getElementById("seconds");
var submitBtn = document.getElementById("submit");
var userName = document.getElementById("username");

function startQuiz() {
    var startMenu = document.querySelector(".start");
    startMenu.innerHTML = ""

    //un-hide questions
    questionsEl.removeAttribute("class");

    //start Timer
    timerId = setInterval(clock, 1000);
    timerEl.textContent = time;

    askQuestions();
}

function clock() {
    time--;
    timerEl.textContent = time;


    if (time <= 0) {
        
        endQuiz();
    }
}

function askQuestions() {
    var currentQuestion = questions[questionIndex];
    var titleEl = document.getElementById("question");
    titleEl.textContent = currentQuestion.question;

    answersEl.innerHTML = "";

    //create choices buttons
    for (var i = 0; i < currentQuestion.choices.length; i++) {

        var choices = currentQuestion.choices[i];
        var choicesbtn = document.createElement("button");
        choicesbtn.setAttribute("index", questionIndex);
        choicesbtn.textContent = choices;
        choicesbtn.className = "button";
        document.getElementById("answers").appendChild(choicesbtn)

    }

    answerQuestion();





}

function answerQuestion() {
    //right answer or wrong? With if statement
var elements = document.getElementsByClassName("button");
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function(){

           // grab the value from the button the user clicked 
           var btnClickedText = this.innerHTML;
           console.log(btnClickedText);

           // grab the attribute index from the button clicked
           var indx = parseInt(this.getAttribute("index"));
            console.log(indx);

            var currentCorrectAnswer = questions[indx].answer;
            console.log(currentCorrectAnswer);
           // now that you have the index you can get what the correct answer is from the question array
           if (btnClickedText != currentCorrectAnswer) {
               time = time - 15;
               
           } else {
           questionIndex++;
           askQuestions();
           }
 
       

           

        });
    }
   

}


function endQuiz() {
    //STOP TIMER
    clearInterval(timerId);

     // show end screen
  var endScreenEl = document.getElementById("end-screen");
  endScreenEl.removeAttribute("class");

  // show final score
  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = time;

  // hide questions section
  questionsEl.setAttribute("class", "ghost");




}







startBtn.addEventListener("click", startQuiz);
