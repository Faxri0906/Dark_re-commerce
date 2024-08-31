import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import AddProduct from "./pages/Add-product";
import Contacts from "./pages/Contacts";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route element={<Home />} path="/"/>
          <Route element={<Products />} path="/products"/>
          <Route element={<About />} path="/about"/>
          <Route element={<AddProduct />} path="/add-product"/>
          <Route element={<Contacts />} path="/contacts"/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};