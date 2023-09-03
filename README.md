# **Rock Paper Scissors Game**

## TEST BRANCH teste 2

This game was made for completing `Odin Project` curriculum, you can see the live page [here](https://hallimasa.github.io/rock-paper-scissors-odinProject/)

## Primary Objectives ( Assignment )

- Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play.

- Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

- Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

- Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

- Use prompt() to get input from the user.

## What I learn doing this project?

- Learn more about what is an **Array** and why only accepts number for indexes, and if you use strings as indexes they will be converted to an **Object**, and methods that work with **Arrays** will no longer work anymore. That's why I made a section inside of the code thats convert **undefined** values to **0**, because otherwise the 0 results will be show by **undefined**.

- First time using **for** loop inside JavaScript, was a bit confusing, I did'nt understand why I can't use:
```javascript
    for ( let i = 1; i = 5; i++ ) {}
```
But needed to use this:
```javascript
    for ( let i = 1; i <= 5; i++ ) {}
```

- Using **const** arrays outside the functions was doing some errors when running the code, so I changed them to **let**, seems to solve :D

- First time using **regex** for making playerSelection parameter case-insensitive, this tool is very powerful to filter strings!
```javascript
if (playerchoice.match(/rock/i)) {
    return "win";
}
```
