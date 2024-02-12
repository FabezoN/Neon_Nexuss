import React from 'react';
import Layout from "../components/Layout/Layout";
import { TicTacToe } from "../components/tic-tac-toe/tic-tac-toe.tsx"; // Assurez-vous que le chemin est correct
import { StatsProvider } from "../components/StatsContext"; // Importez StatsProvider, pas StatsContext
import './Morpion.css'

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
