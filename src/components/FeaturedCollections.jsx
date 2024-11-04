// src/components/FeaturedCollections.jsx
import React from 'react';
import './FeaturedCollections.css';
import ColecaoCamiseta from "../assets/Colecao-camiseta.svg";
import ColecaoTenis from "../assets/Colecao-tenis.svg";
import ColecaoFone from "../assets/Colecao-fone.svg";

const FeaturedCollections = () => {
  const collections = [
    {
      id: 1,
      discount: '30% OFF',
      name: 'Novo drop Supreme',
      image: ColecaoCamiseta,
      link: '#',
    },
    {
      id: 2,
      discount: '30% OFF',
      name: 'Coleção Adidas',
      image: ColecaoTenis,
      link: '#',
    },
    {
      id: 3,
      discount: '30% OFF',
      name: 'Novo Beats Bass',
      image: ColecaoFone,
      link: '#',
    },
  ];

  return (
    <section className="featured-collections">
      <h2 className="section-title">Coleções em Destaque</h2>
      <div className="collection-container">
        {collections.map((collection) => (
          <div key={collection.id} className="collection-card">
            <div className="discount-tag">{collection.discount}</div>
            <div className="card-content">
              <div className="text-content1">
                <h3 className="collection-name">{collection.name}</h3>
                <a href={collection.link} className="buy-button">Comprar</a>
              </div>
              <img src={collection.image} alt={collection.name} className="product-image" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCollections;
