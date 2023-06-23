function getComputerChoice() {
    const randomValue = Math.random();
    if (randomValue < 0.33) {
        return "Paper";
    } else if (randomValue >= 0.33 && randomValue < 0.66) {
        return "Rock";
    } else if (randomValue >= 0.66) {
        return "Scissors";
    }
}

function playRound(computerchoice,playerchoice) {
    if (computerchoice === "Paper") {
        if (playerchoice.match(/rock/i)) {
            return "lose";
        } else if (playerchoice.match(/paper/i)) {
            return "tie";
        } else if (playerchoice.match(/scissors/i)) {
            return "win";
        }
    } else if (computerchoice === "Rock") {
        if (playerchoice.match(/rock/i)) {
            return "tie";
        } else if (playerchoice.match(/paper/i)) {
            return "win";
        } else if (playerchoice.match(/scissors/i)) {
            return "lose";
        }
    } else if (computerchoice === "Scissors") {
        if (playerchoice.match(/rock/i)) {
            return "win";
        } else if (playerchoice.match(/paper/i)) {
            return "lose";
        } else if (playerchoice.match(/scissors/i)) {
            return "tie";
        }
    } 
}        

function game(computerchoice,playerchoice) {
    
    let rounds = [];
    let results = [];

    console.log("New game starting...");

    /* DOING 5 ROUNDS AND SAVING EACH RETUNS INSIDE rounds[] */
    for ( let i = 1; i <= 5; i++ ) {
        computerchoice = getComputerChoice();
        playerchoice = prompt("Choose Rock, Paper or Scissors: ","");
        rounds.push(playRound(computerchoice,playerchoice));
    }
    
    /* COUNTING EACH RESULT FOR EACH ROUND (5) */
    rounds.forEach(element => {
        results[element] = (results[element] || 0) +1;
    });

    /* CONVERTING UNDEFINED VALUES TO ZERO */

    if (results["lose"] == undefined ) {
        results["lose"] = 0;
    } else if (results["win"] == undefined ){
        results["win"] = 0;
    } else if (results["tie"] == undefined ){
        results["tie"] = 0;
    };

    /* LOG THE RESULTS FOR THE USER */
    if ( (results["lose"] >= 3 ) || (results["lose"] > results["win"])  ) {
        console.log(`LOSE!! You lose against computer ( Tie = ${results["tie"]} | Lose = ${results["lose"]} | Win = ${results["win"]} )`);
    } else if ( (results["win"] >= 3 ) || (results["win"] > results["lose"])  ) {
        console.log(`WIN!! You won against computer ( Tie = ${results["tie"]} | Lose = ${results["lose"]} | Win = ${results["win"]} )`);
    } else {
        console.log(`TIE!! You tie with computer ( Tie = ${results["tie"]} | Lose = ${results["lose"]} | Win = ${results["win"]} )`);
    };
}

let computerchoice = "";
let playerchoice = "";