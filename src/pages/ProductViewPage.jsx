import { useLoaderData } from "react-router-dom";
import BuyBox from "../components/BuyBox";
import { useEffect, useState } from "react";
import ProductOptions from "../components/ProductOptions";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import Gallery from "../components/Gallery";
import ProdutoAlta from "../assets/produto-alta.svg"; // Importe a imagem

const products = [
  {
    id: 1,
    name: "Tenis 1",
    image: ProdutoAlta,
    reference: "123456",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc nunc.",
    stars: 4,
    rating: 24,
    images: [
      { "original": ProdutoAlta, "thumbnail": ProdutoAlta },
      { "original": ProdutoAlta, "thumbnail": ProdutoAlta },
      { "original": ProdutoAlta, "thumbnail": ProdutoAlta },
      { "original": ProdutoAlta, "thumbnail": ProdutoAlta },
      { "original": ProdutoAlta, "thumbnail": ProdutoAlta }

    ],
    price: "200",
    priceDiscount: "149.9",
    options: [
      {
        id: 1,
        name: "Cores",
        type: "color",
        shape: "circle",
        values: [
          { id: 1, name: "Azul", value: "#0000CD" },
          { id: 2, name: "Verde", value: "#008B8B" },
          { id: 3, name: "Marron", value: "#8B4513" },
          { id: 4, name: "Preto", value: "#000000" },
          { id: 5, name: "Branco", value: "#FFFFFF" },
          { id: 6, name: "Vermelho", value: "#DC143C" },
        ],
      },
      {
        id: 2,
        name: "Tamanhos",
        type: "size",
        shape: "square",
        values: [
          { id: 1, name: "38" },
          { id: 2, name: "40" },
          { id: 3, name: "42" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Tenis 1",
    image: ProdutoAlta,
    reference: "123456",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc nunc.",
    stars: 4,
    rating: 24,
    images: [
      { "original": ProdutoAlta, "thumbnail": ProdutoAlta },
      { "original": ProdutoAlta, "thumbnail": ProdutoAlta },
      { "original": ProdutoAlta, "thumbnail": ProdutoAlta },
      { "original": ProdutoAlta, "thumbnail": ProdutoAlta },
      { "original": ProdutoAlta, "thumbnail": ProdutoAlta }

    ],
    price: "200",
    priceDiscount: "149.9",
    options: [
      {
        id: 1,
        name: "Cores",
        type: "color",
        shape: "circle",
        values: [
          { id: 1, name: "Azul", value: "#0000CD" },
          { id: 2, name: "Verde", value: "#008B8B" },
          { id: 3, name: "Marron", value: "#8B4513" },
          { id: 4, name: "Preto", value: "#000000" },
          { id: 5, name: "Branco", value: "#FFFFFF" },
          { id: 6, name: "Vermelho", value: "#DC143C" },
        ],
      },
      {
        id: 2,
        name: "Tamanhos",
        type: "size",
        shape: "square",
        values: [
          { id: 1, name: "38" },
          { id: 2, name: "40" },
          { id: 3, name: "42" },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Tenis 1",
    image: ProdutoAlta,
    reference: "123456",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc nunc.",
    stars: 4,
    rating: 24,
    images: [
      { "original": ProdutoAlta, "thumbnail": ProdutoAlta },
      { "original": ProdutoAlta, "thumbnail": ProdutoAlta },
      { "original": ProdutoAlta, "thumbnail": ProdutoAlta },
      { "original": ProdutoAlta, "thumbnail": ProdutoAlta },
      { "original": ProdutoAlta, "thumbnail": ProdutoAlta }

    ],
    price: "200",
    priceDiscount: "149.9",
    options: [
      {
        id: 1,
        name: "Cores",
        type: "color",
        shape: "circle",
        values: [
          { id: 1, name: "Azul", value: "#0000CD" },
          { id: 2, name: "Verde", value: "#008B8B" },
          { id: 3, name: "Marron", value: "#8B4513" },
          { id: 4, name: "Preto", value: "#000000" },
          { id: 5, name: "Branco", value: "#FFFFFF" },
          { id: 6, name: "Vermelho", value: "#DC143C" },
        ],
      },
      {
        id: 2,
        name: "Tamanhos",
        type: "size",
        shape: "square",
        values: [
          { id: 1, name: "38" },
          { id: 2, name: "40" },
          { id: 3, name: "42" },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Tenis 1",
    image: ProdutoAlta,
    reference: "123456",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc nunc.",
    stars: 4,
    rating: 24,
    images: [
      { "original": ProdutoAlta, "thumbnail": ProdutoAlta },
      { "original": ProdutoAlta, "thumbnail": ProdutoAlta },
      { "original": ProdutoAlta, "thumbnail": ProdutoAlta },
      { "original": ProdutoAlta, "thumbnail": ProdutoAlta },
      { "original": ProdutoAlta, "thumbnail": ProdutoAlta }

    ],
    price: "200",
    priceDiscount: "149.9",
    options: [
      {
        id: 1,
        name: "Cores",
        type: "color",
        shape: "circle",
        values: [
          { id: 1, name: "Azul", value: "#0000CD" },
          { id: 2, name: "Verde", value: "#008B8B" },
          { id: 3, name: "Marron", value: "#8B4513" },
          { id: 4, name: "Preto", value: "#000000" },
          { id: 5, name: "Branco", value: "#FFFFFF" },
          { id: 6, name: "Vermelho", value: "#DC143C" },
        ],
      },
      {
        id: 2,
        name: "Tamanhos",
        type: "size",
        shape: "square",
        values: [
          { id: 1, name: "38" },
          { id: 2, name: "40" },
          { id: 3, name: "42" },
        ],
      },
    ],
  },
]

const ProductViewPage = () => {
  const id = useLoaderData();
  const [product, setProduct] = useState(null);
  const [optionsSelected, setOptionsSelected] = useState([]);

  useEffect(() => {
    const foundProduct = products.find((prod) => prod.id == id);
    if (foundProduct) {
      setProduct(foundProduct);
    }
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="flex flex-col gap-8">
      {product ? (
        <>
          <div className="flex justify-between flex-col md:flex-row gap-8 w-full">
            <Gallery images={product.images} width={1400} />
            <BuyBox
              name={product.name}
              description={product.description}
              price={product.price}
              priceDiscount={product.priceDiscount}
              stars={product.stars}
              rating={product.rating}
              reference={product.reference}
            >
              {product.options.map((option) => (
                <ProductOptions
                  key={option.id}
                  option={option}
                  optionsSelected={optionsSelected}
                  setOptionsSelected={setOptionsSelected}
                />
              ))}
            </BuyBox>
          </div>
          <hr />
          <Section
            title="Produtos relacionados"
            titleAlign=""
            link={{ text: "Produtos", href: "/products" }}
          >
            <ProductListing products={products.slice(0, 4)} /> {/* Apenas os 4 primeiros produtos */}
          </Section>
        </>
      ) : (
        <div className="text-center">Produto não encontrado.</div>
      )}
    </div>
  );
};

export default ProductViewPage;
