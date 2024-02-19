import React from 'react';
import { LetterState } from '../../types/GameTypes';

interface Props {
  letter: string;
  state: string;
}

const getBoxClasses = (state: string) => {
  switch (state) {
    case LetterState.OK:
      return 'bg-red-600';
    default:
      return '';
  }
};

const GridBox: React.FC<Props> = ({ letter, state }) => (
  <div className="gridBox">
    <div className={`${getBoxClasses(state)} w-12 h-12 text-white text-2xl flex justify-center items-center`}>
      {letter}
    </div>
  </div>
);

export default GridBox;
