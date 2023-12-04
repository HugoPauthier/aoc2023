const cubeRules = {
  red: 12,
  green: 13,
  blue: 14,
};

export const checkGame = (game) => {
  const fullRecord = game.records.map((record) => record.split(", ")).flat();
  for (const cube of fullRecord) {
    const [number, color] = cube.split(" ");
    if (number > cubeRules[color]) return false;
  }
  return true;
};

export const checkGames = (gamesRecord) => {
  const filteredGames = gamesRecord.filter(checkGame);
  const res = filteredGames.reduce(
    (accumulator, game) => accumulator + Number(game.id),
    0
  );
  return res;
};
