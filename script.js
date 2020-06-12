// Variables
var startQuizButton = document.getElementById("startQuiz");
var codingQuizChallenge = document.getElementById("codingQuizChallenge");
var codingQuiz = document.getElementById("codingQuiz");
var highScore = document.getElementById("highScore");
var questionElement = document.getElementById("questions");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var answerButtons = document.querySelectorAll(".answerButtons");
var correctWrong = document.getElementById("correctWrong");
var timeElement = document.getElementById("time");
var secondsLeft = 75;
var scoreElement = document.getElementById("totalScore");
var score = 0;
var questionArray = 0;
var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
    answer: "3. Alerts",
  },
  {
    question: "The condition in an if / else statement is enclosed within ___.",
    choices: [
      "1. Quotes",
      "2. Curly Brackets",
      "3. Parentheses",
      "4. Square Brackets",
    ],
    answer: "3. Parentheses",
  },
  {
    question: "Arrays in JavaScript can be used to store ___.",
    choices: [
      "1. Numbers and Strings",
      "2. Other Arrays",
      "3. Booleans",
      "4. All of the Above",
    ],
    answer: "4. All of the Above",
  },
  {
    question:
      "Strings values must be enclosed within ___ when being assigned to variables.",
    choices: ["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parentheses"],
    answer: "3. Quotes",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: [
      "1. JavaScript",
      "2. Terminal/Bash",
      "3. For Loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
];

// Hides the codingQuiz and highScore Pages
codingQuiz.style.display = "none";
highScore.style.display = "none";

// When the "Start" button is clicked the quiz starts
startQuizButton.addEventListener("click", startQuiz);

// Start Quiz function
function startQuiz() {
  startTimer();
  event.preventDefault();
  codingQuizChallenge.style.display = "none";
  codingQuiz.style.display = "block";
  startQuestions();
}

// Start Timer Function
timeElement.textContent = "Time left: " + secondsLeft + "s";
function startTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeElement.textContent = "Time left: " + secondsLeft + "s";
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      timeElement.textContent = "Times up!";
    }
  }, 1000);
}

// Function to generate the questions
function startQuestions() {
  // Shows the question
  allQuestion = questions[questionArray];
  questionElement.textContent = allQuestion.question;

  // Show the answer choices
  answer1.textContent = allQuestion.choices[0];
  answer2.textContent = allQuestion.choices[1];
  answer3.textContent = allQuestion.choices[2];
  answer4.textContent = allQuestion.choices[3];
}

// Adds event listener to each answer choice button
// event.target returns the DOM element, only targets the correct answers and displays
for (var i = 0; i < answerButtons.length; i++) {
  answerButtons[i].addEventListener("click", function () {
    if (event.target.textContent === allQuestion.answer) {
      correctWrong.textContent = "Correct!";
    }
    // If the answer is wrong, state it and -10s
    else {
      correctWrong.textContent = "Wrong!";
      secondsLeft = secondsLeft - 10;
    }
    scoreElement.textContent = "Your final score is: " + score;
    // Next question
    questionArray++;
    if (questionArray < questions.length) {
      startQuestions();
    } else {
      codingQuiz.style.display = "none";
      timeElement.style.display = "none";
      highScore.style.display = "block";
    }
  });
}
