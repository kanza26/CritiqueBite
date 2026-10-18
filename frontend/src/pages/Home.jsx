// src/pages/Home.jsx
import React, { useState, Suspense, lazy } from 'react';
import LocationSelector from '../components/LocationSelector';
import RestaurantSelector from '../components/RestaurantSelector';

// Code splitting: ReviewForm is lazy-loaded (only loads when needed)
const ReviewForm = lazy(() => import('../components/ReviewForm'));

const Home = () => {
  const [locationId, setLocationId] = useState('');
  const [restaurantId, setRestaurantId] = useState('');
  const [lastSubmitted, setLastSubmitted] = useState(null);

  const handleLocationChange = (id) => {
    setLocationId(id);
    setRestaurantId(''); // reset restaurant when location changes
    setLastSubmitted(null);
  };

  const handleRestaurantChange = (id) => {
    setRestaurantId(id);
    setLastSubmitted(null);
  };

  return (
    <div className="container">
      <header className="hero">
        <h1>🍽️ Welcome to Restaurant Review</h1>
        <p>
          Let's help you find the best next spot for food & seating — by
          sharing genuine reviews.
        </p>
      </header>

      <section className="card">
        <LocationSelector
          value={locationId}
          onChange={handleLocationChange}
        />

        {locationId && (
          <RestaurantSelector
            locationId={locationId}
            value={restaurantId}
            onChange={handleRestaurantChange}
          />
        )}

        {locationId && restaurantId && (
          <Suspense fallback={<p className="loading">Loading form...</p>}>
            <ReviewForm
              locationId={locationId}
              restaurantId={restaurantId}
              onSuccess={(data) => setLastSubmitted(data)}
            />
          </Suspense>
        )}

        {lastSubmitted && (
          <div className="submitted">
            🎉 Thanks! You reviewed restaurant <b>{restaurantId}</b> in{' '}
            <b>{locationId}</b>.
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;