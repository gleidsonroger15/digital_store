import React from "react";
import CustomCarousel from "../components/CustomCarousel";
import tennisImage1 from "../assets/tenis1.png";
import tennisImage2 from "../assets/tenis2.png";
import tennisImage3 from "../assets/tenis3.png";
import tennisImage4 from "../assets/tenis4.png";
import "./ImageGallery.css";
import { Link } from "react-router-dom";

const ImageGallery = () => {
  return (
    <div style={{ width: "100%" }}>
      <CustomCarousel>
        {/* Primeiro Slide */}
        <div className="slide">
          <div className="text-content2">
            <h6 className="orange">Melhores ofertas personalizadas</h6>
            <h1 className="textBanner">Queima de <br /> estoque Nike🔥</h1>
            <h6 className="descricaotenis">
              Consequat culpa exercitation mollit nisi excepteur do do tempor
              laboris eiusmod irure consectetur.
            </h6>
            <Link to="/products" className="offer-button" aria-label="Ver Ofertas Nike">
              Ver Ofertas
            </Link>
          </div>
          <img src={tennisImage1} alt="Tênis" className="slide-image" />
        </div>

        {/* Segundo Slide */}
        <div className="slide">
          <div className="text-content2">
            <h6 className="orange">Ofertas exclusivas sob medida para você</h6>
            <h1 className="textBanner">Descontos Imperdíveis 😍</h1>
            <h6 className="descricaotenis">
              Aproveite promoções exclusivas que vão transformar sua experiência de compra.
            </h6>
            <Link to="/products" className="offer-button" aria-label="Ver Ofertas Exclusivas">
              Ver Ofertas
            </Link>
          </div>
          <img src={tennisImage2} alt="Tênis" className="slide-image" />
        </div>

        {/* Terceiro Slide */}
        <div className="slide">
          <div className="text-content2">
            <h6 className="orange">Descontos personalizados que você vai amar</h6>
            <h1 className="textBanner">Não pode<br /> ficar de Fora! 👀</h1>
            <h6 className="descricaotenis">
              Ofertas imperdíveis que atendem às suas necessidades e desejos.
            </h6>
            <Link to="/products" className="offer-button" aria-label="Ver Ofertas Personalizadas">
              Ver Ofertas
            </Link>
          </div>
          <img src={tennisImage3} alt="Tênis" className="slide-image" />
        </div>

        {/* Quarto Slide */}
        <div className="slide">
          <div className="text-content2">
            <h6 className="orange">Ofertas incríveis feitas para o seu estilo</h6>
            <h1 className="textBanner">Preços Arrasadores! 🎊</h1>
            <h6 className="descricaotenis">
              Descubra produtos incríveis com descontos especiais que você adora.
            </h6>
            <Link to="/products" className="offer-button" aria-label="Ver Ofertas Arrasadoras">
              Ver Ofertas
            </Link>
          </div>
          <img src={tennisImage4} alt="Tênis" className="slide-image" />
        </div>
      </CustomCarousel>
    </div>
  );
};

export default ImageGallery;
