import { useSelector } from "react-redux";

function Basket() {
  const addedProducts = useSelector((state) => state.basket.basket);
  console.log(addedProducts);

  return (
    <>
      <div className="py-2 px-2 md:px-3">Basket</div>
    </>
  );
}

export default Basket;
