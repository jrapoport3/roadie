import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import ReviewForm from "../ReviewForm/index";
import * as image from "../product-image.jpg";
import "./index.scss";

const ProductOverview = ({ title, seller, description, details }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    Modal.setAppElement("#main");
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const submitForm = () => {
    setModalOpen(false);
  };

  return (
    <div className="product-overview">
      <img
        src={image}
        alt="Roadie Software Box"
        className="product-overview-image"
      />
      <div>
        <h1 className="product-overview-title">{title}</h1>
        <div className="product-overview-seller">
          by <strong>{seller}</strong>
        </div>
        <div className="product-overview-description">
          {description}
          {details && (
            <ul>
              {details.map(detail => (
                <li key={detail.id}>{detail.content}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="product-overview-buttons">
          <button className="button button-secondary" onClick={openModal}>
            Leave Review
          </button>
          <button className="button button-primary">Add to Cart</button>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            className="review-modal"
            overlayClassName="review-modal-overlay"
          >
            <ReviewForm closeAction={closeModal} handleSubmit={submitForm} />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
