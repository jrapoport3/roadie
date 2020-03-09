import React, { useState, useContext } from "react";
import { ReviewContext } from "../review.context";

import "./index.scss";

const ReviewForm = ({ closeAction, handleSubmit }) => {
  const { reviews, updateReviews } = useContext(ReviewContext);

  const [rating, setRatng] = useState(1);
  const [user, setUser] = useState("");
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [error, setError] = useState(null);

  const validateForm = () => {
    let errorMsg = "";
    if (!user) errorMsg = "Name is required.";
    if (!title) errorMsg = "Title is required.";
    if (!review) errorMsg = "Review is required.";
    return errorMsg;
  };

  const onSubmit = event => {
    event.preventDefault();
    const errorMsg = validateForm();
    if (!errorMsg) {
      const today = new Date();
      const date = `${today.getMonth() + 1}/${today.getDate()}/${today
        .getFullYear()
        .toString()
        .substring(2)}`;
      const id = Math.floor(Math.random() * 100);
      updateReviews(
        [{ rating: parseInt(rating), user, title, review, date, id }].concat(
          reviews
        )
      );
      handleSubmit();
    } else {
      setError(errorMsg);
    }
  };

  return (
    <>
      <h1 className="review-header">Add Review</h1>
      <form onSubmit={onSubmit}>
        {error && <div className="review-form-error">{error}</div>}
        <div>Rating</div>
        <select
          className="review-form-rating"
          onChange={e => setRatng(e.target.value)}
        >
          <option value="1">One star</option>
          <option value="2">Two star</option>
          <option value="3">Three star</option>
          <option value="4">Four star</option>
          <option value="5">Five star</option>
        </select>
        <div>Your name</div>
        <input
          className="review-form-field"
          type="text"
          name="user"
          value={user}
          placeholder="Enter text here..."
          onChange={e => setUser(e.target.value)}
        />

        <div>Review title</div>
        <input
          className="review-form-field"
          type="text"
          name="title"
          value={title}
          placeholder="Enter text here..."
          onChange={e => setTitle(e.target.value)}
        />

        <div>Write your review below</div>
        <textarea
          className="review-form-field form-field-large"
          type="text"
          name="review"
          value={review}
          placeholder="Enter text here..."
          onChange={e => setReview(e.target.value)}
        />

        <div className="review-form-buttons">
          <button className="button button-secondary" onClick={closeAction}>
            Cancel
          </button>
          <input
            className="button button-primary"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </>
  );
};

export default ReviewForm;
