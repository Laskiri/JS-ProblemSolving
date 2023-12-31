/* Problem: Given an integer array nums, return true if any value appears 
at least twice in the array, and return false if every element is distinct. */
function containsDuplicate(nums) {
    const set = new Set(nums)
    
    return set.size !== nums.length 
};

console.log(containsDuplicate([1,2,3,1]));