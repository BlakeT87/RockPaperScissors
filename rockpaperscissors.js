//Rock Paper Scissors
//set computerScore to 0
let computerScore = 0;

//set userScore to 0
let userScore = 0;

function playround(){
//Ask user to choose rock/paper/scissors
//Store the value as userChoice
let userChoice = prompt("Rock, Paper, or Scissors?");

//Ask computer to choose random between 1 and 3
let computerChoice = Math.floor(Math.random() * 3) + 1;
//Store 1-3 random value as computerChoice 1 = rock, 2 = paper, 3 = scissors

if (computerChoice === 1){
    computerChoice = "rock";
}else if (computerChoice === 2){
    computerChoice = "paper";
}else if (computerChoice === 3){
    computerChoice = "scissors";
}else{
    console.log("error - no computer choice");
}

//compare userChoice vs computerChoice
//if userChoice is rock and computerChoice is paper, add point to computerScore and log result
if (userChoice == "rock" && computerChoice == "paper"){
  console.log("Computer score:" + computerScore++);
  console.log("Player score:" + userScore);
  console.log("You lose! Paper beats rock!");
}
//if userChoice is paper and computerChoice is scissors, add point to computerScore and log result
if (userChoice == "paper" && computerChoice == "scissors"){
  console.log("Computer score:" + computerScore++);
  console.log("Player score:" + userScore);
  console.log("You lose! Scissors beats paper!");
}
//if userChoice is scissors and computerChoice is rock, add point to computerScore and log result
if (userChoice == "scissors" && computerChoice == "rock"){
  console.log("Computer score:" + computerScore++);
  console.log("Player score:" + userScore);
  console.log("You lose! Rock beats scissors!");
}
//if userChoice is rock and computerChoice is scissors, add point to userScore and log result
if (userChoice == "rock" && computerChoice == "scissors"){
  console.log("Computer score:" + computerScore);
  console.log("Player score:" + userScore++);
  console.log("You win! Rock beats scissors!");
}
//if userChoice is paper and computerChoice is rock, add point to userScore and log result
if (userChoice == "paper" && computerChoice == "rock"){
  console.log("Computer score:" + computerScore);
  console.log("Player score:" + userScore++);
  console.log("You win! Paper beats rock!");
}
//if userChoice is scissors and computerChoice is paper, add point to userScore and log result
if (userChoice == "scissors" && computerChoice == "paper"){
  console.log("Computer score:" + computerScore);
  console.log("Player score:" + userScore++);
  console.log("You win! Scissors beats paper!");
}
//if userChoice is equal to computerChoice, add no points, and log result as 'stalemate'
if (userChoice == computerChoice){
  console.log("Stalemate!")
}
}
//run loop until userScore OR computerScore = 5
while (userScore <= 5 && computerScore <= 5){
    if (userScore === 5) {
        alert("Great job! You win! Refresh the page to play again!");
    }else if (computerScore === 5) {
        alert("Sorry, you lose, refresh to try again!");
    }
    console.log(playround());
}