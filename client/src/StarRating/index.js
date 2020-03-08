import React from 'react';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as filledStart } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';

import './index.scss';

const StarRating = ({ rating }) => (
    <Rating 
        readonly 
        initialRating={rating}
        emptySymbol={<FontAwesomeIcon icon={faStar} className="star" />}
        fullSymbol={<FontAwesomeIcon icon={filledStart} className="star" />}
    />
)

export default StarRating;