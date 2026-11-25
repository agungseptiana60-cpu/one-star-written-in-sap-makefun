// Entry program for the make.fun bounty "One Star, Written in Sap"
// (u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4).
//
// The whole entry is one funny line of text: a houseplant leaving a
// one-star review of its human owner, under 280 characters. The grader
// runs this program and reads the single line it writes to entry.txt
// in the output directory.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Revised line: the draft had the setup but a flat ending, so the
// revision keeps the same grievance (repotted into a candle jar with
// no drainage, called aesthetic) and turns it once more in the last
// clause — the plant does not just stand in its bathwater, it is
// rotting politely, as if good manners were the only care it gets.
// "Rotting politely" is the surprise, it lands in the final words,
// and the whole line stays plain, specific and readable in one breath.
export const ENTRY_LINE =
  "One star. You repotted me into a candle jar with no drainage, called it aesthetic, and now I spend my days standing in my own bathwater, rotting politely.";

// Self-check gate: the sealed scorer only judges UTF-8 text of
// 1 to 279 characters, so refuse to write anything outside that.
if (ENTRY_LINE.length < 1 || ENTRY_LINE.length > 279) {
  throw new Error(`entry line must be 1-279 characters, got ${ENTRY_LINE.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), ENTRY_LINE + '\n', 'utf8');

console.log(`wrote entry.txt (${ENTRY_LINE.length} characters)`);
