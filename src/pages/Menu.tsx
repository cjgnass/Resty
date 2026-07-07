import MenuItem from "@/components/MenuItem";
import { items } from "@/items";
import { useContext } from "react";
import type { ItemContextType } from "@/contexts/ItemContext";
import { ItemContext } from "@/contexts/ItemContext";
import ItemDetail from "@/components/ItemDetail";
import OrderItem from "@/components/OrderItem";

export default function Menu() {
  const itemContext = useContext<ItemContextType | undefined>(ItemContext);
  if (itemContext === undefined) return null;
  const { detailId, currOrderId: orderId } = itemContext;

  function renderItems() {
    return items.map((_, index) => {
      return <MenuItem itemId={index} key={index} />;
    });
  }
  return (
    <>
      <div>
        <div className="text-center">Menu</div>
        <div className="grid grid-cols-3 gap-4 ml-30 mr-30">
          {renderItems()}
        </div>
        {detailId !== null && <ItemDetail />}
        {orderId !== null && <OrderItem />}
      </div>
    </>
  );
}
