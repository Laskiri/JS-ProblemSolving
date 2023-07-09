/* Problem: Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target. */

function twoSum(nums, target) {
    const map = {}

   for (let i = 0; i < nums.length; i++) {
   	const diff = target - nums[i]
    console.log(diff)
   	if (diff in map) return [i, map[diff]]

   	mp[nums[i]] = i
       console.log(map)
   }
};

console.log(twoSum([2,7,11,15], 9));