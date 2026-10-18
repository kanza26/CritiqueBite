// src/components/ReviewForm.jsx
import React, { useState } from 'react';
import Dropdown from './common/Dropdown';
import RatingInput from './common/RatingInput';
import YesNoInput from './common/YesNoInput';
import Spinner from './common/Spinner';
import { FOOD_CATEGORIES } from '../constants/foodCategories';
import { isFormValid } from '../utils/validation';
import { useSubmitReview } from '../hooks/useSubmitReview';

const INITIAL = {
  foodCategory: '',
  foodRating: 0,
  ambienceRating: 0,
  staffRating: 0,
  familyFriendly: null,
  affordable: null,
};

const ReviewForm = ({ locationId, restaurantId, onSuccess }) => {
  const [form, setForm] = useState(INITIAL);
  const { submit, submitting, success, error, reset } = useSubmitReview();

  const setField = (key, val) => setForm((f) => ({ ...f, [key]: val }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid({ ...form, locationId, restaurantId })) return;

    const payload = {
      locationId,
      restaurantId,
      foodCategory: form.foodCategory,
      foodRating: form.foodRating,
      ambienceRating: form.ambienceRating,
      staffRating: form.staffRating,
      familyFriendly: form.familyFriendly,
      affordable: form.affordable,
    };

    const res = await submit(payload);
    if (res?.success) {
      onSuccess?.(res.data);
    }
  };

  const handleReset = () => {
    setForm(INITIAL);
    reset();
  };

  const valid = isFormValid({ ...form, locationId, restaurantId });

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Share your experience</h2>

      <Dropdown
        id="foodCategory"
        label="What type of food did you eat?"
        placeholder="Select food category..."
        value={form.foodCategory}
        onChange={(v) => setField('foodCategory', v)}
        options={FOOD_CATEGORIES}
        required
      />

      <RatingInput
        id="foodRating"
        label="Food rating"
        value={form.foodRating}
        onChange={(v) => setField('foodRating', v)}
        required
      />

      <RatingInput
        id="ambienceRating"
        label="Ambience rating"
        value={form.ambienceRating}
        onChange={(v) => setField('ambienceRating', v)}
        required
      />

      <YesNoInput
        id="familyFriendly"
        label="Suitable for family?"
        value={form.familyFriendly}
        onChange={(v) => setField('familyFriendly', v)}
        required
      />

      <YesNoInput
        id="affordable"
        label="Affordable?"
        value={form.affordable}
        onChange={(v) => setField('affordable', v)}
        required
      />

      <RatingInput
        id="staffRating"
        label="Staff cooperation rating"
        value={form.staffRating}
        onChange={(v) => setField('staffRating', v)}
        required
      />

      {error && <p className="error">Submission failed: {error}</p>}
      {success && (
        <p className="success">✅ Review submitted successfully!</p>
      )}

      <div className="form-actions">
        <button
          type="submit"
          className="btn primary"
          disabled={!valid || submitting}
        >
          {submitting ? (
            <>
              <Spinner /> Submitting...
            </>
          ) : (
            'Submit Review'
          )}
        </button>
        <button
          type="button"
          className="btn ghost"
          onClick={handleReset}
          disabled={submitting}
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;