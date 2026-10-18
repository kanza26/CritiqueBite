// src/components/common/Dropdown.jsx
import React from 'react';

const Dropdown = ({
  label,
  value,
  onChange,
  options = [],
  placeholder = 'Select...',
  disabled = false,
  loading = false,
  required = false,
  id,
}) => {
  return (
    <div className="field">
      <label htmlFor={id} className="field-label">
        {label} {required && <span className="req">*</span>}
      </label>
      <select
        id={id}
        className="field-input"
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled || loading}
      >
        <option value="">
          {loading ? 'Loading...' : placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value ?? opt.id} value={opt.value ?? opt.id}>
            {opt.label ?? opt.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;