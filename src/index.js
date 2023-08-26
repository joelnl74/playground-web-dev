const choices = [
	"rock",
	"paper",
	"scissors",
]

let buttons = [];
let statusText = Object;
let rounds = 0;
let playerWins = 0;
let enemyWins = 0;

function setup()
{
    statusText = document.getElementById("status");
    setupButtons();
}

function getComputerChoice()
{
    const randomValue = Math.floor(Math.random() * 3);
    
    return choices[randomValue];
}

function playRound(playerSelection, computerSelection) {
    return checkRound(playerSelection, computerSelection);
}

function checkRound(player, computer)
{
    if (player === computer)
    {
        statusText.innerText = "player choice: " + player + " computer choice: " + computer + " results in: " + "draw";

        return statusText.innerText;
    }

    if (player === "scissors" && computer === "paper"
    || player === "paper" && computer === "rock"
    || player === "rock" && computer === "scissors")
    {
        playerWins++;

        statusText.innerText = "player choice: " + player + "computer choice: " + computer + " results in: " + "player wins"

        return statusText.innerText
    }

    enemyWins++;
    
    statusText.innerText = "player choice: " + player + "computer choice: " + computer + " results in: " + "enemey wins"

    return statusText.innerText;
}

function setupButtons()
{
    buttons = document.getElementsByTagName("button");
    
    for (var i = 0; i < buttons.length; i++)
    {
        const button = buttons[i];

        button.addEventListener("click", () => {
            onButtonClick(button.innerText);
        })
    }
}

function onButtonClick(e)
{
    simulateRound(e);
}

function simulateRound(playerInput)
{
    const playerSelection = playerInput.toLowerCase();
    const computerSelection = getComputerChoice();
    
    playRound(playerSelection, computerSelection);
}

window.onload = setup;