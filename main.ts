// Blue Screen of Death Metal — an entry for make.fun/u-motasimfuad-name-the-robot-band-1ffc6a74.
// One funny name for a band made of robots, plus a few words about its hit song,
// inside the sealed 200-character gate.
//
// The house judge reads two names at a time and weighs, in order: a funny robot
// band name that also names a hit song; a real first-read laugh rather than
// pun-shaped noise; a hit-song line that lands a second laugh and fits the band;
// a name you would repeat to a friend; and short words with no explanation.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The band is a machine meltdown that became a death-metal act. The song title
// borrows a human breakup line and hands it to a machine blaming its driver;
// "driver" is both the person at the wheel and the software that crashed. That
// double meaning, not the hardware wordplay alone, is what earns the second laugh.
const ENTRY =
  "Blue Screen of Death Metal - hit single 'It's Not You, It's My Driver.'";

// The sealed gate: UTF-8 text, 1..200 characters, not only whitespace.
const chars = Array.from(ENTRY);
if (chars.length < 1 || chars.length > 200 || !ENTRY.trim()) {
  throw new Error("invalid entry text");
}
if (Buffer.byteLength(ENTRY, "utf8") > 800) {
  throw new Error("entry text too large");
}

// Determinism: fixed text, fixed path, no clock, network, secrets or randomness.
const outDir = (process.env.MAKEFUN_OUTPUT_DIR ?? "/output").replace(/\/+$/, "");
const target = `${outDir}/entry.txt`;
mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, ENTRY, "utf8");
