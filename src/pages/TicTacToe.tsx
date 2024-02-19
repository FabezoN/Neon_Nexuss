import React from 'react';
import Layout from "../components/Layout/Layout.tsx";
import { TicTacToe } from "../components/TicTacToe/tic-tac-toe.tsx"; // Assurez-vous que le chemin est correct
import { StatsProvider } from "../components/Statistique/StatsContext.tsx"; // Importez StatsProvider, pas StatsContext
import './TicTacToe.css'

const Morpion: React.FC = () => (
    <div className="Morpion">
        <Layout>
            {/* Du contenu supplémentaire peut aller ici si nécessaire */}
        </Layout>
        <StatsProvider> {/* Utilisez le StatsProvider ici */}
            <TicTacToe/>
        </StatsProvider>
    </div>
);

export default Morpion;
