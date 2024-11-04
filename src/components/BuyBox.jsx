import React from "react";
import StarIcon from "./icons/StarIcon";

const BuyBox = ({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
}) => {
  // Função para converter o valor em moeda
  const convertToCurrency = (value) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <div className="flex-1 flex flex-col gap-4">
      <div className="grid gap-0.5">
        <h1 className="text-4xl font-bold">{name}</h1>
        <p className="text-md text-darkgray3">REF: {reference}</p>
      </div>
      <div className="flex items-center gap-2">
        <span className="flex items-center gap-2">
          {stars} <StarIcon className="mb-0.5 stroke-warning h-4 w-4" />
        </span>
        <span>({rating} avaliações)</span>
      </div>
      <div className="flex items-center gap-3">
        {priceDiscount && (
          <span className="font-semibold text-4xl">
            {convertToCurrency(priceDiscount)}
          </span>
        )}
        <span
          className={`${
            priceDiscount
              ? "text-darkgray3 line-through text-sm"
              : "font-semibold text-4xl"
          }`}
        >
          {convertToCurrency(price)}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-darkgray3 font-semibold">Descrição do produto:</h3>
        <p className="text-md font-normal">{description}</p>
      </div>
      {children}
      <button className="text-2xl btn btn-primary lg:w-2/3 w-full">
        Comprar
      </button>
    </div>
  );
};

export default BuyBox;
