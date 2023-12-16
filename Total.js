export default function Total({nums})
{
     let arr1 = nums;
     let sum = 0;
     for(let i =0; i< arr1.length ; i++ )
     {
          sum = sum + arr1[i];
     }

     return(

        <h3>
      Total sum of array is = {sum}    
        </h3>
        
     )
}