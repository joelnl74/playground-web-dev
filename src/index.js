const choices = [
	"rock",
	"paper",
	"scissors",
]

let playerWins = 0;
let enemyWins = 0;

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
        return "draw"
    }

    if (player === "scissors" && computer === "paper"
    || player === "paper" && computer === "rock"
    || player === "rock" && computer === "scissors")
    {
        playerWins++;

        return "player wins"
    }

    enemyWins++;

    return "enemey wins";
}

function checkGame()
{
    if (playerWins === enemyWins)
    {
        return "draw";
    }

    return playerWins > enemyWins ? "player wins" : "enemy wins";
}

function game()
{
    for (let i = 0; i < 5; i++)
    {
        const input = prompt("rock, paper, scissors");

        if (choices.includes(input) === false)
        {
            i--;

            console.log("Invalid input");

            continue;
        }

        const playerSelection = input.toLowerCase();
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        console.log(result);
    }

    console.log(checkGame());
}

game();