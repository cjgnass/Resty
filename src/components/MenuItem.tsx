import { useContext } from "react";
import type { ItemContextType } from "@/contexts/ItemContext";
import { ItemContext } from "@/contexts/ItemContext";
import { items } from "@/items";

type MenuItemProps = {
  itemId: number;
};

export default function MenuItem({ itemId }: MenuItemProps) {
  const itemContext = useContext<ItemContextType | undefined>(ItemContext);
  if (itemContext === undefined) return null;
  const { setDetailId, setOrderId } = itemContext;
  return (
    <>
      <div className="flex justify-center">
        <div className="border rounded-2xl w-60">
          <img
            src={items[itemId].image}
            className="w-full h-50 rounded-t-2xl"
          />
          <div className="text-center border-b">{items[itemId].name}</div>
          <div className="flex justify-around">
            <button
              onClick={() => setDetailId(itemId)}
              className="w-1/2 border-r"
            >
              Detail
            </button>
            <button
              onClick={() => setOrderId(itemId)}
              className="w-1/2 border-l"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
