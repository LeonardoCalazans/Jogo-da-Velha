import { 
    players
} from "./modules/buttonPlay.js";

import { pointsPlayer1, pointsPlayer2 } from "./setPlayers.js";

import { isCircleTurn } from "./swapTurn.js";

const winningMessageTextElement = document.querySelector(".winning-message-text");
const winningMessage = document.querySelector(".winning-message");
const revangeButton = document.querySelector("#buttonRevanche");
const winners = [];
const draws = [];

const endGame = (isDraw) => {
    const [ player1, player2 ] = players;
    
    if(isDraw) {
        winningMessageTextElement.innerText = "Deu velha!";
        draws.push(1);
    } else {
        isCircleTurn ? winners.push(player1) : winners.push(player2);
        winningMessageTextElement.innerText = `O jogador ${isCircleTurn ? player1 : player2} venceu!`;
    }

    if(pointsPlayer1 === 3 || pointsPlayer2 === 3) {
        revangeButton.classList.add('hidden');
    }

    winningMessage.classList.remove("hidden");
}

export {
    endGame,
    winners,
    draws,
    winningMessage
}