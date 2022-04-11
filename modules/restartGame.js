import { players } from "./buttonPlay";
import { winningMessage } from "./endGame";

export default restartGame = () => {
    const gaming = document.getElementById('gameplay');
    const login = document.querySelector('.login');

    players.splice(0, players.length);

    login.classList.remove('hidden');
    gaming.classList.add('hidden');
    winningMessage.classList.add("hidden");
    window.location.reload();
}