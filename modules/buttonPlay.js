const buttonPlay = document.querySelector('.button-play');
const gaming = document.getElementById('gameplay');
const login = document.querySelector('.login');
const onePlayer = document.getElementById('onePlayer');
const twoPlayer = document.getElementById('twoPlayer');
const players = [];

function buttonPlayNow(startGame) {
    players.splice(0, players.length);
    buttonPlay.addEventListener('click', () => {
        if (onePlayer.value !== '' && twoPlayer.value !== '') {
            const player1 = onePlayer.value;
            const player2 = twoPlayer.value;
            players.push(player1, player2);
            setTimeout(() => {
                login.classList.add('hidden');
                gaming.classList.remove('hidden');
                startGame();
            }, 1000);
        }
    })
}

export {
    buttonPlayNow,
    players
}