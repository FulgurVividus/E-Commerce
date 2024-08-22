import { useDispatch, useSelector } from "react-redux";
import { clearBasket } from "./basketSlice";
import BasketItem from "./BasketItem";

function Basket() {
  const addedProducts = useSelector((state) => state.basket.basket);
  const isEmpty = addedProducts.length === 0;
  const dispatch = useDispatch();
  // console.log(addedProducts);

  return (
    <>
      <section className="py-2 px-2 md:px-3">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-base md:text-lg font-medium">
            {isEmpty ? "Your basket is empty..." : "Your Basket:"}
          </h1>

          <button
            className={
              isEmpty
                ? "hidden"
                : "bg-black text-white py-2 px-3 md:px-4 rounded-full hover:scale-105 duration-300"
            }
            title="Clear Basket"
            onClick={() => {
              dispatch(clearBasket());
            }}
          >
            Clear Basket
          </button>
        </div>

        <div className="flex flex-wrap gap-2 md:gap-3">
          {addedProducts.length > 0 &&
            addedProducts.map((product) => (
              <BasketItem key={product.id} product={product} />
            ))}
        </div>
      </section>
    </>
  );
}

export default Basket;
