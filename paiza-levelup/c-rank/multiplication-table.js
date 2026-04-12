const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const n = Number(lines[0]);
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (j === n) {
      process.stdout.write(`${i * j}`);
    } else {
      process.stdout.write(`${i * j} `);
    }
  }
  console.log();
}
