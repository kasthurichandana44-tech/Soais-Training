function reverseString(str: string): string {
    let reversed = "";

    // Loop from the end of the string to the beginning
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}
// Example usage
const Input = 'Soais';
const output = reverseString(Input);

console.log(`Original: ${Input}`);
console.log(`Reversed: ${output}`);
