
// Define your variables to reference DOM elements
const startPage = document.getElementById('start-page');
const quizContainer = document.getElementById('quiz-container');
const teacherEmail = "emansoge@gmx.com";
// Quiz questions
const questions = [
    {
        question: "What is the comparative form of 'good'?",
        options: {
            A: "Gooder",
            B: "Better"
        },
        correctAnswer: "B",
        explanation: "The correct answer is B) Better. When comparing two things, we use the comparative form of adjectives. The comparative form of 'good' is 'better.'"
    },
    {
        question: "Which sentence is correct?",
        options: {
            A: "He don't like ice cream.",
            B: "He doesn't like ice cream."
        },
        correctAnswer: "B",
        explanation: "The correct answer is B) He doesn't like ice cream. When using the third person singular (he, she, it) in negative sentences, we use 'doesn't' with the base form of the verb."
    },
    {
        question: "Which word means 'to give up'?",
        options: {
            A: "Start",
            B: "Quit"
        },
        correctAnswer: "B",
        explanation: "The correct answer is B) Quit. 'Quit' means to stop doing something or to give up."
    },
    {
        question: "Which sentence is grammatically correct?",
        options: {
            A: "She have a dog.",
            B: "She has a dog."
        },
        correctAnswer: "B",
        explanation: "The correct answer is B) She has a dog. When using the third person singular (he, she, it) in present simple tense, we use 'has' with the base form of the verb."
    },
    {
        question: "Choose the correct sentence:",
        options: {
            A: "I have been to Paris last year.",
            B: "I went to Paris last year."
        },
        correctAnswer: "B",
        explanation: "The correct answer is B) I went to Paris last year. We use the past simple tense (went) to talk about a specific action that happened in the past."
    },
    {
        question: "Identify the correct meaning of the phrasal verb 'run into':",
        options: {
            A: "To enter a race quickly",
            B: "To meet someone unexpectedly"
        },
        correctAnswer: "B",
        explanation: "The correct answer is B) To meet someone unexpectedly. 'Run into' means to encounter someone or something by chance."
    },
    {
        question: "Choose the correct sentence:",
        options: {
            A: "The book is interesting, but I haven't finished it yet.",
            B: "The book is interesting, but I didn't finished it yet."
        },
        correctAnswer: "A",
        explanation: "The correct answer is A) The book is interesting, but I haven't finished it yet. When talking about an action that started in the past and continues to the present, we use the present perfect tense (haven't finished)."
    },
    {
        question: "Choose the correct sentence:",
        options: {
            A: "I have been working here since three years.",
            B: "I have been working here for three years."
        },
        correctAnswer: "B",
        explanation: "The correct answer is B) I have been working here for three years. When expressing the duration of an action that started in the past and continues to the present, we use 'for' followed by the duration."
    },
    {
        question: "Choose the correct sentence:",
        options: {
            A: "Yesterday, I have watched a movie with my friends.",
            B: "Yesterday, I watched a movie with my friends."
        },
        correctAnswer: "B",
        explanation: "The correct answer is B) Yesterday, I watched a movie with my friends. When talking about a specific action that happened in the past, we use the past simple tense (watched)."
    },
    {
        question: "Which sentence is grammatically correct?",
        options: {
            A: "He catched the train just in time.",
            B: "He caught the train just in time."
        },
        correctAnswer: "B",
        explanation: "The correct answer is B) He caught the train just in time. The past tense form of the irregular verb 'catch' is 'caught.'"
    },
    {
        question: "Choose the correct sentence:",
        options: {
            A: "They was at the party last night.",
            B: "They were at the party last night."
        },
        correctAnswer: "B",
        explanation: "The correct answer is B) They were at the party last night. 'Were' is used with plural subjects (like 'they') in the past tense."
    },
    {
        question: "Choose the correct sentence:",
        options: {
            A: "They were watching TV when the phone rings.",
            B: "They were watching TV when the phone rang."
        },
        correctAnswer: "B",
        explanation: "The correct answer is B) They were watching TV when the phone rang. In past continuous tense, the main action (watching TV) is in progress, and the interrupting action (phone rang) is in the simple past tense."
    }
];

// Define the bonus adjective vocabularies
const bonusAdjectives = [
    {
        term: "Sunny (Weather)",
        definition: "When the sun is shining brightly in the sky, we describe the weather as sunny. It means there are few or no clouds, and it's generally warm and bright outside. Example: 'It's a sunny day, perfect for a picnic in the park!'"
    },
    {
        term: "Colorful (Flowers)",
        definition: "When flowers have vibrant and varied colors, we describe them as colorful. It means they have different hues like red, yellow, purple, etc. Example: 'The garden is full of colorful flowers, making it a beautiful sight to behold.'"
    },
    {
        term: "Friendly (People)",
        definition: "When someone is easy to talk to, kind, and welcoming, we describe them as friendly. It means they are approachable and pleasant to be around. Example: 'Sarah is a very friendly person; she always greets everyone with a warm smile.'"
    },
    {
        term: "Cloudy (Weather)",
        definition: "When the sky is covered with clouds, and there is little or no sunshine, we describe the weather as cloudy. It means the sky appears gray or overcast. Example: 'It's a cloudy day today, so don't forget to bring an umbrella just in case it rains.'"
    },
    {
        term: "Fragrant (Flowers)",
        definition: "When flowers emit a pleasant smell or aroma, we describe them as fragrant. It means they have a sweet or flowery scent. Example: 'The jasmine flowers in the garden are so fragrant; you can smell them from afar.'"
    }
];

// Function to start the quiz
function startQuiz(event) {
    event.preventDefault(); // Prevent default form submission behavior
    const nameInput = document.getElementById('name');
    const playerName = nameInput.value.trim(); // Trim any leading or trailing spaces

    // Check if the player's name ends with "incluzio"
    if (playerName.toLowerCase().endsWith("incluzio")) {
        startPage.style.display = 'none'; // Hide the start page
        quizContainer.style.display = 'block'; // Show the quiz container
        displayQuestions(); // Display the quiz questions
    } else {
        alert("Please enter your name followed by 'incluzio.'"); // Otherwise, prompt the user to enter the correct name
    }
}

// Function to display quiz questions
function displayQuestions() {
    const quizContainer = document.getElementById('quiz-container');
    let quizHTML = '';

    questions.forEach((question, index) => {
        quizHTML += `<div class="question">
                        <p>${index + 1}. ${question.question}</p>
                        <div class="options" id="options${index}">`;

        for (const option in question.options) {
            quizHTML += `<label>
                            <input type="radio" name="question${index}" value="${option}" onclick="showExplanation(${index})">
                            ${option}) ${question.options[option]}
                        </label>`;
        }

        quizHTML += `</div>`;
        quizHTML += `<p class="explanation" id="explanation${index}" style="display: none;">Explanation: ${question.explanation}</p>`; // Hide explanations initially
        quizHTML += `</div>`;
    });

    quizHTML += `<button onclick="submitQuiz()">Submit Quiz</button>`;

    quizContainer.innerHTML = quizHTML;
}

// Function to toggle the display of explanations and disable options after an option is selected
function showExplanation(questionIndex) {
    const explanation = document.getElementById(`explanation${questionIndex}`);
    explanation.style.display = explanation.style.display === 'block' ? 'none' : 'block';

    // Disable options after an option is selected
    disableOptions(questionIndex);
}

// Function to submit quiz and calculate results
function submitQuiz() {
    const answers = [];
    let correctCount = 0;

    questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
            answers.push(selectedOption.value);
            if (selectedOption.value === question.correctAnswer) {
                correctCount++;
            }
            disableOptions(index); // Disable options after selection
        }
    });

    // Calculate percentage of correct answers
    const percentage = (correctCount / questions.length) * 100;

    // Display results
    displayResults(answers, percentage);
}

// Function to display quiz results
function displayResults(answers, percentage) {
    const quizContainer = document.getElementById('quiz-container');
    let resultHTML = '<h2>Quiz Results</h2>';

    questions.forEach((question, index) => {
        const isCorrect = answers[index] === question.correctAnswer;
        resultHTML += `<div class="result">
                        <p>${index + 1}. ${question.question}</p>
                        <p>Your Answer: ${answers[index]}</p>
                        <p>${isCorrect ? 'Correct!' : 'Incorrect'}</p>
                        <p>${isCorrect ? '' : question.explanation}</p>
                    </div>`;
    });

    // Display percentage of correct answers
    resultHTML += `<p>Your Score: ${percentage.toFixed(2)}%</p>`;

    // Display results and provide option to send results to teacher
    resultHTML += `<button onclick="sendResults()">Send Your Results to theTeacher</button>`;
    quizContainer.innerHTML = resultHTML;
}

// Function to toggle the display of explanations and disable options after an option is selected
function showExplanation(questionIndex) {
    const explanation = document.getElementById(`explanation${questionIndex}`);
    explanation.style.display = explanation.style.display === 'block' ? 'none' : 'block';

    // Disable all options after an option is selected
    disableOptions(questionIndex);
}

// Function to disable options after an option is selected
function disableOptions(questionIndex) {
    const options = document.getElementById(`options${questionIndex}`).querySelectorAll('input[type="radio"]');
    options.forEach(option => {
        option.disabled = true; // Disable options after an option is selected
    });
}

// Function to submit quiz and calculate results
function submitQuiz() {
    const answers = [];
    let correctCount = 0;

    questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
            answers.push(selectedOption.value);
            if (selectedOption.value === question.correctAnswer) {
                correctCount++;
            }
            disableOptions(index); // Disable options after selection
        }
    });

    // Calculate percentage of correct answers
    const percentage = (correctCount / questions.length) * 100;

    // Display results
    displayResults(answers, percentage);

    // Display bonus adjective vocabularies
    displayBonusAdjectives();
}

// Function to display bonus adjective vocabularies
function displayBonusAdjectives() {
    let html = '<h1>Bonus Adjective Vocabularies</h1>';

    bonusAdjectives.forEach(adjective => {
        html += `<div class="adjective">
                    <h2>${adjective.term}</h2>
                    <p>${adjective.definition}</p>
                </div>`;
    });

    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML += html;
}
// Display the quiz questions when the page loads
displayQuestions();


