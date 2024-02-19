import React, { createContext, useReducer, useEffect, PropsWithChildren } from 'react';

// Définition des types pour les statistiques de chaque jeu
interface GameStats {
    gamesPlayed: number;
    wins: number;
    losses: number;
}

interface Stats {
    ticTacToe: GameStats; // Stats pour le Morpion
    hangman: GameStats;   // Stats pour le Pendu
}

interface StatsContextType {
    stats: Stats;
    updateStats: (game: 'ticTacToe' | 'hangman', stats: GameStats) => void; // Spécifier les jeux
}

const defaultStats: Stats = {
    ticTacToe: { gamesPlayed: 0, wins: 0, losses: 0 },
    hangman: { gamesPlayed: 0, wins: 0, losses: 0 },
};

export const StatsContext = createContext<StatsContextType>({
    stats: defaultStats,
    updateStats: () => {},
});

// Action pour le reducer
type Action =
    | { type: 'UPDATE_TICTACTOE_STATS'; stats: GameStats }
    | { type: 'UPDATE_HANGMAN_STATS'; stats: GameStats };

// Reducer function
function statsReducer(state: Stats, action: Action): Stats {
    switch (action.type) {
        case 'UPDATE_TICTACTOE_STATS':
            return { ...state, ticTacToe: action.stats };
        case 'UPDATE_HANGMAN_STATS':
            return { ...state, hangman: action.stats };
        default:
            return state;
    }
}

export const StatsProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [stats, dispatch] = useReducer(statsReducer, defaultStats, () => {
        const savedStats = localStorage.getItem('gameStats');
        return savedStats ? JSON.parse(savedStats) : defaultStats;
    });

    useEffect(() => {
        localStorage.setItem('gameStats', JSON.stringify(stats));
    }, [stats]);

    const updateStats = (game: 'ticTacToe' | 'hangman', newStats: GameStats) => {
        dispatch({ type: game === 'ticTacToe' ? 'UPDATE_TICTACTOE_STATS' : 'UPDATE_HANGMAN_STATS', stats: newStats });
    };

    return (
        <StatsContext.Provider value={{ stats, updateStats }}>
            {children}
        </StatsContext.Provider>
    );
};
