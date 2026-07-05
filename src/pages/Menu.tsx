import MenuItem from "@/components/MenuItem";
import { items } from "@/items";
import { useContext } from "react";
import type { ItemContextType } from "@/contexts/ItemContext";
import { ItemContext } from "@/contexts/ItemContext";
import ItemDetail from "@/components/ItemDetail";

export default function Menu() {
  const itemContext = useContext<ItemContextType | undefined>(ItemContext);
  if (itemContext === undefined) return null;
  const { detailId } = itemContext;

  function renderItems() {
    return items.map((item, index) => {
      return <MenuItem itemId={index} />;
    });
  }
  return (
    <>
      <div className="text-center">Menu</div>
      <div className="grid grid-cols-3 gap-4 ml-30 mr-30">{renderItems()}</div>
      <div>{detailId !== null && <ItemDetail />}</div>
    </>
  );
}
