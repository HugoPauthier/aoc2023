export const parseSchematic = (schematic) => {
  let res = 0;
  for (let i = 0; i < schematic.length; i++) {
    const row = schematic[i];
    let numberBuffer = "";
    let adjacentsBuffer = [];
    for (let j = 0; j < row.length; j++) {
      const element = row[j];
      if (!isNaN(element)) {
        numberBuffer += element;
        const adjacents = getAdjacents(schematic, i, j);
        adjacentsBuffer = adjacentsBuffer.concat(adjacents);
        // console.log(`element ${numberBuffer} adjacents [${adjacents}]`);
      } else {
        if (numberBuffer !== "") {
          if (isPartNumber(adjacentsBuffer)) {
            res += Number(numberBuffer);
          }
          adjacentsBuffer = [];
          numberBuffer = "";
        }
      }
    }
    if (numberBuffer !== "") {
      if (isPartNumber(adjacentsBuffer)) {
        res += Number(numberBuffer);
      }
    }
  }
  return res;
};

export const getAdjacents = (schematic, indexRow, indexCol) => {
  // const element = schematic[indexRow][indexCol];
  const maxIndex = schematic[0].length - 1;
  const left = indexCol > 0 ? schematic[indexRow][indexCol - 1] : undefined;
  const right =
    indexCol < maxIndex ? schematic[indexRow][indexCol + 1] : undefined;
  const top = indexRow > 0 ? schematic[indexRow - 1][indexCol] : undefined;
  const bot =
    indexRow < maxIndex ? schematic[indexRow + 1][indexCol] : undefined;
  const topLeft =
    indexCol > 0 && indexRow > 0
      ? schematic[indexRow - 1][indexCol - 1]
      : undefined;
  const topRight =
    indexRow > 0 && indexCol < maxIndex
      ? schematic[indexRow - 1][indexCol + 1]
      : undefined;
  const botLeft =
    indexRow < maxIndex && indexCol > 0
      ? schematic[indexRow + 1][indexCol - 1]
      : undefined;
  const botRight =
    indexRow < maxIndex && indexCol < maxIndex
      ? schematic[indexRow + 1][indexCol + 1]
      : undefined;

  return [top, topRight, right, botRight, bot, botLeft, left, topLeft];
};

export const isPartNumber = (adjacents) => {
  const res = adjacents
    .filter((e) => e)
    .filter((e) => e !== ".")
    .filter((e) => e.match(/\D/));
  return res.length > 0;
};
