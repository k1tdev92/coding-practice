const input = require("fs").readFileSync("/dev/stdin", "utf8");
const lines = input.trim().split("\n");

const a = Number(lines[0]);
const tmp = lines[1].split(" ");
const b = Number(tmp[0]);
const c = Number(tmp[1]);
const s = lines[2];

console.log(`${a + b + c} ${s}`);
