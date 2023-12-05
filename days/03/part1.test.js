import { getAdjacents, isPartNumber, parseSchematic } from "./part1.js";

const input = [
  "467..114..",
  "...*......",
  "..35..633.",
  "......#...",
  "617*......",
  ".....+.58.",
  "..592.....",
  "......755.",
  "...$.*....",
  ".664.598..",
];

const dummy = [".....", ".....", "..194", ".....", "....."];

console.log(parseSchematic(input));

console.log(getAdjacents(dummy, 2, 2));

console.log(isPartNumber([".", ".", "9", ".", ".", "=", ".", "."]));
