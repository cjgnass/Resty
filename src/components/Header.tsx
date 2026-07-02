export default function Header() {
  return (
    <>
      <div className="flex justify-between p-4 text-2xl text-bold border-b">
        <div>Restaurant</div>
        <div className="flex">
          <button className="border p-2">Menu</button>
          <button className="border p-2">Cart</button>
          <button className="border p-2">Sign In</button>
        </div>
      </div>
    </>
  );
}
