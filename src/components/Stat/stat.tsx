// StatsPage.jsx ou StatsPage.tsx si vous utilisez TypeScript
import  { useContext } from 'react';
import { StatsContext } from '../StatsContext'; // Assurez-vous que le chemin est correct

const StatsPage = () => {
    const { stats } = useContext(StatsContext);

    return (
        <div className="stats">
            <h2>Statistiques du jeu Tic-Tac-Toe</h2>
            <ul>
                <li>Parties jouées : {stats.gamesPlayed}</li>
                <li>Victoires : {stats.wins}</li>
                <li>Défaites : {stats.losses}</li>
                <li>Matchs nuls : {stats.draws}</li>
            </ul>
        </div>
    );
};

export default StatsPage;
