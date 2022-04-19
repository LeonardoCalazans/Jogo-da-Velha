import startGame from "./modules/startGame.js";
import restartGame from "./modules/restartGame.js";
import {
    buttonPlayNow,
} from "./modules/buttonPlay.js";
import setColors from "./modules/setColors.js";

setColors;

const restartButton = document.querySelector("#buttonPlayAgain");
const revangeButton = document.querySelector("#buttonRevanche");

buttonPlayNow(startGame);
restartButton.addEventListener('click', restartGame);
revangeButton.addEventListener('click', startGame);
