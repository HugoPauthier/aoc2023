import { expect, test } from "vitest";
import { getCardResult, getWorthTotal } from "./part1.js";

test("Test getResult 1", () => {
  const winningNumbers = ["41", "48", "83", "86", "17"];
  const selectionNumbers = ["83", "86", "6", "31", "17", "9", "48", "53"];
  const res = getCardResult(winningNumbers, selectionNumbers);
  expect(res).toBe(8);
});

test("Test getResult 2", () => {
  const winningNumbers = ["83", "11"];
  const selectionNumbers = ["83", "83"];
  const res = getCardResult(winningNumbers, selectionNumbers);
  expect(res).toBe(2);
});

test("Test getResult 3", () => {
  const winningNumbers = ["11"];
  const selectionNumbers = ["83", "41"];
  const res = getCardResult(winningNumbers, selectionNumbers);
  expect(res).toBe(0);
});

test("Test getWorthTotal 1", () => {
  const cardsRecord = [
    {
      id: "Card 1",
      winningNumbers: ["41", "48", "83", "86", "17"],
      selectionNumbers: ["83", "86", "6", "31", "17", "9", "48", "53"],
    },
    {
      id: "Card 2",
      winningNumbers: ["13", "32", "20", "16", "61"],
      selectionNumbers: ["61", "30", "68", "82", "17", "32", "24", "19"],
    },
  ];
  const res = getWorthTotal(cardsRecord);
  expect(res).toBe(10);
});

test("Test getWorthTotal 2", () => {
  const cardsRecord = [
    {
      id: "Card 5",
      winningNumbers: ["87", "83", "26", "28", "32"],
      selectionNumbers: ["88", "30", "70", "12", "93", "22", "82", "36"],
    },
    {
      id: "Card 6",
      winningNumbers: ["31", "18", "13", "56", "72"],
      selectionNumbers: ["74", "77", "10", "23", "35", "67", "36", "11"],
    },
  ];
  const res = getWorthTotal(cardsRecord);
  expect(res).toBe(0);
});
