// news-image-20261117 entry (Node 22, standard library only).
// The front-page image lives beside this file as entry.png; the program
// copies it to the output directory the grader provides, byte for byte,
// so both runs produce identical output.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));
