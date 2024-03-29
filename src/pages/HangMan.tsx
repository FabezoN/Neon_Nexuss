import React, { useContext, useState, useEffect } from "react";
import './HangMan.css';
import Layout from '../components/Layout/Layout.tsx';
import Keyboard from "../components/Keyboard/Keyboard.tsx";
import useRandomWord from '../hook/getRandomWord.ts';
import Grid from "../components/HangMan/grid.tsx";
import { StatsContext } from '../components/Statistique/StatsContext.tsx';
import { Link } from "react-router-dom";

const Pendu: React.FC = () => {
    const { name: WORD, isLoading, error, reset } = useRandomWord();
    const [correctLetters, setCorrectLetters] = useState<string[]>([]);
    const [wrongLetters, setWrongLetters] = useState<string[]>([]);
    const [won, setWon] = useState<boolean>(false);
    const [lost, setLost] = useState<boolean>(false); // État pour suivre si le joueur a perdu
    const { stats, updateStats } = useContext(StatsContext);

    useEffect(() => {
        resetGame();
    }, [WORD, reset]);

    const resetGame = () => {
        setCorrectLetters([]);
        setWrongLetters([]);
        setWon(false);
        setLost(false);
    };

    useEffect(() => {
        // Vérifie la victoire
        const uniqueLetters = [...new Set(WORD.split(''))];
        if (correctLetters.length && uniqueLetters.every(letter => correctLetters.includes(letter))) {
            setWon(true);
            // Mise à jour des stats pour une victoire si pas déjà fait
            if (!won && !lost) {
                const newStats = { ...stats.hangman, gamesPlayed: stats.hangman.gamesPlayed + 1, wins: stats.hangman.wins + 1 };
                updateStats('hangman', newStats);
            }
        }
    }, [correctLetters, WORD, won, lost, stats.hangman, updateStats]);

    useEffect(() => {
        // Vérifie la défaite
        if (wrongLetters.length >= 10) {
            setLost(true);
            // Mise à jour des stats pour une défaite si pas déjà fait
            if (!won && !lost) {
                const newStats = { ...stats.hangman, gamesPlayed: stats.hangman.gamesPlayed + 1, losses: stats.hangman.losses + 1 };
                updateStats('hangman', newStats);
            }
        }
    }, [wrongLetters, won, lost, stats.hangman, updateStats]);

    const handleKeyPress = (character: string) => {
        character = character.toUpperCase();
        if (WORD.includes(character)) {
            if (!correctLetters.includes(character)) {
                setCorrectLetters(current => [...current, character]);
            }
        } else {
            if (!wrongLetters.includes(character)) {
                setWrongLetters(current => [...current, character]);
            }
        }
    };

    const penduParts = [
        'base', 'pole', 'crossbar', 'rope', 'head', 'body', 'arm left', 'arm right', 'leg left', 'leg right'
    ];

    // Fonction pour générer les divs des parties du pendu
    const drawPendu = () => {
        return penduParts.map((part, index) => (
            <div key={index} className={`pendu-part ${part} ${wrongLetters.length > index ? 'show' : ''}`}></div>
        ));
    };

    return (
        <div className="Page">
            <Layout />
            <div className="Pendu">
                <h1>Pendu</h1>
                {isLoading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {!isLoading && !error && (
                    <>
                        <div className="pendu-container">
                            {drawPendu()}
                        </div>
                        {won ? <div><h2>Félicitations! Tu as trouvé le mot: {WORD}</h2></div> : null}
                        {lost ? <div><h2>Dommage! Le mot était: {WORD}</h2></div> : null}
                        <Grid length={WORD.length} correctLetters={correctLetters} word={WORD} />
                        <div className="btn-nav"></div>
                        <Keyboard handleKeyPress={handleKeyPress} correctLetters={correctLetters} wrongLetters={wrongLetters} />
                        <div className="btn-nav">
                            <div className='BtnStat'>
                                <button type="button" className="btn custom-primary-btn custom-hover" onClick={reset}>Relancer</button>
                            </div>
                            <div className='BtnStat'>
                                <Link to="/statistique">
                                    <button type="button" className="btn custom-primary-btn custom-hover">Statistique</button>
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Pendu;
