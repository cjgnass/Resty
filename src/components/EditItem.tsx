import { ItemContext } from "@/contexts/ItemContext";
import { useContext, useState } from "react";
import { items } from "@/items";

export type EditItemProps = {
  itemId: number;
  quantity: number;
  notes: string;
};

export default function EditItem({ itemId, quantity, notes }: EditItemProps) {
  const itemContext = useContext(ItemContext);
  const [newQuantity, setNewQuantity] = useState(quantity);
  const [newNotes, setNewNotes] = useState(notes);
  if (itemContext === undefined) return null;
  const { cartItems, setCartItems, currCartId, setCurrCartId } = itemContext;
  const item = items[itemId];
  const itemName = item.name;
  const itemImage = item.image;
  const itemPrice = item.price;

  function handleRemove() {
    if (cartItems === null) return;
    setCartItems(cartItems.filter((_, i) => i !== currCartId));
    setCurrCartId(null);
  }
  function handleDone() {
    if (cartItems === null) return;
    console.log("done");
    setCartItems(
      cartItems.map((cartItem, i) => {
        if (i === currCartId) {
          return {
            itemId,
            quantity: newQuantity,
            notes: newNotes,
          };
        } else {
          return cartItem;
        }
      }),
    );
    setCurrCartId(null);
  }
  function handleClose() {
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
            value={newQuantity}
            onChange={(e) => setNewQuantity(Number(e.target.value))}
            className="border text-center w-10 ml-1"
          />
        </div>
        <div className="text-center">Notes</div>
        <div className="w-full flex justify-center m-1">
          <input
            type="text"
            value={newNotes}
            onChange={(e) => setNewNotes(e.target.value)}
            className="border w-75 h-50"
          />
        </div>
        <div className="w-full flex justify-around">
          <button onClick={handleRemove} className="border w-full">
            Remove
          </button>
          <button onClick={handleDone} className="border w-full">
            Done
          </button>
        </div>

        <button onClick={handleClose} className="w-full text-center border">
          Close
        </button>
      </div>
    </div>
  );
}
