//function to randomly return rock, paper, or scissors
//randomly select int between 1-3
//assign int to rock/paper/scissors string
//log choice to console




//Play a round of rock/paper/scissors against the computer
//get player input for choice of rock/paper/scissors
//compare player input vs computer random choice
//determine winner vs loser
//output result


function playRound(){
    let computerChoice = Math.floor(Math.random() * 3)+1;
  function getComputerChoice(){
      if (computerChoice === 1){
          console.log("Rock")
      }else if (computerChoice === 2){
          console.log("Paper")
      }else if (computerChoice === 3){
          console.log("Scissors")
      }else{
          console.log("error")
      }
  }
  
    let playerChoice = prompt("Rock, Paper, or Scissors?");
    let playerChoiceLower = playerChoice.toLowerCase();
      if (playerChoiceLower == "rock" && computerChoice == 2){
          return("You lose! Paper beats Rock!")
      }else if(playerChoiceLower == "scissors" && computerChoice == 1){
          return("You lose! Rock beats Scissors!")
      }else if(playerChoiceLower == "paper" && computerChoice == 3){
          return("You lose! Scissors beats Paper!")
      }else if(playerChoiceLower == "rock" && computerChoice == 3){
          return("You Win!")
      }else if(playerChoiceLower == "paper" && computerChoice == 1){
          return("You Win!")
      }else if(playerChoiceLower == "scissors" && computerChoice ==2){
          return("You Win!")
      }else{
          return("Stalemate!")
      }
  }
  
    for (i=0; i<5; i++) {
      console.log(playRound())
    }