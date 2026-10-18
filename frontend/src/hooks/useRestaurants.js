// src/hooks/useRestaurants.js
import { useEffect, useState } from 'react';
import { fetchRestaurantsByLocation } from '../api/mockApi';

export const useRestaurants = (locationId) => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!locationId) {
      setRestaurants([]);
      return;
    }
    let mounted = true;
    setLoading(true);
    setError(null);
    (async () => {
      try {
        const data = await fetchRestaurantsByLocation(locationId);
        if (mounted) setRestaurants(data);
      } catch (err) {
        if (mounted) setError(err.message);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [locationId]);

  return { restaurants, loading, error };
};