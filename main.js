import buttonPlayNow from "./modules/buttonPlay.js";
/*
PONTOS DA AV1:    
    JOGO SÓ PODE COMEÇAR QUANDO O NOME DE AMBOS JOGADORES FOREM INFORMADOS
    O BOTAO PARA JOGAR AO ESTAR INATIVADO DEVE APRESENTAR OUTRA ESTILIZAÇÃO
    APOS INICIAR AS PARTIDAS DO MELHOR DE TRES, OS NOMES NAO PODEM SER ALTERADOS

    
    O MELHOR DE TRES CONSISTE EM 3 VITORIAS DE UM MESMO JOGADOR
    DEVE SER IMPLEMENTADO UM MECANISMO PARA RESETAR O JOGO AO FINAL DO MELHOR DE TRES
    AS CORES DO (X) E (O) DEVEM SER DIFERENTES
    AO FINAL DO MELHOR DE TRES O VENCEDOR DEVERÁ TER O NOME APRESENTADO NO LUGAR DO JOGO DA VELHA
    DEVERÁ SER ATUALIZADO O HISTÓRICO DAS PARTIDAS 
*/
const onePlayer = document.getElementById('onePlayer');
const twoPlayer = document.getElementById('twoPlayer');

buttonPlayNow();
function comecar() {

    // EXEMPLO DE MANIPULACAO E RECUPERACAO DE DADOS DA DOM
    // let conteudo = document.getElementById("botao-iniciar");
    // console.log(conteudo.innerHTML)
    // conteudo.innerHTML = "Valendo!!!"

}




