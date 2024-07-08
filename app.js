// 1) Define any variables used to track the state of the game:
//    The players choice
//    The computers choice

let playerChoice;
let computerChoice;
let matchResult;
let resultMessage;




// 2) Define the required constants:
//    There are only 3 choices a user can make ("rock", "paper", "scissors")
//    We'll need a reference to a DOM element to display messages
//    The match result - win/lose/tie
const choices = [`rock`, `paper`, `scissors`];
const result = [`win`,  `lose`, `tie`];
//    A result message - display who won that round
const message = document.querySelector(`#result-display`);
// 3) Handle a player clicking a button
// 4) Handle generating random selections for the computer player
const buttons = document.querySelector(`main`); 

buttons.addEventListener(`click`, (event) => {
    if (choices.includes(event.target.id)){
    playerChoice =event.target.id;


    let rando = Math.floor(Math.random() * 3);
    computerChoice = choices[rando];

    console.log(playerChoice, computerChoice );
    compare();
    render();
}
    //Random Select 
});



// 5) Compare the player choice to the computer choice, and check for a winner
const compare = () => {
    if (playerChoice === computerChoice ){
        resultMessage = `you tied!`;
    
    }
    //scissors vs rock
    else if(playerChoice === choices[2] && computerChoice === choices[0]){
        resultMessage =`you lost!`;
    }
    //rock vs paper
    else if(playerChoice === choices[0] && computerChoice === choices[1]){
        resultMessage =`you lost`
    }
    //paper vs scissors
    else if(playerChoice === choices[1] && computerChoice === choices[2]){
        resultMessage = `you lost`;
    }
    // scissors vs paper 
    else if( playerChoice === choices[2] && computerChoice === choices[1]){
        resultMessage = `you win`;
    }
    //paper vs rock
    else if(playerChoice === choices[1] && computerChoice === choices[0]){
        resultMessage = `you win`;
    }
    //rock vs scissors
    else if( playerChoice === choices[0] && computerChoice === choices[2]){
        resultMessage = `you win`;
    }
    message.textContent = resultMessage;
};


  





// 6) Render a win/lose/tie message to the player 
//    Include both player and computer selections in the message
//    Clearly indicate who won
const render = () => {
    message.textContent = `You chose  ${playerChoice } and the computer chose ${computerChoice}. ${resultMessage}`;
};