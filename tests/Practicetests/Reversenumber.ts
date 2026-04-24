function reverseNumber(num: number): number {
    let reversed = 0;
    let n = Math.abs(num); // handle negative numbers

    while (n !== 0) {
        let remainder = n % 10; // get last digit
        reversed = reversed * 10 + remainder; // build reversed number
        n = Math.floor(n / 10);   
    }

    // restore sign if original number was negative
    return num < 0 ? -reversed : reversed;
}

// Example usage
const input = 12045;
const result = reverseNumber(input);

console.log(`Original number: ${input}`);
console.log(`Reversed number: ${result}`);