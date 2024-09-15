import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navbar from "./ui/Navbar";
// import Home from "./ui/Home";
// import ProductsItemDetail from "./features/products/ProductsItemDetail";
// import Basket from "./features/basket/Basket";
import PageNotFound from "./common/PageNotFound";
import Loader from "./common/Loader";

const Home = lazy(() => import("./ui/Home"));
const ProductsItemDetail = lazy(() =>
  import("./features/products/ProductsItemDetail")
);
const Basket = lazy(() => import("./features/basket/Basket"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route
              path="/products/:id"
              exact
              element={<ProductsItemDetail />}
            />
            <Route path="/basket" exact element={<Basket />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
