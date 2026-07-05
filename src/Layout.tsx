import Header from "@/components/Header";
import { Outlet } from "react-router-dom";
// import type { ItemContextType } from "@/contexts/ItemContext";
// import { ItemContext } from "@/contexts/ItemContext";
// import { useContext } from "react";

export default function Layout() {
  // const itemContext = useContext<ItemContextType | undefined>(ItemContext);
  // if (itemContext === undefined) return null;
  // const { detailId } = itemContext;
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
