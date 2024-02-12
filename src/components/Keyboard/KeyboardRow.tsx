// KeyboardRow.tsx

import React from 'react';
import KeyboardKey from './KeyboardKey.tsx'; // Assurez-vous que le chemin d'importation est correct

interface Props {
    line: string;
    handleKeyPress: (character: string) => void;
    correctLetters: string[];
    wrongLetters: string[];
}

const KeyboardRow: React.FC<Props> = ({ line, handleKeyPress, correctLetters, wrongLetters }) => (
    <div className="flex">
        {line.split('').map((character, index) => (
            <KeyboardKey
                key={`${character}-${index}`} // Utiliser une clé unique en cas de caractères répétés
                character={character}
                handleKeyPress={handleKeyPress}
                isCorrect={correctLetters.includes(character)}
                isWrong={wrongLetters.includes(character)}
            />
        ))}
    </div>
);

export default KeyboardRow;
