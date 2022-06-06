
/* generate rock paper or scissors*/

function computerPlay() {
    let i = Math.floor(Math.random() * 3);
    if (i == 0) {
        return 'Rock';
    } else if ( i == 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

/* decides who won from two paper scissors rock values*/

function playRound(playerSelection, computerSelection) {
    let upperPlayer = playerSelection.toUpperCase();
    let upperComputer = computerSelection.toUpperCase();

    if (upperPlayer == upperComputer) {
        return 'It\'s a tie';
    } else if (upperPlayer == 'ROCK' && upperComputer == 'SCISSORS' || upperPlayer == 'SCISSORS' && upperComputer == 'PAPER' || upperPlayer == 'PAPER' && upperComputer == 'ROCK') {    
        return 'You won!';
    } else {
        return 'You lost';
    }
}

/* plays a game of 5 rounds and decides who wins the game */

const play = document.querySelector('.play');
const buttons = document.querySelectorAll('.rps');
const round = document.querySelector('.round');
const playerText = document.querySelector('.player');
const computerText = document.querySelector('.computer');
const result = document.querySelector('.result');
const score = document.querySelector('.score');
const gameResult = document.querySelector('.gameResult');

function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    let i = 0;
    buttons.forEach((button) => {
        button.disabled = false;
    });
    round.textContent = 'Choose';
    gameResult.textContent = '';
    score.textContent = `You: ${playerPoints} - Computer: ${computerPoints}`;
    playerText.textContent = ``;
    computerText.textContent = ``;
    result.textContent = '';
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            i++;
            round.textContent = `Round ${i}!`;
            
            let player = button.textContent;
            let computer = computerPlay();
            playerText.textContent = `You chose ${player}`;
            computerText.textContent = `The computer chose ${computer}`;
            
            let roundResult = playRound(player, computer);
            result.textContent = roundResult;

            if (roundResult == 'You won!') {
                playerPoints++;
            } else if (roundResult == 'You lost') {
                computerPoints++;
            }

            score.textContent = `You: ${playerPoints} - Computer: ${computerPoints}`;

            if (i == 5) {
                buttons.forEach((button) => {
                    button.disabled = true;
                });
                round.textContent = 'Game over';
                

                
                if (playerPoints > computerPoints) {
                    gameResult.textContent = `You won the game!`;
                } else if (computerPoints > playerPoints) {
                    gameResult.textContent = 'The computer won the game';
                } else {
                    gameResult.textContent = 'This game is a tie';
                }
            };    
        });
    });

    
        
    
    
}
        
play.addEventListener('click', () => {
    game();
});
