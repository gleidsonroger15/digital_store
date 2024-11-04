import React from "react";
import PropTypes from "prop-types";
import ProductCard from "../components/ProductCard";
import "./ProductListing.css";

const ProductListing = ({ products }) => {
  return (
    <div className="grid xl:grid-cols-4 sm:grid-cols-3 gap-4">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          id={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          priceDiscount={product.priceDiscount}
          showDiscount={index < 2}
          category={product.category}
        />
      ))}
    </div>
  );
};

ProductListing.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      priceDiscount: PropTypes.number,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductListing;
