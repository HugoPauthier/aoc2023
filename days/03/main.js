import fs from "fs";
import { parseSchematic } from "./part1.js";

const engineSchematic = fs
  .readFileSync("./input.txt", "utf8")
  .trim()
  .split("\n");

// console.log(engineSchematic);
console.log(parseSchematic(engineSchematic));
