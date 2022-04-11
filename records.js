const record = document.querySelector('.win');
function getRecords() {
    const records = JSON.parse(localStorage.getItem('winners'));
    console.log(records)
    records.map(({ win, lose }, index) => {
        console.log(index)
        console.log(win)
        console.log(lose)
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