import { useDispatch } from "react-redux";
import { deleteItem } from "./basketSlice";

function DeleteItem({ productId }) {
  const dispatch = useDispatch();

  return (
    <>
      <button
        className="bg-black text-white py-2 px-4 rounded-full max-w-fit hover:scale-105 duration-300"
        title="Delete Item"
        onClick={() => dispatch(deleteItem(productId))}
      >
        Delete
      </button>
    </>
  );
}

export default DeleteItem;
