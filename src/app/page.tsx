import Image from "next/image";
import { Slow } from "./components/Slow";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <div className="prose">
        <Slow />
        <h1>Welcome to your Next.js app!</h1>
        <h2>
          Get started by editing <code>pages/index.js</code>
        </h2>
        <p>
          Get started by editing <code>pages/index.js</code>
        </p>
      </div>
    </main>
  );
}
