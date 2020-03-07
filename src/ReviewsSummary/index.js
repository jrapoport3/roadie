import React from 'react';
import StarRating from '../StarRating/index';

import './index.scss';

const ReviewsSummary = () => {
    const buildFilter = (rating, percent) => {
        let divStyle = {
            width: percent + '%'
        }

        return (
            <tr className="review-filter">
                <td><a className="review-filter-link">{rating} star</a></td>
                <td>
                    <div className="percentage-bar">
                        <div className="percentage-bar-filler" style={divStyle}/>
                    </div>
                </td>
            </tr>
        )
    }

    return (
        <div className="review-summary">
            <StarRating rating={4}/>
            <span> 4 out of 5</span>
            <div className="review-count">4 reviews</div>
            <table>
               {buildFilter(5, 30)}
               {buildFilter(4, 43)}
               {buildFilter(3, 19)}
               {buildFilter(2, 10)}
               {buildFilter(1, 8)}
            </table>
        </div>
    )
};

export default ReviewsSummary;