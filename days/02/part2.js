const cubeRules = {
  red: 12,
  green: 13,
  blue: 14,
};

export const getMinimumCubes = (game) => {
  const minimumCubes = {
    red: 0,
    green: 0,
    blue: 0,
  };

  const fullRecord = game.records.map((record) => record.split(", ")).flat();
  for (const cube of fullRecord) {
    const [number, color] = cube.split(" ");
    if (Number(number) > minimumCubes[color])
      minimumCubes[color] = Number(number);
  }
  return minimumCubes;
};

export const getGamePower = (gameMinimumCubes) => {
  const { red, green, blue } = gameMinimumCubes;
  return red * green * blue;
};

export const getPower = (gamesRecord) => {
  const gamesPower = gamesRecord.map(getMinimumCubes).map(getGamePower);
  return gamesPower.reduce((accumulator, power) => accumulator + power, 0);
};
