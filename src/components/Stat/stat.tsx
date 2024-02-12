// StatsPage.tsx
import  { useContext } from 'react';
import { StatsContext } from '../StatsContext'; // Assurez-vous que le chemin est correct

const StatsPage = () => {
    const { stats } = useContext(StatsContext);

    return (
        <div className="stats">
            <h2>Statistiques du jeu Tic-Tac-Toe</h2>
            <ul>
                <li>Parties jouées : {stats.ticTacToe.gamesPlayed}</li>
                <li>Victoires : {stats.ticTacToe.wins}</li>
                <li>Défaites : {stats.ticTacToe.losses}</li>
                {/* Supposant que "draws" n'est pas directement géré, calculé comme suit: */}
                <li>Matchs nuls : {stats.ticTacToe.gamesPlayed - stats.ticTacToe.wins - stats.ticTacToe.losses}</li>
            </ul>

            <h2>Statistiques du jeu Pendu</h2>
            <ul>
                <li>Parties jouées : {stats.hangman.gamesPlayed}</li>
                <li>Victoires : {stats.hangman.wins}</li>
                <li>Défaites : {stats.hangman.losses}</li>
            </ul>
        </div>
    );
};

export default StatsPage;
