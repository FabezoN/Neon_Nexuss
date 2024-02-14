import React from 'react';
import GridRow from './GridRow.tsx';

interface Props {
    length: number;
    correctLetters: string[];
    word: string;
}

const Grid: React.FC<Props> = ({ length, correctLetters, word }) => {
    // Créer un tableau de caractères pour le mot affiché
    const displayWord = Array.from({ length }, (_, index) =>
        correctLetters.includes(word[index]) ? word[index] : '_'
    );

    return (
        <div className="flex justify-center items-center flex-row">
            <GridRow
                key="wordDisplay"
                length={length}
                letters={displayWord.join('')} // Assurez-vous de joindre sans espace
            />
        </div>
    );
};

export default Grid;
