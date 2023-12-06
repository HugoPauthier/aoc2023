import fs from "fs";
import * as part1 from "./part1.js";

const cardsRecord = fs
  .readFileSync("./input.txt", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.split(": "))
  .map(([cardId, numbers]) => ({
    id: cardId,
    winningNumbers: numbers.split("|")[0].trim().split(" ").filter(String),
    selectionNumbers: numbers.split("|")[1].trim().split(" ").filter(String),
  }));

console.log(cardsRecord);
console.log(part1.getWorthTotal(cardsRecord));
