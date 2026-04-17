const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const year = Number(lines[0]);

if (year % 4 !== 0) {
  console.log('Common Year');
} else if (year % 100 !== 0) {
  console.log('Leap Year');
} else if (year % 400 !== 0) {
  console.log('Common Year');
} else {
  console.log('Leap Year');
}
