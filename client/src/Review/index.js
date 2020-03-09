import React from "react";
import StarRating from "../StarRating/index";

import "./index.scss";

const Review = ({ title, user, date, rating, review }) => (
  <div className="review">
    <h4 className="review-title">{title}</h4>
    <div className="review-subtitle">
      by {user} on {date}
    </div>
    <div className="review-rating">
      <StarRating rating={rating} />
    </div>
    <div className="review-content">{review}</div>
  </div>
);

export default Review;
