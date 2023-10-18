// JavaScript code for handling quiz functionality

// Sample quiz questions (you can replace this with your own questions)
const quizQuestions = [
    {
        question: "What is the capital of France?",
        choices: ["Madrid", "Rome", "Paris", "Berlin"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars"
    },
    // Add more questions here
];

let currentQuestion = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const choicesList = document.getElementById('choices');
const resultContainer = document.getElementById('result-container');
const resultMessage = document.getElementById('result');
const nextButton = document.getElementById('next-button');
const scoreDisplay = document.getElementById('score');

function displayQuestion() {
    if (currentQuestion < quizQuestions.length) {
        const question = quizQuestions[currentQuestion];
        questionContainer.style.display = 'block';
        resultContainer.style.display = 'none';
        questionContainer.querySelector('#question').textContent = `Question ${currentQuestion + 1}: ${question.question}`;
        choicesList.innerHTML = '';

        question.choices.forEach(choice => {
            const choiceElement = document.createElement('li');
            choiceElement.textContent = choice;
            choiceElement.className = 'choice';
            choiceElement.addEventListener('click', handleAnswer);
            choiceElement.dataset.answer = (choice === question.correctAnswer).toString();
            choicesList.appendChild(choiceElement);
        });
    } else {
        endQuiz();
    }
}

function handleAnswer(event) {
    const isCorrect = event.currentTarget.dataset.answer === 'true';
    if (isCorrect) {
        score++;
        resultMessage.textContent = 'Correct!';
        resultMessage.style.color = '#007bff';
    } else {
        resultMessage.textContent = 'Incorrect';
        resultMessage.style.color = 'red';
    }

    scoreDisplay.textContent = `Score: ${score}`;
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    nextButton.style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;
    displayQuestion();
    nextButton.style.display = 'none';
}

function endQuiz() {
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    resultMessage.textContent = `Quiz Completed! Your Score: ${score}`;
    resultMessage.style.color = '#007bff';
    nextButton.textContent = 'Restart Quiz';
    nextButton.addEventListener('click', restartQuiz);
    nextButton.style.display = 'block';
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    displayQuestion();
    nextButton.textContent = 'Next';
    nextButton.removeEventListener('click', restartQuiz);
    scoreDisplay.textContent = 'Score: 0';
}

document.getElementById('start-button').addEventListener('click', displayQuestion);
nextButton.addEventListener('click', nextQuestion);
