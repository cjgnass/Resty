import type { Dispatch, SetStateAction } from "react";
import { createContext } from "react";

export type ItemContextType = {
  detailId: number | null;
  setDetailId: Dispatch<SetStateAction<number | null>>;
  orderId: number | null;
  setOrderId: Dispatch<SetStateAction<number | null>>;
  cartId: number | null;
  setCartId: Dispatch<SetStateAction<number | null>>;
};

export const ItemContext = createContext<ItemContextType | undefined>(
  undefined,
);
