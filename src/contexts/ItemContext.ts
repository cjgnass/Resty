import type { Dispatch, SetStateAction } from "react";
import { createContext } from "react";

export type CartItem = {
  itemId: number;
  quantity: number;
  notes: string | null;
};

export type ItemContextType = {
  detailId: number | null;
  setDetailId: Dispatch<SetStateAction<number | null>>;
  currOrderId: number | null;
  setCurrOrderId: Dispatch<SetStateAction<number | null>>;
  currCartId: number | null;
  setCurrCartId: Dispatch<SetStateAction<number | null>>;
  cartItems: CartItem[] | null;
  setCartItems: Dispatch<SetStateAction<CartItem[] | null>>;
};

export const ItemContext = createContext<ItemContextType | undefined>(
  undefined,
);
