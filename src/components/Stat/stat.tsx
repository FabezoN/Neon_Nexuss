// StatsPage.tsx
import  { useContext } from 'react';
import { StatsContext } from '../StatsContext'; // Assurez-vous que le chemin est correct

const StatsPage = () => {
    const { stats } = useContext(StatsContext);

    return (
        <div className="stats">
            <h2 className='StatTicTacToe'>Statistiques du jeu Tic-Tac-Toe</h2>
            <ul>

                <h4>Parties jouées : {stats.ticTacToe.gamesPlayed}</h4>
                <h5>Victoires : {stats.ticTacToe.wins}</h5>
                <h5>Défaites : {stats.ticTacToe.losses}</h5>
                {/* Supposant que "draws" n'est pas directement géré, calculé comme suit: */}
                <h5>Matchs nuls : {stats.ticTacToe.gamesPlayed - stats.ticTacToe.wins - stats.ticTacToe.losses}</h5>
            </ul>

            <h2 className='StatHangMan' >Statistiques du jeu Pendu </h2>
            <ul>
                <li>Parties jouées : {stats.hangman.gamesPlayed}</li>
                <li>Victoires : {stats.hangman.wins}</li>
                <li>Défaites : {stats.hangman.losses}</li>

            </ul>
        </div>
    );
};

export default StatsPage;
