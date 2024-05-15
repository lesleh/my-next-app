import { Loading } from "./components/Loading";
import { Slow } from "./components/Slow";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="prose">
        <Slow howSlow={1000} />
        <h1>Welcome to your Next.js app!</h1>
        <h2>
          Get started by editing <code>pages/index.js</code>
        </h2>
        <p>
          Get started by editing <code>pages/index.js</code>
        </p>
      </div>
    </Suspense>
  );
}
