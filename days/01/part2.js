const recoverValueFromLine_2 = (line) => {
  const replacement = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  const regexp = new RegExp(
    "(?=(\\d|" + Object.keys(replacement).join("|") + "))",
    "g"
  );
  const matches = [...line.matchAll(regexp)];
  const firstMatch = matches[0][1];
  const lastMatch = matches[matches.length - 1][1];
  const first = replacement[firstMatch] ?? firstMatch;
  const last = replacement[lastMatch] ?? lastMatch;

  return first + last;
};

console.log(recoverValueFromLine_2("1abc2") === "12");
console.log(recoverValueFromLine_2("pqr3stu8vwx") === "38");
console.log(recoverValueFromLine_2("a1b2c3d4e5f") === "15");
console.log(recoverValueFromLine_2("treb7uchet") === "77");

console.log(recoverValueFromLine_2("two1nine") === "29");
console.log(recoverValueFromLine_2("eightwothree") === "83");
console.log(recoverValueFromLine_2("abcone2threexyz") === "13");
console.log(recoverValueFromLine_2("abctwo2threexyz8") === "28");

export const recoverDocument_2 = (document) => {
  const recoveredLines = document.map((line) => {
    return Number(recoverValueFromLine_2(line));
  });
  return recoveredLines.reduce((a, b) => a + b, 0);
};

console.log(
  recoverDocument_2(["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"]) ===
    142
);

console.log(
  recoverDocument_2([
    "two1nine",
    "eightwothree",
    "abcone2threexyz",
    "xtwone3four",
    "4nineeightseven2",
    "zoneight234",
    "7pqrstsixteen",
  ]) === 281
);
