import React from "react";
import Review from "../Review";
import ReviewsSummary from "../ReviewsSummary";

import "./index.scss";

const ReviewsContainer = ({ reviews }) => {
  const reviewsList = reviews ? reviews.map(review => <Review {...review} />) : '';

  return (
    <React.Fragment>
      <h1>Customer Reviews</h1>
      <div className="customer-reviews">
        <ReviewsSummary />
        <div className="reviews-list">{reviewsList}</div>
      </div>
    </React.Fragment>
  );
};

export default ReviewsContainer;
