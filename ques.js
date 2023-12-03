     //Questions-1
   const moveZeros = function(nums){
    let start = 0;
    for(let i = 0; i<nums.length ; i++){
        if(nums[i] !== 0){
            nums[start] = nums[i]
            start++
        }
    }
    while(start < nums.length){
        nums[start] = 0
        start++
    }
    return nums
}
  console.log(moveZeros([0, 1, 3, 0, 23])); // Output: [1, 3, 23, 0, 0]
    
//Question-2
let arr = [1,2];
[arr[0],arr[1] ] = [arr[1],arr[0] ]
console.log(arr)


//Question-3  how to tell object is empty

const myobj = {}
const answer = (obj) =>{
   return Object.keys(obj).length === 0
   return Object. entries(obj).length === 0
 }
 console.log(answer(myobj))