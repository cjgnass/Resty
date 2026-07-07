import { useContext } from "react";
import { items } from "@/items";
import type { ItemContextType } from "@/contexts/ItemContext";
import { ItemContext } from "@/contexts/ItemContext";

export type CartItemProps = {
  cartId: number;
};

export default function CartItem({ cartId }: CartItemProps) {
  const cartContext = useContext<ItemContextType | undefined>(ItemContext);
  if (cartContext === undefined) return null;
  const { setCurrCartId, setCartItems, cartItems } = cartContext;
  if (cartItems === null) return null;
  const cartItem = cartItems[cartId];
  const itemId = cartItem.itemId;
  const item = items[itemId];
  const itemName = item?.name;
  const itemPrice = item?.price;
  const notes = cartItem.notes;
  const quantity = cartItem.quantity;
  const price = itemPrice * quantity;
  function handleEdit() {
    setCurrCartId(cartId);
  }

  function handleRemove() {
    if (cartItems === null) return;
    setCartItems(cartItems.filter((_, i) => i !== cartId));
  }
  return (
    <div className="flex justify-center">
      <div className="flex justify-between w-100 border rounded-2xl m-5 p-5">
        <div>
          <img src={item?.image} alt={itemName} className="w-30 h-30" />
          <div className="text-center">
            {itemName} - x{quantity}
          </div>
          <div className="text-center">Price : ${price}</div>
        </div>
        <div className="border whitespace-break-spaces w-40 m-4 wrap-break-word">
          {notes}
        </div>
        <div className="border flex-col rounded-2xl">
          <div className="h-1/2">
            <button onClick={handleEdit} className="w-full h-full p-2 border-b">
              Edit
            </button>
          </div>
          <div className="h-1/2">
            <button
              onClick={handleRemove}
              className="w-full h-full p-2 border-t"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
