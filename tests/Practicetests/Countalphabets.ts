function countVowelsAndConsonants(str: string): void {
    let vowels = 0;
    let consonants = 0;

    const input = str.toLowerCase();

    for(let ch of input){
        if (ch >= 'a' && ch <= 'z') { // check if it's a letter
            if ("aeiou".includes(ch)) {
                vowels++;
            } else {
                consonants++;
            }
        }
    }
    
    console.log(`Vowels: ${vowels}`);
    console.log(`Consonants: ${consonants}`);
}

// Example usage
const text = "Hello World";

countVowelsAndConsonants(text);
