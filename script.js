
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

let player = 'Rock';
console.log(playRound(player, computerPlay()));