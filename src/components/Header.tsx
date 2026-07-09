import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between p-4 text-2xl text-bold border-b">
        <div>Restaurant</div>
        <div className="flex">
          <button onClick={() => navigate("/")} className="border p-2">
            Home
          </button>
          <button onClick={() => navigate("/menu")} className="border p-2">
            Menu
          </button>
          <button onClick={() => navigate("/cart")} className="border p-2">
            Cart
          </button>
        </div>
      </div>
    </>
  );
}
