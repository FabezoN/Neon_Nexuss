import { useState, useEffect } from 'react';

// Définir une interface pour la structure des données de l'API.
interface ApiResponse {
  name: string;
}

// Fonction pour remplacer les lettres accentuées par des lettres non accentuées
function normalizeWord(word: string): string {
  const accents = 'ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ';
  const without = 'AAAAAAACEEEEIIIIDNOOOOOOUUUUYBsaaaaaaaceeeeiiiionoooooouuuuyby';
  return word.split('').map(letter => {
    const index = accents.indexOf(letter);
    return index !== -1 ? without[index] : letter;
  }).join('');
}

// Utilisation de TypeScript pour définir le type de retour du hook.
const useRandomWord = (): { name: string; isLoading: boolean; error: string | null; cols: number; reset: () => void } => {
  const [name, setName] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchName();
  }, []);

  const fetchName = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://trouve-mot.fr/api/random');
      if (!response.ok) {
        throw new Error('La requête a échoué');
      }
      const jsonData: ApiResponse[] = await response.json();
      const normalizedWord = normalizeWord(jsonData[0].name).toUpperCase();
      setName(normalizedWord);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Fonction pour réinitialiser le nom
  const reset = () => {
    setName('');
    setError(null);
    setIsLoading(false);
  };

  const cols = name ? name.length : 0;

  return {
    name, isLoading, error, cols, reset,
  };
};

export default useRandomWord;
