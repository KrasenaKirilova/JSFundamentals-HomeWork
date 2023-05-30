function solve(nums) {
 nums = nums.toString();
  
  let result = 0;

  for (let index = 0; index < nums.length; index++) {
    result += Number(nums[index]);
  }
  console.log(result);
}

solve(245678);
