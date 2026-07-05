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
    <>
      <div>
        <img src={itemImage} />
        <div>{itemName}</div>
        <div>{itemDescription}</div>
        <button onClick={() => setDetailId(null)}>Close</button>
      </div>
    </>
  );
}
