import { mkdirSync, writeFileSync } from "node:fs";

// One line for a Solana wallet agent: the wallet grew hands —
// it pays, swaps, and keeps watch while you live your life.
const SLOGAN =
  "Your Solana wallet grew hands — it pays, swaps, and keeps watch while you live your life.";

function main(): void {
  const line = SLOGAN.trim();
  if (line.length < 1 || line.length > 140) {
    throw new Error(`slogan must be 1-140 characters, got ${line.length}`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line + "\n", "utf8");
  console.log(line);
}

main();
