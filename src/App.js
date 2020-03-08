import React, { useEffect, useState } from "react";
import ProductOverview from "./ProductOverview/index";
import ReviewsContainer from "./ReviewsContainer";
import { ReviewProvider } from "./review.context";
import { RatingProvider } from "./ratingFilter.context";

import "./App.scss";

function App() {
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch("/api/product/123", { method: "GET" })
      .then(res => res.json())
      .then(response => {
        setProduct(response);
      });
  }, []);

  return (
    <div className="App" id="main">
      <div className="header" />
      <div className="body">
        <ReviewProvider>
          <RatingProvider>
            <ProductOverview
              title={product.title}
              seller={product.seller}
              description={product.description}
              details={product.details}
            />
            <ReviewsContainer />
          </RatingProvider>
        </ReviewProvider>
      </div>
    </div>
  );
}

export default App;
