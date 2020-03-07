import React, {useEffect, useState} from 'react';
import ProductOverview from './ProductOverview/index';
import ReviewsContainer from './ReviewsContainer';

import './App.scss';

function App() {
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch('/api/getProduct', {method: 'GET'})
      .then(res => res.json())
      .then(response => {
        console.log('response ',response);
        setProduct(response);
      });
  }, []);

  return (
    <div className="App">
      <div className="header" />
      <div className="body">
        <ProductOverview 
          title={product.title} 
          seller={product.seller}
          description={product.description}
        />
        <ReviewsContainer reviews={product.reviews}/>
      </div>
    </div>
  );
}

export default App;
