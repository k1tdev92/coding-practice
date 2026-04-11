const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const tmp = lines[0].split(' ');
const a = Number(tmp[0]);
const b = Number(tmp[1]);

if ((a * b) % 2 === 0) {
    console.log('Even');
} else {
    console.log('Odd');
}
