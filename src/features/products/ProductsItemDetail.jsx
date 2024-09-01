import { useLocation } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import Loader from "../../common/Loader";
import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../basket/basketSlice";

const ProductsItemDetail = memo(function ProductsItemDetail() {
  const location = useLocation();
  const product = location.state.product;
  // console.log(product);

  const basket = useSelector((state) => state.basket.basket);
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);

  useEffect(
    function () {
      if (basket.some((item) => item.id === product.id)) {
        setIsAdded(true);
      }
    },
    [basket, product.id]
  );

  if (!product) return <Loader />;

  const { title, description, price, rating, stock } = product;

  return (
    <>
      <div className="py-2 px-2 md:px-3 flex items-center justify-center h-screen">
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Image */}
          <div className="h-56 flex justify-center items-center overflow-hidden">
            <img
              src={product?.images?.at(0)}
              alt={title}
              className="object-contain max-w-full max-h-full select-none"
              loading="lazy"
            />
          </div>

          {/* Info */}
          <div className="max-w-md flex flex-col gap-3">
            <h1>
              <span className="font-bold">Name:</span> {title}
            </h1>
            <h2>
              <span className="font-bold">Description:</span> {description}
            </h2>
            <p>
              <span className="font-bold">Price:</span> {price}$
            </p>
            <p>
              <span className="font-bold">Rating:</span> {rating} / 5.0
            </p>
            <p>
              <span className="font-bold">Quantity:</span> {stock}
            </p>

            <button
              className={
                isAdded
                  ? "cursor-not-allowed detail-page-button"
                  : "detail-page-button"
              }
              disabled={isAdded}
              title="Add(ed)"
              onClick={() => {
                if (!isAdded) {
                  dispatch(addItem(product));
                  setIsAdded(true);
                }
              }}
            >
              {isAdded ? "Added to basket" : "Add to Basket"}
              <span>
                <BsCart4 />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
});

export default ProductsItemDetail;
