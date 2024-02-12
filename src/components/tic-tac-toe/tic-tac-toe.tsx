import { Board } from "./board";
import "./tic-tac-toe.sass";
import {useEffect, useState} from "react";

type BoardArray = Array<Array<string | null>>;

const checkWinner = (board: BoardArray): string | null => {
	const lines = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
		[0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
		[0, 4, 8], [2, 4, 6]            // Diagonals
	];
	for (const line of lines) {
		const [a, b, c] = line.map(index => ({ row: Math.floor(index / 3), col: index % 3 }));
		if (board[a.row][a.col] && board[a.row][a.col] === board[b.row][b.col] && board[a.row][a.col] === board[c.row][c.col]) {
			return board[a.row][a.col];
		}
	}
	return null;
};

const isMovesLeft = (board: BoardArray) => board.some(row => row.includes(null));

const minimax = (board: BoardArray, depth: number, isMaximizing: boolean): number => {
	const winner = checkWinner(board);
	if (winner === "O") return 10 - depth;
	if (winner === "X") return depth - 10;
	if (!isMovesLeft(board)) return 0;

	let bestScore = isMaximizing ? -Infinity : Infinity;
	for (let row = 0; row < 3; row++) {
		for (let col = 0; col < 3; col++) {
			if (board[row][col] === null) {
				board[row][col] = isMaximizing ? "O" : "X";
				const score = minimax(board, depth + 1, !isMaximizing);
				board[row][col] = null;
				bestScore = isMaximizing ? Math.max(score, bestScore) : Math.min(score, bestScore);
			}
		}
	}
	return bestScore;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const findBestMove = (board: BoardArray): [number, number] => {
	let bestVal = -Infinity;
	let bestMove: [number, number] = [-1, -1];
	for (let row = 0; row < 3; row++) {
		for (let col = 0; col < 3; col++) {
			if (board[row][col] === null) {
				board[row][col] = "O";
				const moveVal = minimax(board, 0, false);
				board[row][col] = null;
				if (moveVal > bestVal) {
					bestVal = moveVal;
					bestMove = [row, col];
				}
			}
		}
	}
	return bestMove;
};

export const TicTacToe = () => {
	const initialBoard: BoardArray = Array.from({ length: 3 }, () => Array(3).fill(null));
	const [board, setBoard] = useState<BoardArray>(initialBoard);
	const [winner, setWinner] = useState<string | null>(null);
	const [turn, setTurn] = useState<number>(1);
	const [starter, setStarter] = useState<string>("X");
	// Déclaration de l'état pour les statistiques
	const [stats, setStats] = useState(() => {
		const savedStats = localStorage.getItem('ticTacToeStats');
		return savedStats ? JSON.parse(savedStats) : { gamesPlayed: 0, wins: 0, losses: 0, draws: 0 };
	});

	useEffect(() => {
		if (starter === "O") {
			aiFirstMove();
		}
	}, [starter]);

	useEffect(() => {
		// Mise à jour de localStorage à chaque changement de stats
		localStorage.setItem('ticTacToeStats', JSON.stringify(stats));
	}, [stats]);

	const aiFirstMove = () => {
		const [bestRow, bestCol] = findBestMove(board);
		board[bestRow][bestCol] = "O";
		setBoard([...board]);
		setTurn(turn + 1);
	};

	const handleOnClick = (row: number, col: number) => {
		if (board[row][col] || winner) return;
		const newBoard = [...board];
		newBoard[row][col] = "X";
		setBoard(newBoard);
		handleGameLogic();
	};

	const handleGameLogic = () => {
		const win = checkWinner(board);
		if (win) {
			setWinner(win);
			// Mise à jour des statistiques basées sur le résultat
			const newStats = { ...stats };
			newStats.gamesPlayed += 1;
			if (win === "X") newStats.wins += 1;
			else if (win === "O") newStats.losses += 1;
			setStats(newStats);
		} else if (!isMovesLeft(board)) {
			setWinner("draw");
			// Mise à jour pour match nul
			const newStats = { ...stats, gamesPlayed: stats.gamesPlayed + 1, draws: stats.draws + 1 };
			setStats(newStats);
		} else {
			if (starter === "X" || turn > 1) {
				const [bestRow, bestCol] = findBestMove(board);
				board[bestRow][bestCol] = "O";
				const newWin = checkWinner(board);
				if (newWin) {
					setWinner(newWin);
					// Mise à jour des statistiques pour l'IA
					const newStats = { ...stats };
					newStats.gamesPlayed += 1;
					if (newWin === "O") newStats.losses += 1;
					setStats(newStats);
				}
			}
		}
		setBoard([...board]);
		setTurn(turn + 1);
	};

	const restartGame = () => {
		setBoard(initialBoard);
		setWinner(null);
		setTurn(1);
		setStarter(starter === "X" ? "O" : "X");
	};

	return (
		<div className='game'>
			<h1>Tic-Tac-Toe</h1>
			<Board board={board} handleClick={handleOnClick} />
			{winner && <p>{winner === "X" ? "You Win!" : winner === "O" ? "AI Wins!" : "It's a Draw!"}</p>}
			<button className='btn custom-primary-btn custom-hover' onClick={restartGame}>Restart Game</button>

		</div>
	);
};
