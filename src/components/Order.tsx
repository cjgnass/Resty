import { useContext, useState } from "react";
import type { ItemContextType } from "@/contexts/ItemContext";
import { ItemContext } from "@/contexts/ItemContext";
import { items } from "@/items";

export default function Order() {
  const itemContext = useContext<ItemContextType | undefined>(ItemContext);
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState("");
  if (itemContext === undefined) return null;
  const { orderId, setOrderId, cartId, cartItems, setCartItems } = itemContext;
  let item = null;
  if (orderId !== null) {
    item = items[orderId];
  }
  // if (cartId !== null) {
  //   item = items[cartId]
  // }
  const itemName = item?.name;
  const itemImage = item?.image;
  const itemPrice = item?.price;

  function handleAddToCart() {
    const itemToAdd = {
      itemId: orderId,
      quantity,
      notes,
    };
    if (cartItems === null || cartItems.length === 0) {
      setCartItems([itemToAdd]);
    } else {
      setCartItems([...cartItems, itemToAdd]);
    }
    setOrderId(null);
  }

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/50">
      <div className="w-100 border bg-white p-4 rounded-2xl">
        <div className="flex justify-center">
          <img src={itemImage} className="w-75 h-75" />
        </div>
        <div className="text-center">{itemName}</div>
        <div className="text-center">Price : ${itemPrice}</div>
        <div className="flex justify-center">
          Quantity :
          <input
            type="number"
            min="1"
            step="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="border text-center w-10 ml-1"
          />
        </div>
        <div className="text-center">Notes</div>
        <div className="w-full flex justify-center m-1">
          <input
            type="text"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="border w-75 h-50"
          />
        </div>
        <div className="w-full flex justify-around">
          <button onClick={handleAddToCart} className="border w-full">
            Add to cart
          </button>
          <button className="border w-full">Order</button>
        </div>

        <button
          onClick={() => setOrderId(null)}
          className="w-full text-center border"
        >
          Close
        </button>
      </div>
    </div>
  );
}
