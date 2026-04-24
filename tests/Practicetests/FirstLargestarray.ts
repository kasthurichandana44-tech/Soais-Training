function FirstLargestArray(arr: number[]): number {
    if(arr.length === 0) {
        throw new Error("Array should not be empty");
    }
      let large = arr[0];
      for(let i=1; i<arr.length; i++){
           if(arr[i]>large){
            large= arr[i];
           }
      }
       return large;
    
}

const value = [10,20,56,67,32];
const output = FirstLargestArray(value);
console.log(`The first largest array is: ${output}`);