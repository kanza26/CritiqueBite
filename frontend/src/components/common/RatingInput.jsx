// src/components/common/RatingInput.jsx
import React from 'react';

const RatingInput = ({ label, value, onChange, required = false, id }) => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="field">
      <label className="field-label" htmlFor={id}>
        {label} {required && <span className="req">*</span>}
      </label>
      <div className="stars" role="radiogroup" aria-label={label}>
        {stars.map((n) => (
          <button
            key={n}
            type="button"
            className={`star ${value >= n ? 'active' : ''}`}
            onClick={() => onChange(n)}
            aria-label={`${n} star`}
            aria-checked={value === n}
            role="radio"
          >
            ★
          </button>
        ))}
        <span className="rating-value">{value ? `${value}/5` : '—'}</span>
      </div>
    </div>
  );
};

export default RatingInput;