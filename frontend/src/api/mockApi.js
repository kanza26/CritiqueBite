// src/api/mockApi.js

const KARACHI_LOCATIONS = [
  { id: 'dha', name: 'DHA' },
  { id: 'malir', name: 'Malir' },
  { id: 'north', name: 'North Nazimabad' },
  { id: 'scheme33', name: 'Scheme 33' },
  { id: 'clifton', name: 'Clifton' },
  { id: 'korangi', name: 'Korangi' },
  { id: 'gulshan', name: 'Gulshan-e-Iqbal' },
  { id: 'saddar', name: 'Saddar' },
];

// Fake restaurants per location
const RESTAURANTS_BY_LOCATION = {
  dha: [
    { id: 'dha-1', name: 'Kolachi' },
    { id: 'dha-2', name: 'BBQ Tonight' },
    { id: 'dha-3', name: 'Cafe Flo' },
  ],
  malir: [
    { id: 'malir-1', name: 'Al-Madina Biryani' },
    { id: 'malir-2', name: 'Malir Broast' },
  ],
  north: [
    { id: 'north-1', name: 'Bundu Khan' },
    { id: 'north-2', name: 'Student Biryani' },
  ],
  scheme33: [
    { id: 's33-1', name: 'Ridan House of Mandi' },
    { id: 's33-2', name: 'Kababjees' },
  ],
  clifton: [
    { id: 'cl-1', name: 'Boat Basin Delights' },
    { id: 'cl-2', name: 'Pompei' },
    { id: 'cl-3', name: 'Xander’s' },
  ],
  korangi: [
    { id: 'ko-1', name: 'Korangi Nihari House' },
    { id: 'ko-2', name: 'Zamzama BBQ' },
  ],
  gulshan: [
    { id: 'gu-1', name: 'Food Point' },
    { id: 'gu-2', name: 'Hot N Spicy' },
  ],
  saddar: [
    { id: 'sa-1', name: 'Burns Road Karachi Biryani' },
    { id: 'sa-2', name: 'Sabri Nihari' },
  ],
};

// Fake DB (in-memory)
const REVIEWS_DB = [];

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const fetchLocations = async () => {
  await delay(800);
  return [...KARACHI_LOCATIONS];
};

export const fetchRestaurantsByLocation = async (locationId) => {
  await delay(700);
  return RESTAURANTS_BY_LOCATION[locationId] || [];
};

export const submitReview = async (reviewData) => {
  await delay(900);
  const newReview = {
    id: `rev-${Date.now()}`,
    ...reviewData,
    createdAt: new Date().toISOString(),
  };
  REVIEWS_DB.push(newReview);
  // eslint-disable-next-line no-console
  console.log('[MOCK DB] Review saved:', newReview);
  return { success: true, data: newReview };
};