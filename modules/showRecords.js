import { winners, draws } from "./endGame";

export default showRecords = () => {
    const allWinners = document.getElementById('winners');
    const allDraws = document.getElementById('draws');

    allWinners.appendChild(createDataCells(winners));
    allDraws.appendChild(createDataCells(draws.length));
}