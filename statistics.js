function main(input) {
    const lines = input.trim().split('\n');
    const numbers = lines[0].split(' ').map(Number);

    let sum = 0;
    let sumOfSquares = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        sumOfSquares += numbers[i] * numbers[i];
    }

    const average = sum / numbers.length;
    const variance = (sumOfSquares / numbers.length) - (average * average);

    console.log(average);
    console.log(variance);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
