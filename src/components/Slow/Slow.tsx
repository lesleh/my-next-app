import { clamp } from "@/utils/clamp";
import { delay } from "@/utils/delay";

export async function Slow({ howSlow = 1000 }: { howSlow?: number }) {
  await delay(clamp(howSlow, 0, 5000));
  return <p>Slow component {new Date().toTimeString()}</p>;
}
