import { useEffect, useState } from "react";
import getProducts from "../../services/fetchProductsApi";
import ProductsItem from "./ProductsItem";
import Loader from "../../common/Loader";

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchProducts() {
      setIsLoading(true);

      try {
        const data = await getProducts();
        setProducts(data.products);
        // console.log(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (isLoading) return <Loader />;

  return (
    <>
      <section className="flex flex-wrap gap-2 md:gap-3">
        {products.map((product) => (
          <ProductsItem key={product.id} product={product} />
        ))}
      </section>
    </>
  );
}

export default Products;
