function cursorEffect() {
    const cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", (mouseEvent) => {
        let x = mouseEvent.pageX;
        let y = mouseEvent.pageY;
        cursor.style.top = y + "px";
        cursor.style.left = x + "px";
        cursor.style.display = "block";
    });

    document.addEventListener("mouseout", () => {
        cursor.style.display = "none";
    });
}

function toggleDropdown() {
    const pageLinks = document.getElementById("pageLinks");
    pageLinks.classList.toggle("show");
}

function pageChanger() {
    const pageSharks = document.querySelector("#pageSharks");
    const pageFacts = document.querySelector("#pageFacts");
    const pageBio = document.querySelector("#pageBiology");
    const pageHistory = document.querySelector("#pageHistory");

    const sharkTypeButton = document.querySelector("#showTypes");
    const sharkSpeciesButton = document.querySelector("#showSpecies");

    function dispSharkBtns() {
        sharkTypeButton.style.display = "block";
        sharkSpeciesButton.style.display = "block";
    }

    function noDispSharkBtns() {
        let typeText = document.querySelector("#typeText");
        let speciesText = document.querySelector("#speciesText");
        sharkTypeButton.style.display = "none";
        sharkSpeciesButton.style.display = "none";
        typeText.style.display = "none";
        speciesText.style.display = "none";
    }

    function dispSharkContent() {
        let sharkText = document.querySelector("#sharkPage");
        let factText = document.querySelector("#factsPage");
        let bioText = document.querySelector("#biologyPage");
        let historyText = document.querySelector("#historyPage");
        sharkText.style.display = "block";
        factText.style.display = "none";
        bioText.style.display = "none";
        historyText.style.display = "none";
        dispSharkBtns();
    }

    function dispTypeSubCont() {
        let sharkTypeTxt = document.querySelector("#typeText");
        let sharkSpeciesTxt = document.querySelector("#speciesText");
        sharkTypeTxt.style.display = "block";
        sharkSpeciesTxt.style.display = "none";
    }

    function dispSpeciesSubCont() {
        let sharkTypeTxt = document.querySelector("#typeText");
        let sharkSpeciesTxt = document.querySelector("#speciesText");
        sharkTypeTxt.style.display = "none";
        sharkSpeciesTxt.style.display = "block";
    }

    function dispFactsContent() {
        let sharkText = document.querySelector("#sharkPage");
        let factText = document.querySelector("#factsPage");
        let bioText = document.querySelector("#biologyPage");
        let historyText = document.querySelector("#historyPage");
        sharkText.style.display = "none";
        factText.style.display = "block";
        bioText.style.display = "none";
        historyText.style.display = "none";
        noDispSharkBtns();
    }

    function dispBioContent() {
        let sharkText = document.querySelector("#sharkPage");
        let factText = document.querySelector("#factsPage");
        let bioText = document.querySelector("#biologyPage");
        let historyText = document.querySelector("#historyPage");
        sharkText.style.display = "none";
        factText.style.display = "none";
        bioText.style.display = "block";
        historyText.style.display = "none";
        noDispSharkBtns();
    }

    function dispHistoryContent() {
        let sharkText = document.querySelector("#sharkPage");
        let factText = document.querySelector("#factsPage");
        let bioText = document.querySelector("#biologyPage");
        let historyText = document.querySelector("#historyPage");
        sharkText.style.display = "none";
        factText.style.display = "none";
        bioText.style.display = "none";
        historyText.style.display = "block";
        noDispSharkBtns();
    }

    pageSharks.addEventListener("click", function() {
        dispSharkContent();
    });

    sharkTypeButton.addEventListener("click", function() {
        dispTypeSubCont();
    });

    sharkSpeciesButton.addEventListener("click", function() {
        dispSpeciesSubCont();
    });

    pageFacts.addEventListener("click", function() {
        dispFactsContent();
    });

    pageBio.addEventListener("click", function() {
        dispBioContent();
    });

    pageHistory.addEventListener("click", function() {
        dispHistoryContent();
    });
}

function factsQuiz() {
    const quizContainer = document.getElementById('quiz');
    const resultContainer = document.getElementById('result');
    const submitButton = document.getElementById('submit');
    const retryButton = document.getElementById('retry');
    const showAnswerButton = document.getElementById('showAnswer');

    let currentQuestion = 0;
    let score = 0;
    let incorrectAnswers = [];

    const quizData = [
        {
            question: "What is the largest species of shark currently living?",
            options: ["Great White Shark", "Hammerhead Shark", "Whale Shark", "Tiger Shark"],
            answer: "Whale Shark"
        },
        {
            question: "How do sharks differ from fish in terms of their skeletons?",
            options: ["Sharks have bony skeletons", "Sharks have cartilage skeletons", "Sharks have no skeletons", "Sharks have wooden skeletons"],
            answer: "Sharks have cartilage skeletons"
        },
        {
            question: "How do sharks detect prey in the water?",
            options: ["By sight only", "By echolocation", "By detecting electrical fields", "By taste"],
            answer: "By detecting electrical fields"
        },
        {
            question: "What is unique about the way sharks reproduce compared to other fish?",
            options: ["They lay eggs in nests", "They give live birth", "They clone themselves", "They reproduce through budding"],
            answer: "They give live birth"
        },
        {
            question: "What adaptation helps sharks maintain buoyancy in the water?",
            options: ["Swim bladders", "Hollow bones", "Large livers filled with oil", "Air sacs"],
            answer: "Large livers filled with oil"
        },
        {
            question: "How do some shark species rest without sinking?",
            options: ["By swimming continuously", "By inflating their swim bladders", "By lying on the ocean floor", "By attaching to rocks"],
            answer: "By swimming continuously"
        },
        {
            question: "What is the smallest species of shark?",
            options: ["Dwarf Lanternshark", "Pygmy Shark", "Spined Pygmy Shark", "Cookiecutter Shark"],
            answer: "Dwarf Lanternshark"
        },
        {
            question: "How do shark populations impact the health of coral reefs?",
            options: ["They have no impact", "They help maintain the balance of marine species", "They destroy coral reefs", "They increase algae growth"],
            answer: "They help maintain the balance of marine species"
        },
        {
            question: "What is the primary threat to shark populations worldwide?",
            options: ["Natural predators", "Disease", "Overfishing and habitat loss", "Climate change"],
            answer: "Overfishing and habitat loss"
        },
    ];

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function displayQuestion() {
        const questionData = quizData[currentQuestion];

        const questionElement = document.createElement('div');
        questionElement.className = 'question';
        questionElement.innerHTML = questionData.question;

        const optionsElement = document.createElement('div');
        optionsElement.className = 'options';

        const shuffledOptions = [...questionData.options];
        shuffleArray(shuffledOptions);

        for (let i = 0; i < shuffledOptions.length; i++) {
            const option = document.createElement('label');
            option.className = 'option';

            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'quiz';
            radio.value = shuffledOptions[i];

            const optionText = document.createTextNode(shuffledOptions[i]);

            option.appendChild(radio);
            option.appendChild(optionText);
            optionsElement.appendChild(option);
        }

        quizContainer.innerHTML = '';
        quizContainer.appendChild(questionElement);
        quizContainer.appendChild(optionsElement);
    }

    function checkAnswer() {
        const selectedOption = document.querySelector('input[name="quiz"]:checked');

        if (selectedOption) {
            const answer = selectedOption.value;
            if (answer === quizData[currentQuestion].answer){
                score++;
            } 
            else {
                incorrectAnswers.push({
                    question: quizData[currentQuestion].question,
                    incorrectAnswer: answer,
                    correctAnswer: quizData[currentQuestion].answer,
                });
            }

            currentQuestion++;
            selectedOption.checked = false;

            if (currentQuestion < quizData.length) {
            displayQuestion();
            } 
            else {
            displayResult();
            }
        }
    }

    function displayResult() {
        quizContainer.style.display = 'none';
        submitButton.style.display = 'none';
        retryButton.style.display = 'inline-block';
        showAnswerButton.style.display = 'inline-block';
        resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
    }

    function retryQuiz() {
        currentQuestion = 0;
        score = 0;
        incorrectAnswers = [];
        quizContainer.style.display = 'block';
        submitButton.style.display = 'inline-block';
        retryButton.style.display = 'none';
        showAnswerButton.style.display = 'none';
        resultContainer.innerHTML = '';
        displayQuestion();
    }

    function showAnswer() {
        quizContainer.style.display = 'none';
        submitButton.style.display = 'none';
        retryButton.style.display = 'inline-block';
        showAnswerButton.style.display = 'none';

        let incorrectAnswersHtml = '';

        for (let i = 0; i < incorrectAnswers.length; i++) {
            incorrectAnswersHtml += `
            <p>
                <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
                <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
                <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
            </p>
        `;
    }

    resultContainer.innerHTML = `
            <p>You scored ${score} out of ${quizData.length}!</p>
            <p>Incorrect Answers:</p>
            ${incorrectAnswersHtml}
        `;
    }

    submitButton.addEventListener('click', checkAnswer);
    retryButton.addEventListener('click', retryQuiz);
    showAnswerButton.addEventListener('click', showAnswer);

    displayQuestion();
}

cursorEffect();
pageChanger();
factsQuiz();
toggleDropdownVisibility();

// Run the function on page load
window.addEventListener("load", toggleDropdownVisibility);

// Run the function on window resize
window.addEventListener("resize", toggleDropdownVisibility);
