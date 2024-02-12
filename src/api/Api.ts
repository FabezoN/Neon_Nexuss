import { get } from './CallApi';
import { ApiWord } from '../types/GamesType';

export const getRandomWord = async () => (
  get<ApiWord[]>('https://trouve-mot.fr/api/random')
);
