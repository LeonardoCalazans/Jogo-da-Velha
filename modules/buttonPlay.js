const buttonPlay = document.querySelector('.button-play');
const gaming = document.getElementById('gameplay');
const login = document.querySelector('.login');

export default function buttonPlayNow() {
    buttonPlay.addEventListener('click', () => {
        if (onePlayer.value !== '' && twoPlayer.value !== '') {
            setTimeout(() => {
                login.classList.add('hidden');
                gaming.classList.remove('hidden');
            }, 1000);
        }
    })
}
