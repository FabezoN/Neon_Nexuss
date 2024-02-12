export const get = async <T>(url: string): Promise<T> => {
    const response = await fetch(url);
  
    if (!response.ok) {
      throw new Error('Oops, un problème est survenu');
    }
  
    return response.json();
  };
  