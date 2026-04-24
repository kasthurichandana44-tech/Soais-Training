function Removeduplicates( arr: number[]): number[] {
    return[...new Set(arr)];

}
const numbers = [1, 2, 2, 9, 4, 4, 5,9];
const Value = Removeduplicates(numbers);

console.log(Value);