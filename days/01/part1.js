const recoverValueFromLine = (line) => {
  const numbers = line.match(/\d/g);
  const first = numbers[0];
  const last = numbers[numbers.length - 1];
  return first + last;
};

console.log(recoverValueFromLine("1abc2") === "12");
console.log(recoverValueFromLine("pqr3stu8vwx") === "38");
console.log(recoverValueFromLine("a1b2c3d4e5f") === "15");
console.log(recoverValueFromLine("treb7uchet") === "77");

export const recoverDocument = (document) => {
  const recoveredLines = document.map((line) =>
    Number(recoverValueFromLine(line))
  );
  return recoveredLines.reduce((a, b) => a + b, 0);
};

console.log(
  recoverDocument(["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"]) === 142
);
