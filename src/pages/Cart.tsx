import { useContext } from "react";
import { ItemContext } from "@/contexts/ItemContext";
import type { ItemContextType } from "@/contexts/ItemContext";
// import { items } from "@/items";
import CartItem from "@/components/CartItem";
import Order from "@/components/Order";

export default function Cart() {
  const itemContext = useContext<ItemContextType | undefined>(ItemContext);
  if (itemContext === undefined) return null;
  const { cartId, cartItems } = itemContext;
  function renderCartItems() {
    return cartItems?.map((_, index) => {
      return <CartItem key={index} itemId={index} />;
    });
  }

  function renderOrder() {
    if (cartItems === null || cartItems.length === 0) {
      return null;
    }
    if (cartId === null) return null;
    const { itemId, quantity, notes } = cartItems[cartId];
    return <Order itemId={itemId} quantity={quantity} notes={notes ?? ""} />;
  }
  return (
    <>
      <div>{renderCartItems()}</div>
      {cartId !== null && renderOrder()}
    </>
  );
}
