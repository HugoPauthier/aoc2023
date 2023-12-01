import fs from "fs";
import { recoverDocument } from "./part1.js";
import { recoverDocument_2 } from "./part2.js";

const calibrationDocument = fs
  .readFileSync("./input.txt", "utf8")
  .trim()
  .split("\n");

console.log(recoverDocument(calibrationDocument));
console.log(recoverDocument_2(calibrationDocument));
