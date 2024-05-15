import { Slow } from "./components/Slow";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="container mx-auto p-4">
        <div className="prose">
          <Slow howSlow={300} />
          <h1>Welcome to your Next.js app!</h1>
          <h2>
            Get started by editing <code>pages/index.js</code>
          </h2>
          <p>
            Get started by editing <code>pages/index.js</code>
          </p>
        </div>
      </main>
    </Suspense>
  );
}
