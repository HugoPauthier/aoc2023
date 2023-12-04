import fs from "fs";
import * as part1 from "./part1.js";
import * as part2 from "./part2.js";

const gamesRecord = fs
  .readFileSync("./input.txt", "utf8")
  .trim()
  .split("\n")
  .map((game) => game.split(": "))
  .map((game) => ({
    id: game[0].split("Game ")[1],
    records: game[1].split("; "),
  }));

console.log(part1.checkGames(gamesRecord));
console.log(part2.getPower(gamesRecord));
