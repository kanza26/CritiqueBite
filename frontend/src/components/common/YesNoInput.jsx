// src/components/common/YesNoInput.jsx
import React from 'react';

const YesNoInput = ({ label, value, onChange, required = false, id }) => {
  return (
    <div className="field">
      <label className="field-label" htmlFor={id}>
        {label} {required && <span className="req">*</span>}
      </label>
      <div className="yesno" role="radiogroup" aria-label={label}>
        <button
          type="button"
          className={`pill ${value === true ? 'active' : ''}`}
          onClick={() => onChange(true)}
          role="radio"
          aria-checked={value === true}
        >
          Yes
        </button>
        <button
          type="button"
          className={`pill ${value === false ? 'active' : ''}`}
          onClick={() => onChange(false)}
          role="radio"
          aria-checked={value === false}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default YesNoInput;