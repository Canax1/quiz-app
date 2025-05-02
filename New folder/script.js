// List of questions, options, and answers

const questions = [

  { question: "What is the minimum age for voting?", 
    options: ["16", "18", "21", "25"], 
    ans: 1 
  }, 

  { question: "How many states are there in Nigeria?",
    options: ["36", "37", "38", "39"],
    ans: 0
  },

  { question: "What is the capital of Nigeria?",
    options: ["Lagos", "Abuja", "Port Harcourt", "Kano"],
    ans: 1
  },

];

let currentQuestion = 0;
let score = 0;

// Get DOM elements from the html IDs created.

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const scoreElement = document.getElementById("score");

// Function to load the current question and options

function loadQuestion() {
  
  // Clear previous answers

  optionsElement.innerHTML = "";
  questionElement.textContent = questions[currentQuestion].question;

  // Show answer buttons

  questions[currentQuestion].options.forEach((option, i) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.className = "options-btn";
    btn.onclick = () => {

      // Check if selected answer is correct

      if (i === questions[currentQuestion].ans) {
        score++;
      }

      // Move to next question

      currentQuestion++;

      if (currentQuestion < questions.length) {
        loadQuestion();
      } else {
        showScore();
      }
    };
    optionsElement.appendChild(btn);
  });
}

// Show final score
function showScore() {
  questionElement.style.display = "none";
  optionsElement.style.display = "none";
  nextButton.style.display = "none";
  scoreElement.style.display = "block";
  scoreElement.textContent = "Your score is " + score + " out of " + questions.length;
}

// Start the quiz
loadQuestion();

