import { winners, draws } from "./endGame";

const createDataCells = (cell) => {
    const td = document.createElement('td');
    td.innerText = `${cell}`;
}

export default showRecords = () => {
    const allWinners = document.getElementById('winners');
    const allDraws = document.getElementById('draws');

    allWinners.appendChild(createDataCells(winners));
    allDraws.appendChild(createDataCells(draws.length));
}