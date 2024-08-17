import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";

function Navbar() {
  return (
    <>
      <nav>
        <ul className="flex justify-between items-center py-2 px-2 md:px-3 bg-gray-100">
          <div>
            <li className="font-bold text-lg md:text-xl">
              <Link to="/">E-Commerce</Link>
            </li>
          </div>

          <div className="flex items-center gap-3">
            <li>
              <input
                type="search"
                placeholder="Search..."
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
      </nav>
    </>
  );
}

export default Navbar;
