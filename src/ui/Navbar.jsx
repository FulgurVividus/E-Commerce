import { Link, useLocation } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FilteredProducts from "../features/products/FilteredProducts";

function Navbar() {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();

  const isBasketPage = location.pathname === "/basket";

  // exact products on each page
  const productsPaginated = useSelector(
    (state) => state.products.productsPaginated
  );

  // searching functionality
  function handleInputChange(e) {
    const search = e.target.value;
    setSearch(search);

    const filteredProducts = productsPaginated.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  }

  // some resets
  useEffect(
    function () {
      setSearch("");
      setFilteredProducts([]);
    },
    [location]
  );

  return (
    <>
      <nav>
        <ul className="flex justify-between items-center py-2 px-2 md:px-3 bg-gray-100">
          <div>
            <li className="font-bold text-lg md:text-xl">
              <Link to="/">E-Commerce</Link>
            </li>
          </div>

          <div className="flex flex-col md:flex-row items-end md:items-center gap-3">
            <li>
              <input
                type="search"
                placeholder="Search..."
                value={search}
                onChange={handleInputChange}
                className={
                  isBasketPage
                    ? "hidden"
                    : "border-2 border-gray-400 rounded-2xl py-1 px-1 md:px-2 focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50  text-black duration-300"
                }
              />
            </li>

            <li className="font-semibold text-sm md:text-base">
              <Link to="/basket" className="flex items-center gap-2">
                <span>Basket</span>
                <BsCart4 />
              </Link>
            </li>
          </div>
        </ul>

        {/* Searched Products */}
        <ul>
          {search && filteredProducts.length > 0 && (
            <>
              <FilteredProducts
                filteredProducts={filteredProducts}
                search={search}
              />
            </>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
