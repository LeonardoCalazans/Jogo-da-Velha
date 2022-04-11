import { players } from "./buttonPlay";
import { winners } from "./endGame";

let pointsPlayer1 = 0;
let pointsPlayer2 = 0;

const setPlayers = () => {

    const [ player1, player2 ] = players;
    const player1Element = document.querySelector("#playerOne");
    const player2Element = document.querySelector("#playerTwo");
    
    player1Element.children[0].innerText = player1;
    player2Element.children[0].innerText = player2;
    
    pointsPlayer1 = 0;
    pointsPlayer2 = 0;

    if(pointsPlayer1 === 3 || pointsPlayer2 === 3) {
        winners.splice(0, winners.length);
    }

    winners.find(winner => {
        if(winner === player1) {
            pointsPlayer1 += 1;
            player1Element.children[1].innerText = `Placar: ${pointsPlayer1}`;
        } else if(winner === player2){
            pointsPlayer2 += 1;
            player2Element.children[1].innerText = `Placar: ${pointsPlayer2}`;
        }
    });
}

export {
    setPlayers,
    pointsPlayer1,
    pointsPlayer2
}