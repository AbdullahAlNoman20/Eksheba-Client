import ProductCard from "../Components/ProductCard";
import { useLoaderData } from "react-router-dom";

const Products = () => {
  const products = useLoaderData();
//   console.log(products);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3  my-10 bg-red-50">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
