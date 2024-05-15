import { delay } from "@/app/utils/delay";

export async function Slow() {
  await delay(2000);
  return <p>Slow component</p>;
}
