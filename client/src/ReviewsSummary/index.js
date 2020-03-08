import React, { useContext } from "react";
import StarRating from "../StarRating/index";
import { RatingContext } from "../ratingFilter.context";
import { ReviewContext } from "../review.context";

import "./index.scss";

const ReviewsSummary = () => {
  const { updateRating } = useContext(RatingContext);
  const { reviews } = useContext(ReviewContext);

  const reviewCount = reviews.length;
  const sum = reviews ? reviews.reduce((sum, review) => sum + review.rating, 0) : 0;
  const reviewAvg = (sum / reviewCount).toFixed(1);

  const buildFilter = rating => {
    let percent = ((reviews.filter(review => review.rating === rating).length) / reviewCount) * 100;

    let divStyle = {
      width: percent + "%"
    };

    return (
      <tr className="review-filter">
        <td>
          <div
            className="review-filter-link"
            onClick={() => updateRating(rating)}
          >
            {rating} star
          </div>
        </td>
        <td>
          <div className="percentage-bar">
            <div className="percentage-bar-filler" style={divStyle} />
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="review-summary">
      <StarRating rating={reviewAvg} />
      <span> {reviewAvg} out of 5</span>
      <div className="review-count">{reviewCount} reviews</div>
      <table>
        <tbody>
          {buildFilter(5)}
          {buildFilter(4)}
          {buildFilter(3)}
          {buildFilter(2)}
          {buildFilter(1)}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewsSummary;
