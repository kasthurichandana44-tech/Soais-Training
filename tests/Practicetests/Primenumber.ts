function isPrime(num: number) {
    if (num <= 1) return false;
 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
 
    return true;
}
 
let number = 9;
if (isPrime(number)) {
    console.log(number + " is a Prime Number");
} else {
    console.log(number + " is NOT a Prime Number");
}
 