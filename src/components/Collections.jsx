import React, { useState } from 'react';
import './Collections.css';
import CamisetaIcon from "../assets/camiseta-icon.svg";
import CamisetaHoverIcon from "../assets/camiseta-rosa.svg"; // Novo ícone para hover
import BoneIcon from "../assets/bone-icon.svg";
import BoneHoverIcon from "../assets/bone-rosa.svg"; // Novo ícone para hover
import FoneIcon from "../assets/fone-icon.svg";
import FoneHoverIcon from "../assets/fone-rosa.svg"; // Novo ícone para hover
import TenisIcon from "../assets/tenis-icon.svg";
import TenisHoverIcon from "../assets/tenis-rosa.svg"; // Novo ícone para hover
import CalcaIcon from "../assets/calca-icon.svg"; 
import CalcaHoverIcon from "../assets/calca-rosa.svg"; // Novo ícone para hover

const collectionsData = [
  { id: 1, name: "Camisetas", icon: CamisetaIcon, hoverIcon: CamisetaHoverIcon, link: "/products" },
  { id: 2, name: "Bonés", icon: BoneIcon, hoverIcon: BoneHoverIcon, link: "/products" },
  { id: 3, name: "Calças", icon: CalcaIcon, hoverIcon: CalcaHoverIcon, link: "/products" },
  { id: 4, name: "Headphones", icon: FoneIcon, hoverIcon: FoneHoverIcon, link: "/products" },
  { id: 5, name: "Tênis", icon: TenisIcon, hoverIcon: TenisHoverIcon, link: "/products" },
];

const Collections = () => {
  return (
    <div className="collections">
      <h2 className="collections-title">Coleções em destaque</h2>
      <div className="collections-list">
        {collectionsData.map((collection) => (
          <CollectionItem key={collection.id} collection={collection} />
        ))}
      </div>
    </div>
  );
};

const CollectionItem = ({ collection }) => {
  const [isHovered, setIsHovered] = useState(false); // Inicializando o estado de hover

  return (
    <div className="collection-item">
      <a 
        href={collection.link} 
        className="icon-link" 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="icon-circle">
          <img 
            src={isHovered ? collection.hoverIcon : collection.icon} 
            alt={`${collection.name} icon`} 
            className="icon-image"
          />
        </div>
      </a>
      <p className="collection-name2">{collection.name}</p>
    </div>
  );
};

export default Collections;
