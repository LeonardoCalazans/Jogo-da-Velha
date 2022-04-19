import { checkForWin } from "./checkForWin";
import checkForDraw from "./checkForDraw";
import { endGame } from "./endGame";

export default checkEndGame = (currentPlayer) => {
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