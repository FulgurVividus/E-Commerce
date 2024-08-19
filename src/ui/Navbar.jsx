import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FilteredProducts from "../features/products/FilteredProducts";

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [search, setSearch] = useState("");

  // exact products on each page
  const productsPaginated = useSelector(
    (state) => state.products.productsPaginated
  );
  // console.log(productsPaginated);

  const filteredProducts = () => {
    return search
      ? productsPaginated.filter((product) =>
          product.title.toLowerCase().includes(search.toLowerCase())
        )
      : productsPaginated;
  };

  useEffect(function () {
    window.addEventListener("scroll", function () {
      setScroll(window.scrollY > 10);
    });
  });

  return (
    <>
      <nav className={`${scroll ? "sticky" : ""}`}>
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
                onChange={(e) => setSearch(e.target.value)}
                className="border-2 border-gray-400 rounded-2xl py-1 px-1 md:px-2 focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50  text-black duration-300"
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

        {/* Filtered Products */}
        {search && (
          <ul>
            {filteredProducts.length > 0 ? (
              <FilteredProducts filteredProducts={filteredProducts} />
            ) : (
              <li>No products found</li>
            )}
          </ul>
        )}
      </nav>
    </>
  );
}

export default Navbar;
