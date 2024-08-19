import { useEffect, useState } from "react";
import getProducts from "../../services/fetchProductsApi";
import ProductsItem from "./ProductsItem";
import Loader from "../../common/Loader";
import Pagination from "../../ui/Pagination";
import { useDispatch } from "react-redux";
import { addProductsPaginated } from "./productsSlice";

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(12);

  const lastItemIndex = currentPage * productsPerPage;
  const firstItemIndex = lastItemIndex - productsPerPage;
  const thisPageItems = products.slice(firstItemIndex, lastItemIndex);

  function handlePagination(pageNumber) {
    setCurrentPage(pageNumber);
  }

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

  useEffect(
    function () {
      if (thisPageItems.length > 0) {
        dispatch(addProductsPaginated(thisPageItems));
      }
    },
    [dispatch, thisPageItems, currentPage, productsPerPage, products]
  );

  if (isLoading) return <Loader />;

  return (
    <>
      <div className="flex flex-col justify-between items-center">
        <section className="flex flex-wrap gap-2 md:gap-3">
          {thisPageItems.map((product) => (
            <ProductsItem key={product.id} product={product} />
          ))}
        </section>

        <section className="mt-10">
          <Pagination
            length={products.length}
            productsPerPage={productsPerPage}
            handlePagination={handlePagination}
            currentPage={currentPage}
          />
        </section>
      </div>
    </>
  );
}

export default Products;
