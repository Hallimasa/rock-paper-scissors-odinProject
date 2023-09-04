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

function playRound(computerchoice,playerchoice,computerCriticalChoice,computerCrit) {
   
    if (computerCrit==false){
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
    } else if (computerCrit==true) {
        if (computerchoice === "Paper" && computerCriticalChoice == "Rock") {
            if (playerchoice.match(/rock/i)) {
                return "lose";
            } else if (playerchoice.match(/paper/i)) {
                return "tie";
            } else if (playerchoice.match(/scissors/i)) {
                return "lose";
            }
        } else if (computerchoice === "Paper" && computerCriticalChoice == "Scissors") {
            if (playerchoice.match(/rock/i)) {
                return "lose";
            } else if (playerchoice.match(/paper/i)) {
                return "lose";
            } else if (playerchoice.match(/scissors/i)) {
                return "tie";
            }
        } else if (computerchoice === "Rock" && computerCriticalChoice == "Paper") {
            if (playerchoice.match(/rock/i)) {
                return "lose";
            } else if (playerchoice.match(/paper/i)) {
                return "tie";
            } else if (playerchoice.match(/scissors/i)) {
                return "lose";
            }
        } else if (computerchoice === "Rock" && computerCriticalChoice == "Scissors") {
            if (playerchoice.match(/rock/i)) {
                return "tie";
            } else if (playerchoice.match(/paper/i)) {
                return "lose";
            } else if (playerchoice.match(/scissors/i)) {
                return "lose";
            }
        } else if (computerchoice === "Scissors" && computerCriticalChoice == "Rock") {
            if (playerchoice.match(/rock/i)) {
                return "tie";
            } else if (playerchoice.match(/paper/i)) {
                return "lose";
            } else if (playerchoice.match(/scissors/i)) {
                return "lose";
            }
        } else if (computerchoice === "Scissors" && computerCriticalChoice == "Paper") {
            if (playerchoice.match(/rock/i)) {
                return "lose";
            } else if (playerchoice.match(/paper/i)) {
                return "lose";
            } else if (playerchoice.match(/scissors/i)) {
                return "tie";
            }
        }   
    }
}        

function game(computerchoice,playerchoice,level) {

    let computerCrit = "";

    if (level == 2){
        computerCrit = (Math.random() <= 0.50 ? true : false);
    } else if (level == 1){
        computerCrit = (Math.random() <= 0.25 ? true : false);
    } else if (level == 0){
        computerCrit = (Math.random() <= 0.05 ? true : false);
    } 

    computerchoice = getComputerChoice();

    let computerCriticalChoice = getComputerChoice();

    while (computerCriticalChoice === computerchoice){
        computerCriticalChoice = getComputerChoice()
    };


    rounds.push(playRound(computerchoice,playerchoice,computerCriticalChoice,computerCrit));

    let iR = (rounds.length -1 );

    emojiP.push(playerchoice === 'Rock' ? '&#128074' : playerchoice === 'Paper' ? '&#128400': playerchoice === 'Scissors' ? '&#9996':'');
    
    if (computerCrit){
        emojiC.push((computerchoice === 'Rock' && computerCriticalChoice == 'Paper') ? '&#128074 + &#128400 <span class="textRed">critical move !</span>' :
                    (computerchoice === 'Rock' && computerCriticalChoice == 'Scissors') ? '&#128074 + &#9996 <span class="textRed">critical move !</span>' :
                    (computerchoice === 'Paper' && computerCriticalChoice == 'Rock') ? '&#128400 + &#128074 <span class="textRed">critical move !</span>' : 
                    (computerchoice === 'Paper' && computerCriticalChoice == 'Scissors') ? '&#128400 + &#9996 <span class="textRed">critical move !</span>' :
                    (computerchoice === 'Scissors' && computerCriticalChoice == 'Rock') ? '&#9996 + &#128074 <span class="textRed">critical move !</span>' :
                    (computerchoice === 'Scissors' && computerCriticalChoice == 'Paper') ? '&#9996 + &#128400 <span class="textRed">critical move !</span>' :
        computerchoice === 'Paper' ? '&#128400': computerchoice === 'Scissors' ? '&#9996':'');
    } else {
        emojiC.push(computerchoice === 'Rock' ? '&#128074' : computerchoice === 'Paper' ? '&#128400': computerchoice === 'Scissors' ? '&#9996':'');
    };

    document.getElementById("textActions").classList.replace("invisible","visible");
    if (iR == 0){
        document.getElementById("round1").innerHTML = `${emojiP[iR]} - Round ${iR+1} - ${rounds[iR]} - ${emojiC[iR]}`;
        document.getElementById("round1").classList.add(`${rounds[iR]}`);
        document.getElementById("mainTextId").innerHTML = "Round 2 choose your move !";
    } else if (iR == 1){
        document.getElementById("round2").innerHTML = `${emojiP[iR]} - Round ${iR+1} -  ${rounds[iR]} - ${emojiC[iR]}`;
        document.getElementById("round2").classList.add(`${rounds[iR]}`);
        document.getElementById("mainTextId").innerHTML = "Round 3 choose your move !";
    } else if (iR == 2){
        document.getElementById("round3").innerHTML = `${emojiP[iR]} - Round ${iR+1} -  ${rounds[iR]} - ${emojiC[iR]}`;
        document.getElementById("round3").classList.add(`${rounds[iR]}`);
        document.getElementById("mainTextId").innerHTML = "Round 4 choose your move !";
    } else if (iR == 3){
        document.getElementById("round4").innerHTML = `${emojiP[iR]} - Round ${iR+1} -  ${rounds[iR]} - ${emojiC[iR]}`;
        document.getElementById("round4").classList.add(`${rounds[iR]}`);
        document.getElementById("mainTextId").innerHTML = "Round 5 choose your move !";
    } else if (iR >= 4){
        document.getElementById("round5").innerHTML = `${emojiP[iR]} - Round ${iR+1} -  ${rounds[iR]} - ${emojiC[iR]}`;
        document.getElementById("round5").classList.add(`${rounds[iR]}`);
        document.getElementById("mainTextId").classList.replace("visible","invisible");
        endGame(rounds,results);
    };

};

function endGame(rounds,results){

    rounds.forEach(element => {
        results[element] = (results[element] || 0) +1;
    });

    if (results["lose"] == undefined ) {
        results["lose"] = 0;
    };
    if (results["win"] == undefined ){
        results["win"] = 0;
    };
    if (results["tie"] == undefined ){
        results["tie"] = 0;
    };


    if ( (results["lose"] >= 3 ) || (results["lose"] > results["win"])  ) {
        document.getElementById("finalResults").innerHTML = 'L O S E';
    } else if ( (results["win"] >= 3 ) || (results["win"] > results["lose"])  ) {
        document.getElementById("finalResults").innerHTML = 'W I N';
    } else {
        document.getElementById("finalResults").innerHTML = 'T I E';
    };

    document.getElementById("buttonActions").classList.replace("visible","invisible");
    document.getElementById("buttonReplay").classList.replace("invisible","visible");
}

function selectDifficult(difficultyChoice){
    document.getElementById("buttonDifficulty").classList.replace("visible","invisible");
    document.getElementById("buttonActions").classList.replace("invisible","visible");
    document.getElementById("textActions").classList.replace("invisible","visible");
    document.getElementById("playersId").classList.replace("invisible","visible");
    document.getElementById("footerCriticalInfo").classList.replace("visible","invisible");
    document.getElementById("mainTextId").innerHTML = "Round 1 choose your move!";

    if (difficulty !== undefined){
        difficulty.push(difficultyChoice);
    }
}

function playButton(){
    document.getElementById("buttonPlay").classList.replace("visible","invisible");
    document.getElementById("buttonDifficulty").classList.replace("invisible","visible");
    document.getElementById("buttonReplay").classList.replace("visible","invisible");
    document.getElementById("mainTextId").classList.replace("invisible","visible");
    document.getElementById("footerCriticalInfo").classList.replace("invisible","visible");
}

const rounds = [];
const results = [];
const difficulty = [];
const emojiC = [];
const emojiP = [];


let computerchoice = "";
let playerchoice = "";