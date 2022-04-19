import {
    buttonPlayNow,
    players
} from "./modules/buttonPlay.js";
import setColors from "./modules/setColors.js";

setColors;

const linesPlayed = document.querySelectorAll(".line-played");
const board = document.getElementById("board");
const winningMessageTextElement = document.querySelector(".winning-message-text");
const winningMessage = document.querySelector(".winning-message");
const restartButton = document.querySelector("#buttonPlayAgain");
const revangeButton = document.querySelector("#buttonRevanche");
const recordsButton = document.querySelectorAll(".buttonRecords");

const winners = [];
let pointsPlayer1 = 0;
let pointsPlayer2 = 0;
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

    if (isCircleTurn) {
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
    const [player1, player2] = players;

    if (isDraw) {
        winningMessageTextElement.innerText = "Deu velha!";
    } else {
        if (isCircleTurn) {
            winningMessageTextElement.innerText = `${player1} venceu!`;
            pointsPlayer1 += 1;
            winners.push(player1);
        } else {
            winningMessageTextElement.innerText = `${player2} venceu!`;
            pointsPlayer2 += 1;
            winners.push(player2);
        }
    }

    if (pointsPlayer1 === 3) {
        revangeButton.classList.add('hidden');
        winningMessageTextElement.innerText = `O jogador ${player1} venceu 3 vezes!`;
        setWinners({ win: player1, lose: player2 })
        pointsPlayer1 = 0;
    }
    if (pointsPlayer2 === 3) {
        revangeButton.classList.add('hidden');
        winningMessageTextElement.innerText = `O jogador ${player2} venceu 3 vezes!`;
        setWinners({ win: player2, lose: player1 })
        pointsPlayer2 = 0;
    }

    winningMessage.classList.remove("hidden");
}

function setWinners(props) {
    let winner = localStorage.getItem('winners')
        ? JSON.parse(localStorage.getItem('winners'))
        : [];
    winner.push(props)
    localStorage.setItem("winners", JSON.stringify(winner));
}

const checkEndGame = (currentPlayer) => {
    const isWin = checkForWin(currentPlayer);
    if (isWin) {
        endGame(false);
    } else {
        const isDraw = checkForDraw();
        if (isDraw) {
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

const setPlayers = () => {

    const [player1, player2] = players;
    const player1Element = document.querySelector("#playerOne");
    const player2Element = document.querySelector("#playerTwo");

    player1Element.children[0].innerText = player1;
    player2Element.children[0].innerText = player2;

    if (pointsPlayer1 === 3 || pointsPlayer2 === 3) {
        winners.splice(0, winners.length);
    }

    winners.find(winner => {
        if (winner === player1) {
            player1Element.children[1].innerText = `Placar: ${pointsPlayer1}`;
        } else if (winner === player2) {
            player2Element.children[1].innerText = `Placar: ${pointsPlayer2}`;
        }
    });
}

function startGame() {
    const titleMD3 = document.getElementById('titleMD3');
    setPlayers();

    for (const line of linesPlayed) {
        line.classList.remove("circle");
        line.classList.remove("x");
        line.removeEventListener("click", handleClick);
        line.addEventListener('click', handleClick, { once: true });
    }

    setBoardHoverClass();
    titleMD3.classList.remove('hidden');
    winningMessage.classList.add("hidden");
}

const restartGame = () => {
    const gaming = document.getElementById('gameplay');
    const login = document.querySelector('.login');
    players.splice(0, players.length);

    login.classList.remove('hidden');
    gaming.classList.add('hidden');
    winningMessage.classList.add("hidden");
    window.location.reload();
}

buttonPlayNow(startGame);
restartButton.addEventListener('click', restartGame);
revangeButton.addEventListener('click', startGame);

recordsButton.forEach(index => {
    index.addEventListener('click', () => {
        window.location.href = 'records.html';
    })
});
