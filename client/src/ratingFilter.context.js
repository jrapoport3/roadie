import React, { createContext, useState } from 'react';

const RatingContext = createContext({
  rating: 0,
  updateRating: () => {}
});

const RatingProvider = ({ children }) => {
  
  const updateRating = (rating) => {
    setRatingState((prevState) => {
      return {
        ...prevState,
        rating
      }
    });
  }

  const initialState = {
    rating: 0,
    updateRating
  }

  const [ratingState, setRatingState] = useState(initialState);

  return (
    <RatingContext.Provider value={ratingState}>
      {children}
    </RatingContext.Provider>
  )
}

export { RatingContext, RatingProvider};