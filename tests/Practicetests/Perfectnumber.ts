function Perfectnumber(n: number): boolean {
    if(n<=1) return false;
    let sum=0;

    for(let i=1; i<=n/2; i++){
        if(n%i === 0){
            sum= sum+i;
        }

    }
     return sum == n;
}

const Value = 6;

if (Perfectnumber(Value)) {
    console.log(`${Value} is a perfect number.`);
} else {
    console.log(`${Value} is not a perfect number.`);
}