import { useContext, useState } from "react";
import type { ItemContextType, CartItem } from "@/contexts/ItemContext";
import { ItemContext } from "@/contexts/ItemContext";
import { items } from "@/items";
import { useNavigate } from "react-router-dom";

//remove props because I'm going to handle editing in a seperate component
export default function OrderItem() {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState("");
  const itemContext = useContext<ItemContextType | undefined>(ItemContext);
  if (itemContext === undefined) return null;
  const {
    currOrderId,
    setCurrOrderId,
    setCurrCartId,
    cartItems,
    setCartItems,
  } = itemContext;
  if (currOrderId === null) return;

  const item = items[currOrderId];
  const itemName = item?.name;
  const itemImage = item?.image;
  const itemPrice = item?.price;

  function handleAddToCart() {
    if (currOrderId === null) return null;
    const itemToAdd: CartItem = {
      itemId: currOrderId,
      quantity,
      notes,
    };
    if (cartItems === null || cartItems.length === 0) {
      setCartItems([itemToAdd]);
    } else {
      setCartItems([...cartItems, itemToAdd]);
    }
    setCurrOrderId(null);
  }

  function handleOrder() {
    handleAddToCart();
    navigate("/cart");
  }

  function handleClose() {
    setCurrOrderId(null);
    setCurrCartId(null);
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
          <button onClick={handleOrder} className="border w-full">
            Order
          </button>
        </div>

        <button onClick={handleClose} className="w-full text-center border">
          Close
        </button>
      </div>
    </div>
  );
}
