import { useState, useEffect } from "react";

function useCategories() {
  const [categories, setCategories] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchCategories() {
    try {
      const response = await fetch(`http://localhost:3000/api/categories`);
      if (!response.ok) {
        throw new Error("error en la petición");
      }
      const responseJson = await response.json();
      console.log(responseJson);

      setCategories(responseJson);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return { categories, isLoading, error };
}

export default useCategories;
