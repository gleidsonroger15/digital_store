// src/components/ProductCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ id, image, name, price, priceDiscount, showDiscount, category }) => {
  // Verifica se price e priceDiscount são números
  const validPrice = typeof price === 'number' ? price : 0;
  const validPriceDiscount = typeof priceDiscount === 'number' ? priceDiscount : validPrice;

  return (
    <Link to={`/products/${id}`} className="product-card-container">
      <div className="product-card">
        {showDiscount && priceDiscount && <div className="discount-tag2">30% OFF</div>}
        <img src={image} alt={name} className="product-image2" />
      </div>
      <div className="product-info-outside">
        <span className="product-category">{category}</span>
        <h3 className="product-name">{name}</h3>
        <div className="product-pricing">
          {validPriceDiscount < validPrice ? (
            <>
              <span className="product-price original">{`R$ ${validPrice.toFixed(2)}`}</span>
              <span className="product-price discount">{`R$ ${validPriceDiscount.toFixed(2)}`}</span>
            </>
          ) : (
            <span className="product-price">{`R$ ${validPrice.toFixed(2)}`}</span>
          )}
        </div>
      </div>
    </Link>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  priceDiscount: PropTypes.number,
  showDiscount: PropTypes.bool,
  category: PropTypes.string.isRequired,
};

export default ProductCard;
