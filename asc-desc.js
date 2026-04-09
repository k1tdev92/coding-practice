function main(input) {
    const lines = input.split('\n');
    const n = parseInt(lines[0]);
    const numbers = lines[1].split(' ').map(Number);

    let tmp;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (numbers[i] > numbers[j]) {
                tmp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = tmp;
            }
        }
    }

    console.log(numbers.join(' '));

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (numbers[i] < numbers[j]) {
                tmp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = tmp;
            }
        }
    }
    
    console.log(numbers.join(' '));
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
