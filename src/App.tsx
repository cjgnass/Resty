import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/Layout";
import Home from "@/pages/Home";
import Menu from "@/pages/Menu";
import Cart from "@/pages/Cart";
import { ItemContext } from "@/contexts/ItemContext";

function App() {
  const [detailId, setDetailId] = useState<number | null>(null);
  const [orderId, setOrderId] = useState<number | null>(null);
  return (
    <BrowserRouter>
      <ItemContext.Provider
        value={{ detailId, setDetailId, orderId, setOrderId }}
      >
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </ItemContext.Provider>
    </BrowserRouter>
  );
}

export default App;
