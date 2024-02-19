import { useState, useEffect, useCallback } from 'react';

interface ApiResponse {
  name: string;
}

function normalizeWord(word: string): string {
  const accents = 'ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ';
  const without = 'AAAAAAACEEEEIIIIDNOOOOOOUUUUYBsaaaaaaaceeeeiiiionoooooouuuuyby';
  return word.split('').map(letter => {
    const index = accents.indexOf(letter);
    return index !== -1 ? without[index] : letter;
  }).join('').toUpperCase();
}

const useRandomWord = () => {
  const [name, setName] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchName = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://trouve-mot.fr/api/random');
      if (!response.ok) {
        throw new Error('La requête a échoué');
      }
      const jsonData: ApiResponse[] = await response.json();
      const normalizedWord = normalizeWord(jsonData[0].name);
      setName(normalizedWord);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchName();
  }, [fetchName]);

  // Fonction pour réinitialiser le nom
  const reset = useCallback(() => {
    fetchName(); // Refait une demande pour un nouveau mot
  }, [fetchName]);

  const cols = name.length;

  return {
    name, isLoading, error, cols, reset,
  };
};

export default useRandomWord;
