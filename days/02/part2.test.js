import { expect, test } from "vitest";
import { getGamePower, getMinimumCubes, getPower } from "./part2.js";

test("Test getMinimumCubes 1", () => {
  const game = getMinimumCubes({
    id: "1",
    records: ["3 blue, 4 red", "1 red, 2 green, 6 blue", "2 green"],
  });
  expect(game).toEqual({ red: 4, green: 2, blue: 6 });
});

test("Test getMinimumCubes 2", () => {
  const game = getMinimumCubes({
    id: "1",
    records: ["1 blue, 2 green", "3 green, 4 blue, 1 red", "1 green, 1 blue"],
  });
  expect(game).toEqual({ red: 1, green: 3, blue: 4 });
});

// ---

test("Test getGamePower 1", () => {
  const game = getGamePower({ red: 4, green: 2, blue: 6 });
  expect(game).toBe(48);
});

test("Test getGamePower 2", () => {
  const game = getGamePower({ red: 1, green: 3, blue: 4 });
  expect(game).toBe(12);
});

// ---

test("Test getPower 1", () => {
  const games = [
    {
      id: "1",
      records: ["3 blue, 4 red", "1 red, 2 green, 6 blue", "2 green"],
    },
    {
      id: "2",
      records: ["1 blue, 2 green", "3 green, 4 blue, 1 red", "1 green, 1 blue"],
    },
    {
      id: "3",
      records: [
        "8 green, 6 blue, 20 red",
        "5 blue, 4 red, 13 green",
        "5 green, 1 red",
      ],
    },
    {
      id: "4",
      records: [
        "1 green, 3 red, 6 blue",
        "3 green, 6 red",
        "3 green, 15 blue, 14 red",
      ],
    },
    {
      id: "5",
      records: ["6 red, 1 blue, 3 green", "2 blue, 1 red, 2 green"],
    },
  ];
  const game = getPower(games);
  expect(game).toBe(2286);
});
