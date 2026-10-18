// src/hooks/useSubmitReview.js
import { useCallback, useState } from 'react';
import { submitReview } from '../api/mockApi';

export const useSubmitReview = () => {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const submit = useCallback(async (payload) => {
    setSubmitting(true);
    setError(null);
    try {
      const res = await submitReview(payload);
      setSuccess(res.success);
      return res;
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }, []);

  const reset = useCallback(() => {
    setSuccess(false);
    setError(null);
  }, []);

  return { submit, submitting, success, error, reset };
};