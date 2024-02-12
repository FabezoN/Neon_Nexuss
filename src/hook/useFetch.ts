import { useState } from 'react';

const useFetch = <T>() => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string|null>(null);
  const [data, setData] = useState<T|undefined>(undefined);

  const query = async (request: (...params: any[]) => Promise<T>) => {
    try {
      setLoading(true);
      setError(null);

      const result = await request();

      setData(result);
      return result;
    } catch (e: any) {
      console.error(e);
      setError(e.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    data,
    query,
  };
};

export default useFetch;
