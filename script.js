const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Shakespeare", "Tolstoy", "Hemingway", "Fitzgerald"],
        answer: "Shakespeare"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = `
        <p>${questions[currentQuestion].question}</p>
        ${questions[currentQuestion].options.map((option, index) => `
            <div>
                <input type="radio" name="option" id="option${index}" value="${option}">
                <label for="option${index}">${option}</label>
            </div>
        `).join('')}
    `;
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert("Please select an answer!");
        return;
    }

    if (selectedOption.value === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz").innerHTML = "";
        document.getElementById("next").style.display = "none";
        document.getElementById("result").innerHTML = `Your score: ${score} / ${questions.length}`;
    }
}

window.onload = loadQuestion;
