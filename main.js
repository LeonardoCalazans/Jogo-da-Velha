import { 
    buttonPlayNow,
    players
 } from "./modules/buttonPlay.js";
/*
PONTOS DA AV1:    
    JOGO SÓ PODE COMEÇAR QUANDO O NOME DE AMBOS JOGADORES FOREM INFORMADOS
    O BOTAO PARA JOGAR AO ESTAR INATIVADO DEVE APRESENTAR OUTRA ESTILIZAÇÃO
    APOS INICIAR AS PARTIDAS DO MELHOR DE TRES, OS NOMES NAO PODEM SER ALTERADOS

    
    O MELHOR DE TRES CONSISTE EM 3 VITORIAS DE UM MESMO JOGADOR
    DEVE SER IMPLEMENTADO UM MECANISMO PARA RESETAR O JOGO AO FINAL DO MELHOR DE TRES
    AS CORES DO (X) E (O) DEVEM SER DIFERENTES
    AO FINAL DO MELHOR DE TRES O VENCEDOR DEVERÁ TER O NOME APRESENTADO NO LUGAR DO JOGO DA VELHA
    DEVERÁ SER ATUALIZADO O HISTÓRICO DAS PARTIDAS 
*/
const linesPlayed = document.querySelectorAll(".line-played");
const board = document.getElementById("board");
const winningMessageTextElement = document.querySelector(".winning-message-text");
const winningMessage = document.querySelector(".winning-message");
const restartButton = document.querySelector("#buttonPlayAgain");
const revangeButton = document.querySelector("#buttonRevanche");
const recordsButton = document.querySelector("#buttonRecords");

let isCircleTurn;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const checkForWin = (currentPlayer) => {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return linesPlayed[index].classList.contains(currentPlayer);
        });
    });
};

const placeMark = (line, classToAdd) => {
    line.classList.add(classToAdd);
}

const setBoardHoverClass = () => {
    board.classList.remove("circle");
    board.classList.remove("x");

    if(isCircleTurn) {
        board.classList.add("circle");
    } else {
        board.classList.add("x");
    }
}

const swapTurn = () => {
    isCircleTurn = !isCircleTurn;
    setBoardHoverClass();
}

const endGame = (isDraw) => {
    const [ player1, player2 ] = players;
    
    if(isDraw) {
        winningMessageTextElement.innerText = "Deu velha!";
    } else {
        winningMessageTextElement.innerText = `O jogador ${isCircleTurn ? player1 : player2} venceu!`;
    }

    winningMessage.classList.remove("hidden");
}

const checkEndGame = (currentPlayer) => {
    const isWin = checkForWin(currentPlayer);
    if(isWin) {
        endGame(false);
    } else {
        const isDraw = checkForDraw();
        if(isDraw) {
            endGame(true);
        }
    }

}

const checkForDraw = () => {
    return [...linesPlayed].every(line => {
        return line.classList.contains("circle") || line.classList.contains("x");
    });
}

const handleClick = (event) => {
    const line = event.target;
    const classToAdd = isCircleTurn ? "circle" : "x";

    placeMark(line, classToAdd);

    checkEndGame(classToAdd);

    swapTurn();
}

function startGame() {
    const [ player1, player2 ] = players;
    const player1Element = document.querySelector("#playerOne");
    const player2Element = document.querySelector("#playerTwo");

    player1Element.children[0].innerText = player1;
    player2Element.children[0].innerText = player2;

    for (const line of linesPlayed) {
        line.classList.remove("circle");
        line.classList.remove("x");
        line.removeEventListener("click", handleClick);
        line.addEventListener('click', handleClick, { once: true });
    }

    setBoardHoverClass();
    winningMessage.classList.add("hidden");
}

const restartGame = () => {
    const gaming = document.getElementById('gameplay');
    const login = document.querySelector('.login');

    players.splice(0, players.length);

    login.classList.remove('hidden');
    gaming.classList.add('hidden');
    winningMessage.classList.add("hidden");
}

buttonPlayNow(startGame);
restartButton.addEventListener('click', restartGame);
revangeButton.addEventListener('click', startGame);
recordsButton.addEventListener('click', () => {
    window.location.href = 'records.html';
});






