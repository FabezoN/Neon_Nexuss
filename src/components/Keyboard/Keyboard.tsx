import React from 'react';
import KeyboardRow from '../Keyboard/KeyboardRow.tsx';

interface Props {
    handleKeyPress: (character: string) => void;
    correctLetters: string[]; // Ajout pour les lettres correctes
    wrongLetters: string[]; // Ajout pour les lettres incorrectes
}

const firstLine = 'AZERTYUIOP';
const secondLine = 'QSDFGHJKLM';
const thirdLine = 'WXCVBN⌫⏎';

const Keyboard: React.FC<Props> = ({ handleKeyPress, correctLetters, wrongLetters }) => (
    <div className="flex justify-center items-center flex-col mt-12">
        <KeyboardRow line={firstLine} handleKeyPress={handleKeyPress} correctLetters={correctLetters} wrongLetters={wrongLetters} />
        <KeyboardRow line={secondLine} handleKeyPress={handleKeyPress} correctLetters={correctLetters} wrongLetters={wrongLetters} />
        <KeyboardRow line={thirdLine} handleKeyPress={handleKeyPress} correctLetters={correctLetters} wrongLetters={wrongLetters} />
    </div>
);

export default Keyboard;
