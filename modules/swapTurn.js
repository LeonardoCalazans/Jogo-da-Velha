import setBoardHoverClass from "./setBoardHoverClass";

let isCircleTurn;

const swapTurn = () => {
    isCircleTurn = !isCircleTurn;
    setBoardHoverClass();
}

export {
    isCircleTurn,
    swapTurn
}