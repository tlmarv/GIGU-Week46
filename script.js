// Quiz Data (Example)
const quizData = [
    {
        question: "What is the primary function of hemoglobin?",
        choices: ["Carry oxygen", "Produce ATP", "Fight infections", "Regulate blood pressure"],
        correctAnswer: 0,
        explanation: "Hemoglobin binds oxygen in the lungs and transports it to tissues."
    },
    {
        question: "Which blood disorder is caused by a deficiency of clotting factors?",
        choices: ["Leukemia", "Hemophilia", "Sickle cell disease", "Thalassemia"],
        correctAnswer: 1,
        explanation: "Hemophilia is a disorder where clotting factors are deficient, leading to excessive bleeding."
    }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

// DOM Elements
const questionText = document.getElementById("question-text");
const choicesContainer = document.getElementById("choices-container");
const explanationBox = document.getElementById("explanation");
const progressText = document.getElementById("progress");
const correctText = document.getElementById("correct");
const incorrectText = document.getElementById("incorrect");
const questionList = document.getElementById("question-list");

// Load Questions into Sidebar
quizData.forEach((_, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `Question ${index + 1}`;
    listItem.onclick = () => loadQuestion(index);
    questionList.appendChild(listItem);
});

// Load Question
function loadQuestion(index) {
    currentQuestionIndex = index;
    const q = quizData[index];
    
    questionText.textContent = q.question;
    choicesContainer.innerHTML = "";
    explanationBox.classList.add("hidden");

    q.choices.forEach((choice, i) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = () => checkAnswer(i);
        choicesContainer.appendChild(button);
    });

    updateProgress();
}

// Check Answer
function checkAnswer(selectedIndex) {
    const q = quizData[currentQuestionIndex];
    explanationBox.textContent = q.explanation;
    explanationBox.classList.remove("hidden");

    if (selectedIndex === q.correctAnswer) {
        correctAnswers++;
    } else {
        incorrectAnswers++;
    }

    updateProgress();
}

// Update Progress
function updateProgress() {
    progressText.textContent = `${currentQuestionIndex + 1}/${quizData.length}`;
    correctText.textContent = correctAnswers;
    incorrectText.textContent = incorrectAnswers;
}

// Navigation Controls
document.getElementById("next-btn").onclick = () => loadQuestion(Math.min(currentQuestionIndex + 1, quizData.length - 1));
document.getElementById("prev-btn").onclick = () => loadQuestion(Math.max(currentQuestionIndex - 1, 0));

// Hotkey Navigation
document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        loadQuestion(Math.min(currentQuestionIndex + 1, quizData.length - 1));
    } else if (event.code === "KeyB") {
        loadQuestion(Math.max(currentQuestionIndex - 1, 0));
    }
});

// Load First Question on Start
loadQuestion(0);
