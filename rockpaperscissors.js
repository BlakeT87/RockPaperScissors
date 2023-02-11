//function to randomly return rock, paper, or scissors
//randomly select int between 1-3
//assign int to rock/paper/scissors string
//log choice to console

//Play a round of rock/paper/scissors against the computer
//get player input for choice of rock/paper/scissors
//compare player input vs computer random choice
//determine winner vs loser
//output result

//Track result of round to determine winner at end of 5 rounds
//loop the function 5 times
//save the outcome at the end of each loop
//count the outcome for human
//count the outcome for computer
//compare count of human vs computer
//declare winner
let score = 0;
function playRound(){
    let computerChoice = Math.floor(Math.random() * 3)+1;
  function getComputerChoice(){
      if (computerChoice === 1){
          return("Rock")
      }else if (computerChoice === 2){
          return("Paper")
      }else if (computerChoice === 3){
          return("Scissors")
      }else{
          return("error")
      }
    }

    let playerChoice = prompt("Rock, Paper, or Scissors?");
    let playerChoiceLower = playerChoice.toLowerCase();
      if (playerChoiceLower == "rock" && computerChoice == 2){
          return("You lose! Paper beats Rock!");
          let score = score--
      }else if(playerChoiceLower == "scissors" && computerChoice == 1){
          return("You lose! Rock beats Scissors!")
          let score = score--
      }else if(playerChoiceLower == "paper" && computerChoice == 3){
          return("You lose! Scissors beats Paper!");
          let score = score--;
      }else if(playerChoiceLower == "rock" && computerChoice == 3){
          return("You Win!");
          let score = score++;
      }else if(playerChoiceLower == "paper" && computerChoice == 1){
          return("You Win!")
          let score = score++;
      }else if(playerChoiceLower == "scissors" && computerChoice ==2){
          return("You Win!");
          let score = score++;
      }else{
          return("Stalemate!")
      }
  }
  
    for (i=0; i<5; i++) {
      console.log(playRound())
    }

    if (score == Math.sign(-1)){
        console.log("sorry, you lose!")
    }else if(score == Math.sign(1)){
        console.log("you win!")
    }else if(score == score){
        console.log("it's a tie!")
    }else{
        console.log(error)
    }