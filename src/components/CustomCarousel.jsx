// src/components/CustomCarousel.js
import React, { useState, useEffect } from 'react';
import './CustomCarousel.css'; // Certifique-se de que o CSS está importado

const CustomCarousel = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = React.Children.count(children);

    // Função para atualizar o índice do slide
    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    // Configura o intervalo para mudar automaticamente a cada 15 segundos
    useEffect(() => {
        const interval = setInterval(goToNextSlide, 3000);

        // Limpa o intervalo quando o componente é desmontado
        return () => clearInterval(interval);
    }, [totalSlides]);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="carousel-container">
            <div className="carousel">
                {React.Children.map(children, (child, index) => (
                    <div style={{ display: index === currentIndex ? 'block' : 'none' }}>
                        {child}
                    </div>
                ))}
            </div>
            <div className="dots-container">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <span 
                        key={index} 
                        className={`dot ${index === currentIndex ? 'active' : ''}`} 
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default CustomCarousel;
