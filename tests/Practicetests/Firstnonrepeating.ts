
function firstNonRepeating(str: string): string | null {
    for (let i = 0; i < str.length; i++) {
        let count = 0;

        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j]) {
                count++;
            }
        }

        if (count === 1) {
            return str[i];
        }
    }

    return null;
}

const Character = "swiss";
const result = firstNonRepeating(Character);

console.log(`First non-repeating character: ${result}`);

