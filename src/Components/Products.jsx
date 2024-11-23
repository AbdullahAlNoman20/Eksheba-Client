import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("Products.json")
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, []);

  return (
    <div>
      <section className="grid grid-cols-1 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.product_id} product={product}></ProductCard>
        ))}
      </section>
    </div>
  );
};

export default Products;
