import { Nav } from "../Nav";

export function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-2xl font-bold">My App</h1>
      <Nav />
    </header>
  );
}
