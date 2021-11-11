const backPlayer0 = document.querySelector('.player--0')
const backPlayer1 = document.querySelector('.player--1')
const ButtonNewGame = document.querySelector('.btn.btn--new')
const ButtonRoll = document.querySelector('.btn.btn--roll')
const ButtonHold = document.querySelector('.btn.btn--hold')
const dice = document.querySelector('.dice')
const player0scoreHTML = document.querySelector('#score--0')
const player0currentscore = document.querySelector('#current--0')
const player1scoreHTML = document.querySelector('#score--1')
const player1currentscore = document.querySelector('#current--1')


    let scores, activePlayer, currentScore, playing;

    const init = () => {
    
    scores = [0, 0]
    activePlayer = 0
    currentScore = 0
    playing = true;

    document.querySelector('.player--0').classList.remove('player--winner')
    document.querySelector('.player--1').classList.remove('player--winner')
    backPlayer0.classList.remove('player--active')
    backPlayer1.classList.remove('player--active')
    backPlayer0.classList.add('player--active')
    dice.classList.add('hidden')

    player0scoreHTML.textContent = 0
    player1scoreHTML.textContent = 0
    player0currentscore.textContent = 0
    player1currentscore.textContent = 0

}

window.onload = init;

const switchPlayer = () => {  
    activePlayer = activePlayer === 0 ? 1 : 0
    currentScore = 0
    backPlayer0.classList.toggle('player--active')
    backPlayer1.classList.toggle('player--active')
}

const diceRandom = () => {
    
    if(playing){

    dice.classList.remove('hidden')
    const diceNumber = Math.trunc(Math.random() * 6) + 1
    dice.src = `images/dice-${diceNumber}.png`

    if(diceNumber === 1){
    
    document.querySelector(`#current--${activePlayer}`).textContent = 0
    switchPlayer()

    } else {
    
    currentScore += diceNumber
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore


    }

    } else {

    }
}


function addScore(){

    if(playing){

    scores[activePlayer] += currentScore
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer]

    if(scores[activePlayer] > 20){

        playing = false;
        dice.classList.add('hidden')
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')


    } else {

        switchPlayer()

    }

    } else {

    }
}

ButtonHold.addEventListener('click', addScore)
ButtonRoll.addEventListener('click', diceRandom)
ButtonNewGame.addEventListener('click', init)

