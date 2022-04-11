import { linesPlayed } from "./checkForWin";

export default checkForDraw = () => {
    return [...linesPlayed].every(line => {
        return line.classList.contains("circle") || line.classList.contains("x");
    });
}