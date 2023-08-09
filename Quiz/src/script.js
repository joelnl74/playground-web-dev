const startButton = document.getElementById('start-btn')
const questionContainer = document.getElementById('question-container')
const controls = document.getElementById('controls')
const questionElement = document.getElementById('question')
const answerElement = document.getElementById('answer-buttons')
const nextElement = document.getElementById('next-btn')

let shuffeldQuestions, currentQuestionIndex

const questions = [
    {
        question: 'Is web development fun?',
        answers: [
          { text: 'Kinda', correct: false },
          { text: 'YES!!!', correct: true },
          { text: 'Um no', correct: false },
          { text: 'IDK', correct: false }
        ]
      },
]

startButton.addEventListener('click', StartGame)
nextElement.addEventListener('click', () =>
{
    currentQuestionIndex++
    SetQuestion()
})

function StartGame() {
    startButton.classList.add('hide')
    questionContainer.classList.remove('hide')

    shuffeldQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0

    SetQuestion()
}

function SetQuestion() {
    ResetState()
    ShowQuestion(shuffeldQuestions[currentQuestionIndex])
}

function ShowQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')

        if (answer.correct) {
            button.dataset.correct = answer.correct
        }

        button.addEventListener('click', SelectAnswer)
        answerElement.appendChild(button)
    });
}

function ResetState() {
    nextElement.classList.add('hide')
    ClearStatusClass(document.body)

    while (answerElement.firstChild) {
        answerElement.removeChild(answerElement.firstChild)
    }
}

function SelectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;

    setStatusClass(document.body, correct)
    Array.from(answerElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

    if (shuffeldQuestions.length > currentQuestionIndex + 1)
    {
        nextElement.classList.remove('hide')
    }
    else
    {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    ClearStatusClass(element)

    if (correct)
    {
        element.classList.add('correct')
    }
    else
    {
        element.classList.add('wrong')
    }
}

function ClearStatusClass(element)
{
    element.classList.remove('correct')
    element.classList.remove('wrong')
}