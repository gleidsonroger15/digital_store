// src/pages/HomePage.jsx
import React from "react";
import ImageGallery from "../components/ImageGallery";
import ProductListing from "../components/ProductListing";
import Section from "../components/Section";
import FeaturedCollections from "../components/FeaturedCollections";
import Collections from "../components/Collections";
import SpecialOffer from "../components/SpecialOffer"; // Importando o componente de oferta especial
import ProdutoAlta from "../assets/produto-alta.svg"; // Substitua pelo caminho real da sua imagem

const products = [
  {
    id: 1,
    name: "K-Swiss V8 - Masculino",
    image: ProdutoAlta,
    price: 200,
    priceDiscount: 100,
    category: "Tênis Masculino"
  },
  {
    id: 2,
    name: "K-Swiss V8 - Masculino",
    image: ProdutoAlta,
    price: 200,
    priceDiscount: 100,
    category: "Tênis Masculino"
  },
  {
    id: 3,
    name: "K-Swiss V8 - Masculino",
    image: ProdutoAlta,
    price: 200,
    priceDiscount: 100,
    category: "Tênis Masculino"
  },
  {
    id: 4,
    name: "K-Swiss V8 - Masculino",
    image: ProdutoAlta,
    price: 200,
    priceDiscount: 100,
    category: "Tênis Masculino"
  },
  {
    id: 5,
    name: "K-Swiss V8 - Masculino",
    image: ProdutoAlta,
    price: 200,
    priceDiscount: 100,
    category: "Tênis Masculino"
  },
  {
    id: 6,
    name: "K-Swiss V8 - Masculino",
    image: ProdutoAlta,
    price: 200,
    priceDiscount: 100,
    category: "Tênis Masculino"
  },
  {
    id: 7,
    name: "K-Swiss V8 - Masculino",
    image: ProdutoAlta,
    price: 200,
    priceDiscount: 100,
    category: "Tênis Masculino"
  },
  {
    id: 8,
    name: "K-Swiss V8 - Masculino",
    image: ProdutoAlta,
    price: 200,
    priceDiscount: 100,
    category: "Tênis Masculino"
  },
];

const HomePage = () => {
  return (
    <div className="flex flex-col gap-4">
     
      <ImageGallery />

      <Section>
        <FeaturedCollections />
      </Section>
      <Section>
        <Collections />
      </Section>

      
      <div className="section-header">
        <h1 className="section-title">Produtos em alta</h1>
        <a href="#" className="view-all-link">
          Ver todos <span className="arrow">→</span>
        </a>
      </div>
      <ProductListing products={products} />

      {/* Componente de oferta especial */}
      <SpecialOffer />
    </div>
  );
};

export default HomePage;
