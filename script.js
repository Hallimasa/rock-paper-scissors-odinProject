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
                soundLostMatch.play();
                return "lose";
            } else if (playerchoice.match(/paper/i)) {
                soundTieMatch.play();
                return "tie";
            } else if (playerchoice.match(/scissors/i)) {
                soundWonMatch.play();
                return "win";
            }
        } else if (computerchoice === "Rock") {
            if (playerchoice.match(/rock/i)) {
                soundTieMatch.play();
                return "tie";
            } else if (playerchoice.match(/paper/i)) {
                soundWonMatch.play();
                return "win";
            } else if (playerchoice.match(/scissors/i)) {
                soundLostMatch.play();
                return "lose";
            }
        } else if (computerchoice === "Scissors") {
            if (playerchoice.match(/rock/i)) {
                soundWonMatch.play();
                return "win";
            } else if (playerchoice.match(/paper/i)) {
                soundLostMatch.play();
                return "lose";
            } else if (playerchoice.match(/scissors/i)) {
                soundTieMatch.play();
                return "tie";
            }
        }
    } else if (computerCrit==true) {
        if (computerchoice === "Paper" && computerCriticalChoice == "Rock") {
            if (playerchoice.match(/rock/i)) {
                soundLostMatch.play();
                return "lose";
            } else if (playerchoice.match(/paper/i)) {
                soundTieMatch.play();
                return "tie";
            } else if (playerchoice.match(/scissors/i)) {
                soundLostMatch.play();
                return "lose";
            }
        } else if (computerchoice === "Paper" && computerCriticalChoice == "Scissors") {
            if (playerchoice.match(/rock/i)) {
                soundLostMatch.play();
                return "lose";
            } else if (playerchoice.match(/paper/i)) {
                soundLostMatch.play();
                return "lose";
            } else if (playerchoice.match(/scissors/i)) {
                soundTieMatch.play();
                return "tie";
            }
        } else if (computerchoice === "Rock" && computerCriticalChoice == "Paper") {
            if (playerchoice.match(/rock/i)) {
                soundLostMatch.play();
                return "lose";
            } else if (playerchoice.match(/paper/i)) {
                soundTieMatch.play();
                return "tie";
            } else if (playerchoice.match(/scissors/i)) {
                soundLostMatch.play();
                return "lose";
            }
        } else if (computerchoice === "Rock" && computerCriticalChoice == "Scissors") {
            if (playerchoice.match(/rock/i)) {
                soundTieMatch.play();
                return "tie";
            } else if (playerchoice.match(/paper/i)) {
                soundLostMatch.play();
                return "lose";
            } else if (playerchoice.match(/scissors/i)) {
                soundLostMatch.play();
                return "lose";
            }
        } else if (computerchoice === "Scissors" && computerCriticalChoice == "Rock") {
            if (playerchoice.match(/rock/i)) {
                soundTieMatch.play();
                return "tie";
            } else if (playerchoice.match(/paper/i)) {
                soundLostMatch.play();
                return "lose";
            } else if (playerchoice.match(/scissors/i)) {
                soundLostMatch.play();
                return "lose";
            }
        } else if (computerchoice === "Scissors" && computerCriticalChoice == "Paper") {
            if (playerchoice.match(/rock/i)) {
                soundLostMatch.play();
                return "lose";
            } else if (playerchoice.match(/paper/i)) {
                soundLostMatch.play();
                return "lose";
            } else if (playerchoice.match(/scissors/i)) {
                soundTieMatch.play();
                return "tie";
            }
        }   
    }
}        

function game(computerchoice,playerchoice,level) {

    let computerCrit = "";

    if (level == 3){
        computerCrit = (Math.random() <= 0.75 ? true : false);
    } else if (level == 2){
        computerCrit = (Math.random() <= 0.30 ? true : false);
    } else if (level == 1){
        computerCrit = (Math.random() <= 0.15 ? true : false);
    } else if (level == 0){
        computerCrit = false;
    };

    computerchoice = getComputerChoice();

    let computerCriticalChoice = getComputerChoice();

    while (computerCriticalChoice === computerchoice){
        computerCriticalChoice = getComputerChoice()
    };
    
    rounds.push(playRound(computerchoice,playerchoice,computerCriticalChoice,computerCrit));

    let iR = (rounds.length -1 );

    emojiP.push(playerchoice === 'Rock' ? '&#128100 &#128074' : playerchoice === 'Paper' ? '&#128100 &#128400': playerchoice === 'Scissors' ? '&#128100 &#9996':'');
    
    if (computerCrit){
        emojiC.push((computerchoice === 'Rock' && computerCriticalChoice == 'Paper') ? '&#128074 &#129302 &#128400 <span class="textRed"></span>' :
                    (computerchoice === 'Rock' && computerCriticalChoice == 'Scissors') ? '&#128074 &#129302 &#9996 <span class="textRed"></span>' :
                    (computerchoice === 'Paper' && computerCriticalChoice == 'Rock') ? '&#128400 &#129302 &#128074 <span class="textRed"></span>' : 
                    (computerchoice === 'Paper' && computerCriticalChoice == 'Scissors') ? '&#128400 &#129302 &#9996 <span class="textRed"></span>' :
                    (computerchoice === 'Scissors' && computerCriticalChoice == 'Rock') ? '&#9996 &#129302 &#128074 <span class="textRed"></span>' :
                    (computerchoice === 'Scissors' && computerCriticalChoice == 'Paper') ? '&#9996 &#129302 &#128400 <span class="textRed"></span>' :
        computerchoice === 'Paper' ? '&#128400': computerchoice === 'Scissors' ? '&#9996':'');
    } else {
        emojiC.push(computerchoice === 'Rock' ? '&#128074 &#129302' : computerchoice === 'Paper' ? '&#128400 &#129302': computerchoice === 'Scissors' ? '&#9996 &#129302':'');
    };

    document.getElementById("textActions").classList.replace("invisible","visible");
    if (iR == 0){
        document.getElementById("round1").innerHTML = `${emojiP[iR]} - Round ${iR+1} - ${rounds[iR]} - ${emojiC[iR]}`;
        document.getElementById("round1").classList.add(`${rounds[iR]}`);
        document.getElementById("mainTextId").innerHTML = "Round 2 of 5 choose your move !";
    } else if (iR == 1){
        document.getElementById("round2").innerHTML = `${emojiP[iR]} - Round ${iR+1} -  ${rounds[iR]} - ${emojiC[iR]}`;
        document.getElementById("round2").classList.add(`${rounds[iR]}`);
        document.getElementById("mainTextId").innerHTML = "Round 3 o 5 choose your move !";
    } else if (iR == 2){
        document.getElementById("round3").innerHTML = `${emojiP[iR]} - Round ${iR+1} -  ${rounds[iR]} - ${emojiC[iR]}`;
        document.getElementById("round3").classList.add(`${rounds[iR]}`);
        document.getElementById("mainTextId").innerHTML = "Round 4 of 5 choose your move !";
        if ((rounds.filter(filterGameWin).length) == 3 || (rounds.filter(filterGameLose).length) == 3){
            soundTieMatch.pause();
            soundWonMatch.pause();
            soundLostMatch.pause();
            endGame(rounds,results);
        }
    } else if (iR == 3){
        document.getElementById("round4").innerHTML = `${emojiP[iR]} - Round ${iR+1} -  ${rounds[iR]} - ${emojiC[iR]}`;
        document.getElementById("round4").classList.add(`${rounds[iR]}`);
        document.getElementById("mainTextId").innerHTML = "Round 5 of 5 choose your move !";

        if (rounds.filter(filterGameWin).length == 3 || rounds.filter(filterGameLose).length == 3){
            soundTieMatch.pause();
            soundWonMatch.pause();
            soundLostMatch.pause();
            endGame(rounds,results);
        } else if (rounds.filter(filterGameTie).length == 2 && rounds.filter(filterGameWin).length == 2){
            soundTieMatch.pause();
            soundWonMatch.pause();
            soundLostMatch.pause();
            endGame(rounds,results);
        } else if (rounds.filter(filterGameTie).length == 2 && rounds.filter(filterGameLose).length == 2){
            soundTieMatch.pause();
            soundWonMatch.pause();
            soundLostMatch.pause();
            endGame(rounds,results);
        }
        
    } else if (iR >= 4){
        document.getElementById("round5").innerHTML = `${emojiP[iR]} - Round ${iR+1} -  ${rounds[iR]} - ${emojiC[iR]}`;
        document.getElementById("round5").classList.add(`${rounds[iR]}`);
        document.getElementById("mainTextId").classList.replace("visible","invisible");
        soundTieMatch.pause();
        soundWonMatch.pause();
        soundLostMatch.pause();
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
        soundLostGame.play();

    } else if ( (results["win"] >= 3 ) || (results["win"] > results["lose"])  ) {
        document.getElementById("finalResults").innerHTML = 'W I N';
        soundWonGame.play();

    } else {
        document.getElementById("finalResults").innerHTML = 'T I E';
        soundTieGame.play();

    };

    document.getElementById("buttonActions").classList.replace("visible","invisible");
    document.getElementById("buttonReplay").classList.replace("invisible","visible");
    document.getElementById("mainTextId").classList.replace("visible","invisible");
}

function selectDifficult(difficultyChoice){
    document.getElementById("buttonDifficulty").classList.replace("visible","invisible");
    document.getElementById("buttonActions").classList.replace("invisible","visible");
    document.getElementById("textActions").classList.replace("invisible","visible");
    document.getElementById("playersId").classList.replace("invisible","visible");
    document.getElementById("footerCriticalInfo").classList.replace("visible","invisible");
    soundClick.play();
    document.getElementById("mainTextId").innerHTML = "Round 1 of 5 choose your move!";

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
    soundClick.play();
}

function filterGameWin(value){
    if (value == "win"){
        return value
    }
}
function filterGameLose(value){
    if (value == "lose"){
        return value
    }
}
function filterGameTie(value){
    if (value == "tie"){
        return value
    }   
}

const rounds = [];
const results = [];
const difficulty = [];
const emojiC = [];
const emojiP = [];

const soundClick = document.getElementById('audioClick');
const soundTieMatch = document.getElementById('audioTieMatch');
const soundTieGame = document.getElementById('audioTieGame');
const soundWonMatch = document.getElementById('audioWonMatch');
const soundWonGame = document.getElementById('audioWonGame');
const soundLostMatch = document.getElementById('audioLostMatch');
const soundLostGame = document.getElementById('audioLostGame');



let computerchoice = "";
let playerchoice = "";