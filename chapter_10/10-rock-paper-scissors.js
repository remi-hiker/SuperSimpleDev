let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};
//We have to use let as there will be reassignment to 0,0,0 everytime we reset.

updateScoreElement();
/*
if (!score) {
// !score is the same as score === null
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    }
}
*/
function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'Scissors') {
    
        if (computerMove === 'Rock') {
            result = 'You lose.';}
        
        else if (computerMove === 'Paper') {
            result = 'You Win.';}
        
        else if (computerMove === 'Scissors') {
            result = 'Tie.';}

        //alert(`You picked ${playerMove}. The computer picked ${computerMove}. ${result}`)
    
    } else if (playerMove === 'Paper') {

        if (computerMove === 'Rock') {
            result = 'You Win.';}
        else if (computerMove === 'Paper') {
            result = 'Tie.';}
        else if (computerMove === 'Scissors') {
            result = 'You lose.';}

        //alert(`You picked ${playerMove}. The computer picked ${computerMove}. ${result}`)
    
    } else if (playerMove === 'Rock') {
        
        if (computerMove === 'Rock') {
            result = 'Tie.';}
        else if (computerMove === 'Paper') {
            result = 'You lose.';}
        else if (computerMove === 'Scissors') {
            result = 'You Win.';}
    }

    if (result === 'You Win.') {
        score.wins += 1;
    } 
    else if (result === 'You lose.') {
        score.losses += 1;
    }
    else if (result === 'Tie.') {
        score.ties += 1;
    }
//localStorage only supports strings
localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();


document.querySelector('.js-result')
    .innerHTML = `${result}`;


document.querySelector('.js-moves')
    .innerHTML = `Your move: ${playerMove}, Computer's move: ${computerMove}`;

    //alert(`You picked ${playerMove}. The computer picked ${computerMove}. ${result}
    //Wins: ${score.wins}, Losses: ${score.losses}, Ties ${score.ties}`) 

}

function updateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties ${score.ties}`;
}

function pickComputerMove() {
    
    const randomnumber = Math.random();

    let computerMove = '';


    if (randomnumber >= 0 && randomnumber < 1/3) {
    computerMove ='Rock';}
    
    else if (randomnumber >= 1/3 && randomnumber < 2/3) {
    computerMove ='Paper';}
    
    else if (randomnumber >= 2/3 && randomnumber < 1) {
    computerMove ='Scissors';}

    return computerMove;
}