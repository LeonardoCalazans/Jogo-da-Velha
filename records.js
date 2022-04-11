import showRecords from './modules/showRecords.js';

const recordsButton = document.querySelector("#buttonRecords");

recordsButton.addEventListener('click', showRecords());
