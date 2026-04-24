function ArraySum(arr: number[]): number {
    let sum=0;
    
    for(let i=0; i<arr.length; i++){
        sum = sum+arr[i];
    }
    return sum;
}
const array = [10,20,40,30,54];
const Arrayadd = ArraySum(array);
console.log(`The secondlargest array is: ${Arrayadd}`);

