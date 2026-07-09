import { useContext } from "react";
import { ItemContext } from "@/contexts/ItemContext";
import type { ItemContextType } from "@/contexts/ItemContext";
import { items } from "@/items";
import CartItem from "@/components/CartItem";
import EditItem from "@/components/EditItem";
import { submitOrder } from "@/api";

export default function Cart() {
  const itemContext = useContext<ItemContextType | undefined>(ItemContext);
  if (itemContext === undefined) return null;
  const { currCartId, cartItems } = itemContext;
  function renderCartItems() {
    return cartItems?.map((_, index) => {
      return <CartItem key={index} cartId={index} />;
    });
  }

  function renderEditItem() {
    if (cartItems === null || cartItems.length === 0) {
      return null;
    }
    if (currCartId === null) return null;
    const cartItem = cartItems[currCartId];
    const itemId = cartItem.itemId;
    const itemQuantity = cartItem.quantity;
    const itemNotes = cartItem.notes ?? "";

    return (
      <EditItem itemId={itemId} quantity={itemQuantity} notes={itemNotes} />
    );
  }

  async function handleSubmit() {
    if (cartItems === null) return;
    const cart = cartItems.map((cartItem) => {
      return {
        item: items[cartItem.itemId].name,
        quantity: cartItem.quantity,
        notes: cartItem.notes,
      };
    });
    const order = JSON.stringify(cart);
    const response = await submitOrder(order);
    console.log(response);
  }

  return (
    <>
      <div>{renderCartItems()}</div>
      <div className="flex justify-center">
        <button
          onClick={handleSubmit}
          className="text-center m-4 p-4 border rounded-2xl"
        >
          Submit Order
        </button>
      </div>

      {currCartId !== null && renderEditItem()}
    </>
  );
}
