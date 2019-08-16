/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


// document.querySelector('#current-' + activePlayer).textContent = dice;

document.querySelector('.btn-roll').addEventListener('click', function() {
    // generate random number from 1-6
    dice = Math.floor(Math.random() * 6) + 1;

    //display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png'

    //updating the round score if role number is not equal to one(1)
    if(dice !== 1){
        //add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }  else {
        //next player
        nextPlayer()
    }

});


document.querySelector('.btn-hold').addEventListener('click', function(){
    //add current score to global score
    scores[activePlayer] += roundScore;

    //update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    //check if player won the game
    if(scores[activePlayer] >= 200) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!!!';
        document.querySelector('.dice').style.display = 'none';
    }  else{
        //next player
        nextPlayer();
    }

    //nextplayer
    // nextPlayer();

 
})

function nextPlayer() {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';

}