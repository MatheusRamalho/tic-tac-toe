import { useState } from 'react';

import GlobalStyle from './styles/global';
import { Tether } from './components/Tether';


export interface PlayerProps {
	player: string;
}

// export interface TetherProps {
// 	a1: string, a2: string, a3: string,
// 	b1: string, b2: string, b3: string,
// 	c1: string, c2: string, c3: string
// }

export const App = () => {
	const [playerWinner, setPlayerWinner] = useState('--');
	const [playerTurn, setPlayerTurn] = useState('--');
	const [playing, setPlaying] = useState(false);
	// const [tether, setTheter] = useState<TetherProps>();

	let tether = {
		a1: '', a2: '', a3: '',
		b1: '', b2: '', b3: '',
		c1: '', c2: '', c3: ''
	}

	const renderMoveOnFrame = () => {
		for (let i in tether) {
			let item = document.querySelector(`.tether-item[data-item=${i}]`);

			if (item) {
				item.innerHTML = tether[i];
			}
		}

		checkIfWinnerInTheGame();
	}

	const checkIfWinnerInTheGame = () => {
		if (checkWinnerForThePlayer({
			player: 'x'
		})) {
			setPlayerWinner('"X" venceu!');
			setPlaying(false);

		} else if (checkWinnerForThePlayer({
			player: 'o'
		})) {
			setPlayerWinner('"O" venceu!');
			setPlaying(false);

		} else if (checkIfTheGameIsDraw()) {
			setPlayerWinner('Deu velha!');
			setPlaying(false);
		}
	}

	const checkIfTheGameIsDraw = () => {
		for (let i in tether) {
			return (tether[i] === '') && false;
		}
		return true;
	}

	const checkWinnerForThePlayer = ({ player }: PlayerProps) => {
		let possibilities = [ // Array de possibilidades de vitórias.
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

		for (let pos in possibilities) {
			let posArray = possibilities[pos].split(',');
			let hasWon = posArray.every(option => tether[option] === player); // every() - Testa todos os elementos do array.
			return (hasWon) && true;
		}

		return false;
	}

	const handleTheterItemClick = (event: any) => {
		let item = event.target.getAttribute('data-item');

		if (playing && tether[item] === '') {
			tether[item] = playerTurn;

			renderMoveOnFrame();
			setPlayerTurn(playerTurn === 'x' ? 'o' : 'x');
		}
	}

	const handleResetTicTacToe = () => {
		setPlayerWinner('--');

		let setPlayerRandom = Math.floor(Math.random() * 2); // Escolhe o player aleatório...
		setPlayerTurn(setPlayerRandom === 0 ? 'x' : 'o');

		for (let i in tether) {
			tether[i] = '';
		}

		setPlaying(true);
		renderMoveOnFrame();
	}

	return (
		<div className="App">
			<GlobalStyle />

			<main>
				<h1> Tic Tac Toe </h1>
				<h2> Jogo da velha </h2>

				<Tether.Root>
					<Tether.Board>
						<Tether.Item itemCode="a1" />
						<Tether.Item itemCode="a2" />
						<Tether.Item itemCode="a3" />

						<Tether.Item itemCode="b1" />
						<Tether.Item itemCode="b2" />
						<Tether.Item itemCode="b3" />

						<Tether.Item itemCode="c1" />
						<Tether.Item itemCode="c2" />
						<Tether.Item itemCode="c3" />
					</Tether.Board>
				</Tether.Root>

				<Tether.Scoreboard>
					<Tether.Turn message={playerTurn} />
					<Tether.Winner message={playerWinner} />
				</Tether.Scoreboard>

				<Tether.Reset onClick={handleResetTicTacToe} />
			</main>

			<footer>
				<a href="https://matheusramalho.dev">
					matheusramalho.dev
				</a>
			</footer>
		</div>
	)
}
