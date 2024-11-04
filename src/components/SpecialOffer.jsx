// src/components/SpecialOffer.js
import React from 'react';
import './SpecialOffer.css';
import OfertaEspecial from "../assets/oferta-especial.svg"
const SpecialOffer = () => {
  return (
    <div className="special-offer">
      <div className="offer-image">
        <img src={OfertaEspecial} alt="Air Jordan edição de colecionador" />
      </div>
      <div className="offer-details">
        <span className="offer-label">Oferta especial</span>
        <h2>Air Jordan edição de colecionador</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
        <button className="offer-button">Ver Oferta</button>
      </div>
    </div>
  );
};

export default SpecialOffer;
