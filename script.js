var startQuizButton = document.getElementById("startButton");


startQuizButton.addEventListener("click", startButton);


var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
        answer: "2. Alerts",
    },
    {
        question: "The condition in an if / else statement is enclosed within ___.",
        choices: ["1. Quotes", "2. Curly Brackets", "3. Parentheses", "4. Square Brackets"],
        answer: "3. Parentheses"
    },
    {
    question: "Arrays in JavaScript can be used to store ___.",
    choices: ["1. Numbers and Strings", "2. Other Arrays", "3. Booleans", "4. All of the Above"],
    answer: "4. All of the Above"
    },
    {
    question: "Strings values must be enclosed within ___ when being assigned to variables.",
    choices: ["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parentheses"],
    answer: "4. Parentheses"   
    }
];   

