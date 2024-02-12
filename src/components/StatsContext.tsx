import React, {createContext, useState, useEffect, PropsWithChildren} from 'react';

export interface Stats {
    gamesPlayed: number;
    wins: number;
    losses: number;
    draws: number;
}

interface StatsContextType {
    stats: Stats;
    setStats: (stats: Stats) => void;
}

const defaultStats: Stats = { gamesPlayed: 0, wins: 0, losses: 0, draws: 0 };

export const StatsContext = createContext<StatsContextType>({
    stats: defaultStats,
    setStats: () => {},
});

export const StatsProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [stats, setStats] = useState<Stats>(() => {
        const savedStats = localStorage.getItem('ticTacToeStats');

        return savedStats ? JSON.parse(savedStats) : defaultStats;
    });
console.log(localStorage.getItem('ticTacToeStats'))
    useEffect(() => {
        localStorage.setItem('ticTacToeStats', JSON.stringify(stats));
    }, [stats]);

    return (
        <StatsContext.Provider value={{ stats, setStats }}>
            {children}
        </StatsContext.Provider>
    );
};
