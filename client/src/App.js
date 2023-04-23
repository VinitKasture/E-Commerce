import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./Components/Pages/Index";
import Product from "./Components/Pages/Product/Product";
import Cart from "./Components/Pages/Cart/Cart";
import CheckoutPage from "./Components/Pages/Checkout/CheckoutPage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
