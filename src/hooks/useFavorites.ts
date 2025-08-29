
import { useState, useEffect } from 'react';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('smartname-favorites');
    if (saved) {
      try {
        setFavorites(JSON.parse(saved));
      } catch (error) {
        console.error('Error loading favorites:', error);
      }
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('smartname-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (name: string) => {
    setFavorites(prev => {
      if (prev.includes(name)) {
        return prev.filter(fav => fav !== name);
      } else {
        return [...prev, name];
      }
    });
  };

  const isFavorite = (name: string) => favorites.includes(name);

  const clearFavorites = () => setFavorites([]);

  return {
    favorites,
    toggleFavorite,
    isFavorite,
    clearFavorites,
  };
};
