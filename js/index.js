const questions = [
    {
        "question": "What is the capital of France?",
        "options": {
            "a": "Berlin",
            "b": "Madrid",
            "c": "Paris",
            "d": "Lisbon"
        },
        "answer": "c",
        "hint": "It's known as the city of love."
    },
    {
        "question": "What is the smallest planet in our solar system?",
        "options": {
            "a": "Mars",
            "b": "Mercury",
            "c": "Venus",
            "d": "Earth"
        },
        "answer": "b",
        "hint": "It is the closest planet to the Sun."
    },
    {
        "question": "Who painted the Mona Lisa?",
        "options": {
            "a": "Vincent van Gogh",
            "b": "Leonardo da Vinci",
            "c": "Pablo Picasso",
            "d": "Claude Monet"
        },
        "answer": "b",
        "hint": "He was also a famous Italian inventor."
    },
    {
        "question": "What is 15 + 30?",
        "options": {
            "a": "35",
            "b": "40",
            "c": "45",
            "d": "50"
        },
        "answer": "c",
        "hint": "Think of it as adding 15 and 30."
    },
    {
        "question": "In what year did World War II end?",
        "options": {
            "a": "1939",
            "b": "1941",
            "c": "1945",
            "d": "1947"
        },
        "answer": "c",
        "hint": "It was the same year atomic bombs were dropped on Japan."
    },
    {
        "question": "Which ancient civilization built the pyramids?",
        "options": {
            "a": "Romans",
            "b": "Egyptians",
            "c": "Greeks",
            "d": "Mayans"
        },
        "answer": "b",
        "hint": "Their civilization was centered along the Nile River."
    },
    {
        "question": "What is the largest mammal on Earth?",
        "options": {
            "a": "Elephant",
            "b": "Blue Whale",
            "c": "Giraffe",
            "d": "Hippopotamus"
        },
        "answer": "b",
        "hint": "It's found in the ocean."
    },
    {
        "question": "Who is known as the father of geometry?",
        "options": {
            "a": "Plato",
            "b": "Socrates",
            "c": "Euclid",
            "d": "Pythagoras"
        },
        "answer": "c",
        "hint": "He was a Greek mathematician."
    },
    {
        "question": "Which planet is known as the 'Red Planet'?",
        "options": {
            "a": "Venus",
            "b": "Saturn",
            "c": "Mars",
            "d": "Jupiter"
        },
        "answer": "c",
        "hint": "Its reddish color comes from iron oxide on its surface."
    },
    {
        "question": "In what year did the Titanic sink?",
        "options": {
            "a": "1905",
            "b": "1912",
            "c": "1920",
            "d": "1930"
        },
        "answer": "b",
        "hint": "It was the early 20th century."
    },
    {
        "question": "What is the chemical symbol for water?",
        "options": {
            "a": "O2",
            "b": "H2O",
            "c": "CO2",
            "d": "HO"
        },
        "answer": "b",
        "hint": "It consists of two hydrogen atoms and one oxygen atom."
    },
    {
        "question": "Who discovered penicillin?",
        "options": {
            "a": "Marie Curie",
            "b": "Alexander Fleming",
            "c": "Isaac Newton",
            "d": "Albert Einstein"
        },
        "answer": "b",
        "hint": "He was a Scottish bacteriologist."
    },
    {
        "question": "What is the longest river in the world?",
        "options": {
            "a": "Amazon",
            "b": "Yangtze",
            "c": "Mississippi",
            "d": "Nile"
        },
        "answer": "d",
        "hint": "This river flows through Egypt."
    },
    {
        "question": "Which organ in the human body produces insulin?",
        "options": {
            "a": "Liver",
            "b": "Pancreas",
            "c": "Heart",
            "d": "Kidneys"
        },
        "answer": "b",
        "hint": "It's located behind the stomach."
    },
    {
        "question": "What is the square root of 144?",
        "options": {
            "a": "10",
            "b": "11",
            "c": "12",
            "d": "13"
        },
        "answer": "c",
        "hint": "Think of it as a number that, when multiplied by itself, equals 144."
    },
    {
        "question": "Who wrote 'To Kill a Mockingbird'?",
        "options": {
            "a": "Harper Lee",
            "b": "Jane Austen",
            "c": "Mark Twain",
            "d": "F. Scott Fitzgerald"
        },
        "answer": "a",
        "hint": "The author shares a name with a bird-related title."
    },
    {
        "question": "What is the chemical formula for table salt?",
        "options": {
            "a": "H2O",
            "b": "NaCl",
            "c": "CO2",
            "d": "KCl"
        },
        "answer": "b",
        "hint": "It contains sodium and chloride."
    },
    {
        "question": "How many continents are there?",
        "options": {
            "a": "5",
            "b": "6",
            "c": "7",
            "d": "8"
        },
        "answer": "c",
        "hint": "It's one more than six."
    },
    {
        "question": "What gas do plants absorb from the atmosphere?",
        "options": {
            "a": "Oxygen",
            "b": "Carbon Dioxide",
            "c": "Nitrogen",
            "d": "Helium"
        },
        "answer": "b",
        "hint": "It's essential for photosynthesis."
    },
    {
        "question": "Who was the first person to walk on the moon?",
        "options": {
            "a": "Buzz Aldrin",
            "b": "Yuri Gagarin",
            "c": "Neil Armstrong",
            "d": "Michael Collins"
        },
        "answer": "c",
        "hint": "He famously said, 'That's one small step for man...'"
    }
];

const currentPath = window.location.pathname;

if (currentPath === "/index.html") {

    // Main page cancel button event listener

    const cancel = document.querySelector(".cancel-button");
    const textBox = document.querySelector(".text-box");
    const startQuiz = document.querySelector(".start-quiz");

    cancel.addEventListener("click", () => {
        textBox.style.display = "none";
        startQuiz.style.display = "flex";
    });
} else {

    // Question page question and answer options population

    const question = document.querySelector(".question-container p");
    const questionContainer = document.querySelector(".question-container");
    const answerButtons = document.querySelectorAll(".answer-container .answer")
    const afterAnswer = document.querySelector(".if");
    const timeUp = document.querySelector(".w");
    const timeUpSign = document.querySelector(".x")
    const refreshButton = document.querySelector(".refresh-arrow");
    const bottomSection = document.querySelector(".bottom-section");
    const hint = document.querySelector(".hint");
    const hintBox = document.querySelector(".hint-box");
    const hintText = document.querySelector(".hint-box p");

    let currentScore = 0;
    const scoreTrack = document.querySelector(".score");
    scoreTrack.innerHTML = currentScore;

    const timeDisplay = document.querySelector(".counter");

    let timer;
    let timeLeft = 0;

    function startTimer() {
        timeLeft = 30;
        timeDisplay.innerHTML = timeLeft;
        timer = setInterval(() => {
            timeLeft -= 1;
            timeDisplay.innerHTML = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(timer);
                handleTimeUp();
            }
        }, 1000)
    };

    function resetTime() {
        clearInterval(timer);
        startTimer();
    }

    function handleTimeUp() {
        questionContainer.style.display = "none";
        afterAnswer.style.display = "flex";
        timeUp.innerHTML = "Time Up";
        timeUpSign.innerHTML = "⌛";
        bottomSection.style.display = "none";
    }

    function displayNewQuestion() {
        const randmNumber = Math.floor(Math.random() * questions.length);
        const randomQuestion = questions[randmNumber];

        question.innerHTML = randomQuestion.question;

        const answerList = Object.entries(randomQuestion.options);

        answerButtons.forEach((button, index) => {
            const [key, value] = answerList[index];
            button.value = `${key}. ${value}`;
        });

        // Hint Box

        hint.addEventListener("mouseover", () => {

            hintBox.style.display = "block";
            hintText.innerHTML = randomQuestion.hint;
        });

        hint.addEventListener("mouseout", () => {
            hintBox.style.display = "none";
        });

        resetTime();

        return randomQuestion;
    }

    let currentQuestion = displayNewQuestion();


    // Answer buttons event listeners

    const buttonPressed = document.querySelector(".answer-container");

    buttonPressed.addEventListener("click", (event) => {
        const userAnswer = event.target.value.slice(0, 1);

        if (userAnswer === currentQuestion.answer) {
            currentScore += 1;
            scoreTrack.innerHTML = currentScore;

            currentQuestion = displayNewQuestion();

        } else {
            questionContainer.style.display = "none";
            afterAnswer.style.display = "flex"
            bottomSection.style.display = "none";
        }

    });

    //  For refresh button

    refreshButton.addEventListener("click", () => {
        currentQuestion = displayNewQuestion();
    });

}