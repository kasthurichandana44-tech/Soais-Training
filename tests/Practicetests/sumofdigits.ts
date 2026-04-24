function Sumofdigits(num: number): number {
     let sum=0;
     let n=Math.abs(num);

     while(n>0){
        sum= sum+n%10;
         n = Math.floor(n / 10);   
     }

     return sum;
    }

    const Add = Sumofdigits(12345);
    console.log(`sum of digits is: ${Add}`);