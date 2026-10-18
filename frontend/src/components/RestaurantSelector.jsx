// src/components/RestaurantSelector.jsx
import React from 'react';
import Dropdown from './common/Dropdown';
import { useRestaurants } from '../hooks/useRestaurants';

const RestaurantSelector = ({ locationId, value, onChange }) => {
  const { restaurants, loading, error } = useRestaurants(locationId);

  if (!locationId) return null;

  const options = restaurants.map((r) => ({ value: r.id, label: r.name }));

  return (
    <>
      <Dropdown
        id="restaurant"
        label="Select a restaurant"
        placeholder={
          loading ? 'Loading restaurants...' : 'Choose a restaurant...'
        }
        value={value}
        onChange={onChange}
        options={options}
        loading={loading}
        required
      />
      {error && <p className="error">Failed to load restaurants: {error}</p>}
    </>
  );
};

export default RestaurantSelector;