import setColors from "./modules/setColors.js";

setColors;

const record = document.querySelector('.win');
function getRecords() {
    const records = JSON.parse(localStorage.getItem('winners'));
    records.map(({ win, lose }, index) => {
        setTimeout(() => {
            record.innerHTML = record.innerHTML +
                `
                <tbody class="table-tbody">
                    <tr><td>${win}</td><td>${lose}</td></tr>
                </tbody>
                `
                ;
        }, 1000);
    });

}
getRecords();