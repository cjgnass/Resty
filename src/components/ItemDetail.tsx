import { useContext } from "react";
import { items } from "@/items";
import type { ItemContextType } from "@/contexts/ItemContext";
import { ItemContext } from "@/contexts/ItemContext";

export default function ItemDetail() {
  const itemContext = useContext<ItemContextType | undefined>(ItemContext);
  if (itemContext === undefined) return null;
  const { detailId, setDetailId } = itemContext;
  if (detailId === null) return null;
  const item = items[detailId];
  const itemName = item.name;
  const itemDescription = item.description;
  const itemImage = item.image;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/50">
      <div className="w-100 border bg-white p-4 rounded-2xl">
        <div className="flex justify-center">
          <img src={itemImage} className="w-75 h-75" />
        </div>
        <div className="text-center">{itemName}</div>
        <div className="text-center">{itemDescription}</div>
        <button
          onClick={() => setDetailId(null)}
          className="w-full text-center"
        >
          Close
        </button>
      </div>
    </div>
  );
}
