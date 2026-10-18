// src/utils/validation.js

export const isFormValid = (form) => {
  return (
    form.locationId &&
    form.restaurantId &&
    form.foodCategory &&
    form.foodRating > 0 &&
    form.ambienceRating > 0 &&
    form.staffRating > 0 &&
    form.familyFriendly !== null &&
    form.affordable !== null
  );
};