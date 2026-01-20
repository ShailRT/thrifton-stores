import { ProductsType } from "@/types";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import Link from "next/link";
import Filter from "./Filter";

// TEMPORARY
const products: ProductsType = [
  {
    id: 1,
    name: "Vintage Cream Jacket",
    shortDescription:
      "Vintage Red Oak Sportswear windbreaker jacket in a tan and maroon color-block pattern",
    description:
      "Vintage Red Oak Sportswear windbreaker jacket in a tan and maroon color-block pattern. Features a full-zip front, elastic cuffs, and a stand-up collar. Made from lightweight nylon with a polyester lining for comfortable layering. Perfect for transitional weather and casual streetwear looks.",
    price: 999,
    sizes: ["l"],
    colors: ["red"],
    images: {
      red: "/products/redoak2.jpg",
      // purple: "/products/1p.png",
      // green: "/products/1gr.png",
    },
  },
  {
    id: 2,
    name: "Adidas Sport Jacket",
    shortDescription: "Adidas sport FORMOTION LIGHT WEIGHT WINTER JACKET",
    description:
      "Adidas sport FORMOTION LIGHT WEIGHT WINTER JACKET. Features a full-zip front, elastic cuffs, and a stand-up collar. Made from lightweight nylon with a polyester lining for comfortable layering. Perfect for transitional weather and casual streetwear looks.",
    price: 999,
    sizes: ["l"],
    colors: ["orange"],
    images: { orange: "/products/adi-orng.jpg" },
  },
  {
    id: 3,
    name: "Sgotins Puffer Jacket",
    shortDescription:
      "Sgotins color-block puffer jacket with a cozy fleece hood — lightweight warmth, clean street style, winter-ready.",
    description:
      "Sgotins color-block puffer jacket with a cozy fleece hood — lightweight warmth, clean street style, winter-ready.",
    price: 999,
    sizes: ["s", "m", "l", "xl"],
    colors: ["blue"],
    images: { blue: "/products/blue-green.jpg" },
  },
  {
    id: 4,
    name: "Ellesse Sunflower Maroon Jacket",
    shortDescription:
      "A vintage, often reversible, anorak-style pullover with a hood",
    description:
      "A vintage, often reversible, anorak-style pullover with a hood, made from nylon and polyester materials and featuring the signature embroidered brand badges.",
    price: 999,
    sizes: ["l"],
    colors: ["maroon"],
    images: { maroon: "/products/sunflower.jpg" },
  },
];

const ProductList = ({
  category,
  params,
}: {
  category: string;
  params: "homepage" | "products";
}) => {
  return (
    <div className="w-full">
      <Categories />
      {params === "products" && <Filter />}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Link
        href={category ? `/products/?category=${category}` : "/products"}
        className="flex justify-end mt-4 underline text-sm text-gray-500"
      >
        View all products
      </Link>
    </div>
  );
};

export default ProductList;
