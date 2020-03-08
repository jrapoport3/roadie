import React, { useContext, useEffect } from "react";
import Review from "../Review";
import ReviewsSummary from "../ReviewsSummary";
import { RatingContext } from "../ratingFilter.context";
import { ReviewContext } from "../review.context";

import "./index.scss";

const ReviewsContainer = () => {
  const { rating } = useContext(RatingContext);
  const { reviews, updateReviews } = useContext(ReviewContext);

  useEffect(() => {
    fetch("/api/reviews/123", { method: "GET" })
      .then(res => res.json())
      .then(response => {
        updateReviews(response);
      });
  }, [updateReviews]);

  const reviewsList = reviews
    ? reviews
        .filter(review => (rating ? review.rating === rating : review))
        .map(review => <Review key={review.id} {...review} />)
    : "";

  return (
    <>
      <h1>Customer Reviews</h1>
      <div className="customer-reviews">
        <ReviewsSummary />
        <div className="reviews-list">{reviewsList}</div>
      </div>
    </>
  );
};

export default ReviewsContainer;
