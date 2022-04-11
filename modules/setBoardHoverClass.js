import { isCircleTurn } from "./swapTurn";

const board = document.getElementById("board");

export default setBoardHoverClass = () => {
    board.classList.remove("circle");
    board.classList.remove("x");

    if(isCircleTurn) {
        board.classList.add("circle");
    } else {
        board.classList.add("x");
    }
}