import fs from "fs";
import { recoverDocument } from "./part1.js";

const calibrationDocument = fs.readFileSync("./input.txt", "utf8").split("\n");

console.log(recoverDocument(calibrationDocument));
