let score = 0;
let currentQuestion = 0;

const quizData = [
    {
    question: "What is the largest planet in our solar system?",
    options: ["Jupiter", "Mars"],
    answer: "Jupiter",
    },
    {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["Japan", "China"],
    answer: "Japan",
    },
    {
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Pablo Picasso"],
    answer: "Leonardo da Vinci",
    },
    {
    question: "What is the capital city of France?",
    options: ["Paris", "Rome"],
    answer: "Paris",
    },
    {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2"],
    answer: "H2O",
    },
    {
    question: "Which famous scientist developed the theory of relativity?",
    options: ["Albert Einstein", "Isaac Newton"],
    answer: "Albert Einstein",
    },
    {
    question: "In which country would you find the Great Barrier Reef?",
    options: ["Australia", "Brazil"],
    answer: "Australia",
    },
    {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Charles Dickens"],
    answer: "William Shakespeare",
    },
    {
    question: "What is the largest mammal on Earth?",
    options: ["Blue Whale", "African Elephant"],
    answer: "Blue Whale",
    },
    {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Mars", "Venus"],
    answer: "Mars",
    },
    {
    question: "What is the currency of Japan?",
    options: ["Yen", "Euro"],
    answer: "Yen",
    },
    {
    question: "Who is the author of the Harry Potter book series?",
    options: ["J.K. Rowling", "Stephen King"],
    answer: "J.K. Rowling",
    },
    {
    question: "Which famous scientist formulated the laws of motion?",
    options: ["Isaac Newton", "Galileo Galilei"],
    answer: "Isaac Newton",
    },
    {
    question: "What is the tallest mountain in the world?",
    options: ["Mount Everest", "K2"],
    answer: "Mount Everest",
    },
    {
    question: "In which city is the famous Taj Mahal located?",
    options: ["Agra", "New Delhi"],
    answer: "Agra",
    },
    {
    question: "Which gas is most abundant in the Earth's atmosphere?",
    options: ["Nitrogen", "Oxygen"],
    answer: "Nitrogen",
    },
    {
    question: "Who painted the ceiling of the Sistine Chapel in Vatican City?",
    options: ["Michelangelo", "Vincent van Gogh"],
    answer: "Michelangelo",
    },
    {
    question: "What is the smallest planet in our solar system?",
    options: ["Mercury", "Neptune"],
    answer: "Mercury",
    },
    {
    question: "Which river is the longest in the world?",
    options: ["Nile", "Amazon"],
    answer: "Nile",
    },
    {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag"],
    answer: "Au",
    }
];

function shuffleQuestions(questions) {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
}

const questionContainer = document.getElementById("question-container");
const questionText = document.getElementById("question-text");
const answers = document.getElementsByClassName("answer");
const scorePopup = document.getElementById("popup");
const scoreDisplay = document.getElementById("score");

function showQuestion() {
  if (currentQuestion < quizData.length && currentQuestion < 3) {
    const currentQuiz = quizData[currentQuestion];
    questionText.textContent = currentQuiz.question;
    for (let i = 0; i < answers.length; i++) {
      answers[i].textContent = currentQuiz.options[i];
      answers[i].style.backgroundColor = "";
      answers[i].disabled = false;
    }
  } else {
    showScore();
  }
}

function checkAnswer(button) {
  const currentQuiz = quizData[currentQuestion];
  if (button.textContent === currentQuiz.answer) {
    button.style.backgroundColor = "green";
    button.style.color = "white"; // Change text color to white for correct answer
    score++;
  } else {
    button.style.backgroundColor = "red";
    button.style.color = "white"; // Change text color to white for wrong answer
  }

  for (let i = 0; i < answers.length; i++) {
    answers[i].disabled = true;
  }

  currentQuestion++;
  setTimeout(() => {
    resetButtons(); // Reset button styles before showing the next question
    showQuestion();
  }, 1000); // Delay to show the next question
}

function resetButtons() {
  for (let i = 0; i < answers.length; i++) {
    answers[i].style.backgroundColor = "";
    answers[i].style.color = ""; // Reset text color to default (black)
  }
}


function showScore() {
  scoreDisplay.textContent = `${score} out of ${Math.min(quizData.length, 3)}`;
  scorePopup.style.display = "block";
}

function reloadPage() {
  location.reload();
}

// Shuffle the questions before starting the quiz
shuffleQuestions(quizData);

// Start the quiz on page load
showQuestion();
