function getComputerChoice() {
    const randomValue = Math.random();
    /* console.log(randomValue); */
    if (randomValue < 0.33) {
        /* console.log("PC choose Paper"); */
        return "Paper";
    } else if (randomValue >= 0.33 && randomValue < 0.66) {
        /* console.log("PC choose Rock"); */
        return "Rock";
    } else if (randomValue >= 0.66) {
        /* console.log("PC choose Scissors"); */
        return "Scissors";
    }
}


function playRound(computerchoice,playerchoice) {
    if (computerchoice === "Paper") {
        if (playerchoice.match(/rock/i)) {
           /*  console.log("You Lose! Paper beats Rock."); */
            return "lose";
        } else if (playerchoice.match(/paper/i)) {
            /* console.log("Tie, both selected Paper."); */
            return "tie";
        } else if (playerchoice.match(/scissors/i)) {
            /* console.log("You Won!! Scissors beats Paper."); */
            return "win";
        }
    } else if (computerchoice === "Rock") {
        if (playerchoice.match(/rock/i)) {
            /* console.log("Tie, both selected Rock."); */
            return "tie";
        } else if (playerchoice.match(/paper/i)) {
            /* console.log("You Won!! Paper beats Rock."); */
            return "win";
        } else if (playerchoice.match(/scissors/i)) {
            /* console.log("You Lose! Rock beats Scissors."); */
            return "lose";
        }
    } else if (computerchoice === "Scissors") {
        if (playerchoice.match(/rock/i)) {
            /* console.log("You Won!! Rock beats Scissors."); */
            return "win";
        } else if (playerchoice.match(/paper/i)) {
            /* console.log("You Lose! Scissors beats Paper."); */
            return "lose";
        } else if (playerchoice.match(/scissors/i)) {
            /* console.log("Tie, both selected Scissors."); */
            return "tie";
        }
    } 
}        

function game(computerchoice,playerchoice) {
    
    let rounds = [];
    let results = ["win" = 0,"lose" = 0,"tie" = 0];

    console.log("New game starting...");
    for ( let i = 1; i <= 5; i++ ) {
        computerchoice = getComputerChoice();
        playerchoice = prompt("Choose Rock, Paper or Scissors: ","")
        rounds.push(playRound(computerchoice,playerchoice));
    }
        
    rounds.forEach(element => {
        results[element] = (results[element] || 0 ) +1;
    });

    if ( (results["lose"] == 3 ) || ( (results["lose"] >= results["tie"]) && (results["lose"] > results["win"]) )  ) {
        console.log(`LOSE!! You lose against computer ( Tie = ${results["tie"]} Lose = ${results["lose"]} Win = ${results["win"]} )`)
    } else if ( (results["win"] == 3 ) || ( (results["win"] >= results["tie"]) && (results["win"] > results["lose"]) )  ) {
        console.log(`WIN!! You won against computer ( Tie = ${results["tie"]} Lose = ${results["lose"]} Win = ${results["win"]} )`)
    } else {
        console.log(`TIE!! You tie with computer ( Tie = ${results["tie"]} Lose = ${results["lose"]} Win = ${results["win"]} )`)
    }
}

let computerchoice = "";
let playerchoice = "";