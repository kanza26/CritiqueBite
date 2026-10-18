// src/components/LocationSelector.jsx
import React from 'react';
import Dropdown from './common/Dropdown';
import { useLocations } from '../hooks/useLocations';

const LocationSelector = ({ value, onChange }) => {
  const { locations, loading, error } = useLocations();

  const options = locations.map((l) => ({ value: l.id, label: l.name }));

  return (
    <>
      <Dropdown
        id="location"
        label="Select your location"
        placeholder="Choose a location in Karachi..."
        value={value}
        onChange={onChange}
        options={options}
        loading={loading}
        required
      />
      {error && <p className="error">Failed to load locations: {error}</p>}
    </>
  );
};

export default LocationSelector;