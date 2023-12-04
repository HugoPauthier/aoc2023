import { expect, test } from "vitest";
import { checkGame, checkGames } from "./part1.js";

test("Test checkGame 1", () => {
  const game = {
    id: "1",
    records: [
      "5 green, 7 red, 4 blue",
      "11 green, 9 red, 8 blue",
      "2 blue, 12 green",
    ],
  };
  const res = checkGame(game);
  expect(res).toBe(true);
});

test("Test checkGame 2", () => {
  const game = {
    id: "2",
    records: ["5 green"],
  };
  const res = checkGame(game);
  expect(res).toBe(true);
});

test("Test checkGame 3", () => {
  const game = {
    id: "100",
    records: [
      "8 green, 6 blue, 20 red",
      "5 blue, 4 red, 13 green",
      "5 green, 1 red",
    ],
  };
  const res = checkGame(game);
  expect(res).toBe(false);
});

// ---

test("Test checkGames 1", () => {
  const games = [
    {
      id: "1",
      records: ["5 green, 7 red, 4 blue"],
    },
    {
      id: "2",
      records: ["3 green, 2 red, 1 blue"],
    },
    {
      id: "100",
      records: [
        "8 green, 6 blue, 20 red",
        "5 blue, 4 red, 13 green",
        "5 green, 1 red",
      ],
    },
  ];
  const res = checkGames(games);
  expect(res).toBe(3);
});
