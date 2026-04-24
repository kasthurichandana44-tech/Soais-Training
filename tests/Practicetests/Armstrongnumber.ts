function isArmstrong(num: number): boolean {
    let sum = 0;
    let temp = num;

    const digits = num.toString().length;

    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, digits);
        temp = Math.floor(temp / 10);
    }

    return sum === num;
}

// Example usage
const number = 153;

if (isArmstrong(number)) {
    console.log(`${number} is an Armstrong number`);
} else {
    console.log(`${number} is not an Armstrong number`);
}
