const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const tmp = lines[0].split(' ');
let a = Number(tmp[0]);
let b = Number(tmp[1]);

if (a === 0) {
  console.log(b);
} else if (b === 0) {
  console.log(a);
} else if (a === b) {
  console.log(a);
}

while (a !== 0 && b !== 0 && a !== b) {
  if (a < b) {
    b = b % a;
  } else if (a > b) {
    a = a % b;
  }
}

if (a === 0) {
  console.log(b);
} else if (b === 0) {
  console.log(a);
}
