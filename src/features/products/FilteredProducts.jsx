function FilteredProducts({ filteredProducts }) {
  return (
    <>
      <div>
        {filteredProducts.map((product) => (
          <p key={product.id}>{product.title}</p>
        ))}
      </div>
    </>
  );
}

export default FilteredProducts;
