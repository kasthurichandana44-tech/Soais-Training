function SecondlargeArray(arr: number[]): number {

    let large= arr[0];
    let second= arr[0];
//First largest element in an array
    for(let i=1; i<arr.length;i++){
        if(arr[i]>large){
            large=arr[i];    
        }
    }
//Second largest element in an array
     for(let i=0; i<arr.length;i++){
        if(arr[i]!==large&&(second === large|| arr[i]>second))
        {
            second = arr[i];
        }
     }
    return second;
}

const array = [10,20,40,30,54];
const largest = SecondlargeArray(array);
console.log(`The secondlargest array is: ${largest}`);