import { setPlayers } from "./setPlayers";
import setBoardHoverClass from "./setBoardHoverClass";
import handleClick from "./handleClick";
import { linesPlayed } from "./checkForWin";
import { winningMessage } from "./endGame";

export default startGame = () => {

    setPlayers();

    for (const line of linesPlayed) {
        line.classList.remove("circle");
        line.classList.remove("x");
        line.removeEventListener("click", handleClick);
        line.addEventListener('click', handleClick, { once: true });
    }

    setBoardHoverClass();
    winningMessage.classList.add("hidden");
}