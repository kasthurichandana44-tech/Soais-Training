function isPalindrome(str: string): boolean {
    return str === str.split('').reverse().join('');
}

// Example usage
const input = "malayalam";

if (isPalindrome(input)) {
    console.log(input+ "isPalindrome");
} else {
    console.log(input + "Not a palindrome");
}