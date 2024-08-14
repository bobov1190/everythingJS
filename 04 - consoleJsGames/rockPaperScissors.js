const readline = require("readline");

function playRockPaperScissors() {
  const moves = ["rock", "paper", "scissors"];
  const outcomes = {
    rock: { beats: "scissors", message: "You win!" },
    paper: { beats: "rock", message: "You win!" },
    scissors: { beats: "paper", message: "You win!" },
  };

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Choose your move (rock, paper, or scissors): ", (playerMove) => {
    const computerMove = moves[Math.floor(Math.random() * moves.length)];

    let result;
    if (playerMove === computerMove) {
      result = "It's a tie!";
    } else if (outcomes[playerMove].beats === computerMove) {
      result = "You win!";
    } else {
      result = "You lose!";
    }

    const message = `${result}\nYou chose ${playerMove}, the computer chose ${computerMove}.`;
    console.log(message);

    rl.close();
  });
}

playRockPaperScissors();
