const winners = localStorage.getItem('winners');
const draws = localStorage.getItem('draws');

const createDataCells = (cells) => {
    const td = document.createElement('td');

    if(cells.length > 0) {
        for (const cell of cells) {
            td.innerText = `${cell}`;
        }
    } else {
        td.innerText = `${cells}`;
    }
    return td;
}

const showRecords = () => {
    const allWinners = document.getElementById('winners');
    const allDraws = document.getElementById('draws');

    allWinners.appendChild(createDataCells(winners));
    allDraws.appendChild(createDataCells(draws));
}

showRecords();
