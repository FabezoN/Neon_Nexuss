import React, { useEffect, useState, useContext } from 'react';
import { Board } from './board.tsx';
import { BoardArray, checkWinner, isMovesLeft, findBestMove } from './gameLogic.ts';
import { StatsContext } from '../Statistique/StatsContext.tsx'
import '../../pages/tic-tac-toe.sass';
import { Link } from 'react-router-dom';



export const TicTacToe: React.FC = () => {
	const initialBoard: BoardArray = Array.from({ length: 3 }, () => Array(3).fill(null));
	const [board, setBoard] = useState<BoardArray>(initialBoard);
	const [winner, setWinner] = useState<string | null>(null);
	const [turn, setTurn] = useState<number>(1);
	const { stats, updateStats } = useContext(StatsContext); // Utilise updateStats

	useEffect(() => {
		const win = checkWinner(board);
		if (win) {
			setWinner(win);
			handleStatsUpdate(win);
		} else if (!isMovesLeft(board)) {
			setWinner("Draw");
			handleStatsUpdate("Draw");
		} else if (turn % 2 === 0) {
			aiMove();
		}
	}, [board, turn]);

	const handleOnClick = (row: number, col: number) => {
		if (board[row][col] || winner) return;
		const newBoard = [...board];
		newBoard[row][col] = turn % 2 === 1 ? "X" : "O";
		setBoard(newBoard);
		setTurn(turn + 1);
	};

	const aiMove = () => {
		const [row, col] = findBestMove(board);
		if (row !== -1 && col !== -1) {
			const newBoard = [...board];
			newBoard[row][col] = "O";
			setBoard(newBoard);
			setTurn(turn + 1);
		}
	};

	const handleStatsUpdate = (result: string) => {
		// Mise à jour des stats pour le jeu de Morpion ('ticTacToe')
		if (result === "X") {
			updateStats('ticTacToe', { ...stats.ticTacToe, wins: stats.ticTacToe.wins + 1, gamesPlayed: stats.ticTacToe.gamesPlayed + 1 });
		} else if (result === "O") {
			updateStats('ticTacToe', { ...stats.ticTacToe, losses: stats.ticTacToe.losses + 1, gamesPlayed: stats.ticTacToe.gamesPlayed + 1 });
		} else { // Cas d'un match nul
			updateStats('ticTacToe', { ...stats.ticTacToe, gamesPlayed: stats.ticTacToe.gamesPlayed + 1 });
		}
	};

	const restartGame = () => {
		setBoard(initialBoard);
		setWinner(null);
		setTurn(1);
	};

	return (
		<div className='game'>
			<h1>Morpion</h1>
			<Board board={board} handleClick={handleOnClick} />
			{winner && <h2>{winner === "X" ? "You Win!" : winner === "O" ? "IA WAINQUEUR!" : "EGALITE!"}</h2>}
			<div className='Buttons'>
				<button className='btn custom-primary-btn custom-hover' onClick={restartGame}>Relancer</button>
				<Link to="/statistique">
					<button type="button" className="btn custom-primary-btn custom-hover" >Statistique</button>
				</Link>
			</div>
		</div>
	);
};
