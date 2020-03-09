import React, { createContext, useState } from "react";

const ReviewContext = createContext({
  reviews: [],
  updateReviews: () => {}
});

const ReviewProvider = ({ children }) => {
  const updateReviews = reviews => {
    setReviewState(prevState => {
      return {
        ...prevState,
        reviews
      };
    });
  };

  const initialState = {
    reviews: [],
    updateReviews
  };

  const [reviewState, setReviewState] = useState(initialState);

  return (
    <ReviewContext.Provider value={reviewState}>
      {children}
    </ReviewContext.Provider>
  );
};

export { ReviewContext, ReviewProvider };
