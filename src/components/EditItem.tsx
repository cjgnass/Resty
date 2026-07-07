import { ItemContext } from "@/contexts/ItemContext";
import type { ItemContextType } from "@/contexts/ItemContext";
import { useContext } from "react";

export default function EditItem() {
  const itemContext = useContext(ItemContext);
  if (itemContext === undefined) return null;
  // finish
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
