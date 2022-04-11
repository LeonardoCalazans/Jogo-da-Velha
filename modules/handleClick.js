import { swapTurn, isCircleTurn } from "./swapTurn";
import placeMark from "./placeMark";
import checkEndGame from "./checkEndGame";


export default handleClick = (event) => {
    const line = event.target;
    const classToAdd = isCircleTurn ? "circle" : "x";

    placeMark(line, classToAdd);

    checkEndGame(classToAdd);

    swapTurn();
}