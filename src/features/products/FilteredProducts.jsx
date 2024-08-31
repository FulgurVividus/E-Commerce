import { useNavigate } from "react-router-dom";

function FilteredProducts({ filteredProducts, search }) {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="py-2 px-2 md:px-3 text-md md:text-lg italic">
        Search results for:{" "}
        <span className="text-black font-semibold not-italic">{search}</span>
      </h1>
      <section className="flex flex-wrap gap-2 md:gap-3 py-2 px-2 md:px-3">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            onClick={() =>
              navigate(`/products/${product.id}`, { state: { product } })
            }
            className="cursor-pointer w-full flex justify-between items-center md:items-start flex-row md:flex-col bg-gray-300 py-2 px-3 h-[250px] md:w-[200px] md:h-[290px]"
          >
            <div className="h-auto w-28 md:w-full md:mx-auto flex justify-center items-center overflow-hidden">
              <img
                src={product.images.at(0)}
                alt={product.title}
                className="object-contain max-w-full max-h-full"
                loading="lazy"
              />
            </div>

            <div className="text-right md:text-left">
              <h6 className="text-lg">{product.title}</h6>
              <p>{product.price}$</p>
            </div>
          </div>
        ))}
      </section>
      <div className="h-[1px] w-full my-5 border-[1px] border-black border-dashed"></div>
    </>
  );
}

export default FilteredProducts;
