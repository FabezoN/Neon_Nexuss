import React from 'react';
import GridBox from './GridBox.tsx';
import { generateArray } from '../../helpers/genericHelper.ts';

interface Props {
    length: number;
    letters: string; // `result` prop a été supprimé car il n'est plus utilisé
}

const GridRow: React.FC<Props> = ({ length, letters }) => (
    <div className="flexGrid">
        {
            generateArray(length).map((index) => (
                <GridBox
                    key={index}
                    letter={letters[index] || '_'} // Utiliser '_' ou un autre placeholder pour les lettres non devinées
                    state="" // La gestion de l'état peut être ajustée si nécessaire
                />
            ))
        }
    </div>
);

export default GridRow;
