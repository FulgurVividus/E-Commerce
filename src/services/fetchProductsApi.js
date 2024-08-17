const getProducts = async () => {
  try {
    const response = await fetch(`https://dummyjson.com/products?limit=100`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export default getProducts;
