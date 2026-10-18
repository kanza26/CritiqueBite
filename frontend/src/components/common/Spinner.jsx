// src/components/common/Spinner.jsx
import React from 'react';

const Spinner = ({ size = 16 }) => (
  <span
    className="spinner"
    style={{ width: size, height: size }}
    aria-label="loading"
  />
);

export default Spinner;