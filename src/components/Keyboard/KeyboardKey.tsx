// Assurez-vous que ce code se trouve dans votre fichier KeyboardKey.tsx

import React from 'react';

// Mise à jour de l'interface Props pour inclure isCorrect et isWrong
interface Props {
    character: string;
    handleKeyPress: (character: string) => void;
    isCorrect: boolean;  // Ajoutez cette ligne
    isWrong: boolean;    // Ajoutez cette ligne
}

const KeyboardKey: React.FC<Props> = ({ character, handleKeyPress, isCorrect, isWrong }) => {
    // Logique pour déterminer la classe en fonction de isCorrect et isWrong
    const className = `keyboard-key ${isCorrect ? 'correct' : ''} ${isWrong ? 'wrong' : ''}`;

    return (
        <button className={className} onClick={() => handleKeyPress(character)}>
            {character}
        </button>
    );
};

export default KeyboardKey;
