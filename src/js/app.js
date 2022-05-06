/*
|--------------------------------------------------------------------------
| VARIABLES...
|--------------------------------------------------------------------------
*/

let tether = { // Objeto. Representa a cerquilha...
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: ''
}
let playerTurn = ''; // Vez do jogador...
let warning = ''; // Mensagem do resultado...
let playing = false; // Saber se o jogo ta rolando ou não...

/*
|--------------------------------------------------------------------------
| FUNCTIONS...
|--------------------------------------------------------------------------
*/

// Função que marca a jogada...
const handleTheterItemClick = (event) => {
    let item = event.target.getAttribute('data-item'); // Seleciona o valor do atributo data-item do elemento clicado.

    if (playing && tether[item] === '') { // Verifica se o item está vazio.
        tether[item] = playerTurn; // Se estiver vazio atribui a ele o valor do player atual.

        handleRenderTether(); // Chama a função para escrever a jogada na tela.
        handleTogglePlayer(); // Chama a função que troca o player.
    }
}

// Função que renderiza as informações no painel...
const handleRenderInfos = () => {
    document.querySelector('.turn__').innerHTML = playerTurn; // Mostra o valor de qual player é a vez.
    document.querySelector('.result__').innerHTML = warning; // Mostra o valor do resultado da partida.
}

// Função que reseta a partida...
const handleReset = () => {
    warning = ''; // LImpa o resultado.

    /*
        Escolhe o player aleatório.
        random() e floor() pertencem a função Math.
        floor() - arredonda para baixo.
        random() - gera um número aleatório.
        * 2 - limita o random() a gerar um número aleatório entre 0 e 1.
    */
    let random = Math.floor(Math.random() * 2);

    playerTurn = (random === 0) ? 'x' : 'o'; // Se random for 0 o valor de playerTurn é x se for 1 é o.

    for (let i in tether) { // Percorre todos os itens do tether.
        tether[i] = ''; // Limpa o valor.
    }

    playing = true; // Deixa o jogável novamente.

    handleRenderTether(); // Chama a função para escrever a jogada na tela.
    handleRenderInfos(); // chama a função para escrever as informações na tela.
}

// Função que troca o player...
const handleTogglePlayer = () => {
    playerTurn = (playerTurn === 'x') ? 'o' : 'x'; // Fica trocando o player, se o player atual for "x", troca para "o" e vice-versa.
    handleRenderInfos(); // Chama a função para mostrar os valores das informações no html.
}

// Função que verifica se deu empate...
const handleIsFull = () => {
    for (let i in tether) { // Percorre o tether.
        if (tether[i] === '') { // Se algum item do tether estiver vazio, quer dizer que não deu empate.
            return false; // retorna que o empate é falso.
        }
    }
    return true; // Se todos os itens estiverem preenchidos, quer dizer que deu empate e retorna verdadeiro.
}

// Função para ver quem venceu...
const handleCheckWinnerFor = (player) => {
    // Array de possibilidades de vitórias.
    let possibilities = [
        // Horizontal
        'a1,a2,a3',
        'b1,b2,b3',
        'c1,c2,c3',

        // Vertical
        'a1,b1,c1',
        'a2,b2,c2',
        'a3,b3,c3',

        // Diagonal
        'a1,b2,c3',
        'a3,b2,c1'
    ];

    for (let pos in possibilities) { // Percorre o array.
        // Pega o item do array e transforma em outro array separando por vírgula.
        let posArray = possibilities[pos].split(',');

        // every() - Testa todos os elementos do array.
        // Se todos os elementos satisfazerem a condição, retorna true, se 1 não satisfazer é suficiente para retornar false.
        let hasWon = posArray.every(option => tether[option] === player);

        if (hasWon) { // Se satisfazer a condição do loop como true, quer dizer que venceu e retorna true.
            return true;
        }
    }

    return false; // Se passou no loop todo e não teve vencedor, retorna false.
}

// Função que verifica o resultado da partida...
const handleCheckGame = () => {
    if (handleCheckWinnerFor('x')) { // Chama a função para ver se o X venceu.
        warning = '"X" venceu!'; // Envia aviso de vencedor pro html.
        playing = false; // Impede que o jogo continue.

    } else if (handleCheckWinnerFor('o')) { // Chama a função para ver se o O venceu.
        warning = '"O" venceu!'; // Envia aviso de vencedor pro html.
        playing = false; // Impede que o jogo continue.

    } else if (handleIsFull()) { // Chama a função que verifica se deu empate.
        warning = 'Deu velha!'; // Envia aviso que deu empate.
        playing = false; // Impede que o jogo continue.

    } // Se não caiu em nenhum, é porque ainda existem jogadas e ninguém venceu ainda.
}

// Função que renderiza a jogada...
const handleRenderTether = () => {
    for (let i in tether) { // Percorre o objeto tether.
        let item = document.querySelector(`.tether__item[data-item=${i}]`); // Seleciona o item html pelo data-item.
        item.innerHTML = tether[i]; // Atribui o valor do item do objeto ao item html.
    }
    handleCheckGame(); // Chama a função para verificar o resultado do jogo.
}

/*
|--------------------------------------------------------------------------
| EVENTS....
|--------------------------------------------------------------------------
*/

handleReset(); // Chamada da função reset.

const tetherReset = document.querySelector('.tether__reset');
tetherReset.addEventListener('click', handleReset); // Atribui um evento de click ao elemento reset__.

const tetherItems = document.querySelectorAll('.tether__item');
tetherItems.forEach(element => { // Faz um loop selecionando todos os elementos tether__item.
    element.addEventListener('click', handleTheterItemClick); // Atribui um evento de click a cada elemento, que chama uma função.
});