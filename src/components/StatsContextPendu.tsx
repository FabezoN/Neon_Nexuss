import React, {createContext, useState, useEffect, PropsWithChildren} from 'react';

export interface StatsMorpion {
    gamesPlayed: number;
    wins: number;
    losses: number;
}

interface StatsContextTypeMorpion {
    stats: StatsMorpion;
    setStats: (stats: StatsMorpion) => void;
}

const defaultStats: StatsMorpion = { gamesPlayed: 0, wins: 0, losses: 0};

export const StatsContextMorpion = createContext<StatsContextTypeMorpion>({
    stats: defaultStats,
    setStats: () => {},
});

export const StatsProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [stats, setStats] = useState<StatsMorpion>(() => {
        const savedStats = localStorage.getItem('MorpionStats');

        return savedStats ? JSON.parse(savedStats) : defaultStats;
    });
    console.log(localStorage.getItem('MorpionStats'))
    useEffect(() => {
        localStorage.setItem('MorpionStats', JSON.stringify(stats));
    }, [stats]);

    return (
        <StatsContextMorpion.Provider value={{ stats, setStats }}>
            {children}
        </StatsContextMorpion.Provider>
    );
};
