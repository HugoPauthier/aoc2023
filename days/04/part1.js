export const getCardResult = (winningNumbers, selectionNumbers) => {
  const winnings = {};
  for (const number of winningNumbers) {
    winnings[number] = selectionNumbers.flatMap((n, i) =>
      n === number ? i : []
    ).length;
  }
  const winningsCount = Object.values(winnings).reduce(
    (accumulator, value) => accumulator + value,
    0
  );
  return winningsCount > 0 ? Math.pow(2, winningsCount - 1) : 0;
};

export const getWorthTotal = (cardsRecord) => {
  const cardsResults = cardsRecord.map((cardResult) =>
    getCardResult(cardResult.winningNumbers, cardResult.selectionNumbers)
  );
  return cardsResults.reduce((accumulator, value) => accumulator + value, 0);
};
