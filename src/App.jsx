import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./ui/Navbar";
import Home from "./ui/Home";
import ProductsItemDetail from "./features/products/ProductsItemDetail";
import Basket from "./features/basket/Basket";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products/:id" exact element={<ProductsItemDetail />} />
          <Route path="/basket" exact element={<Basket />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
