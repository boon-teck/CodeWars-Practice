/**
 * @param {number[]} nums
 * @return {number[]}
 */
//spread operator
var getConcatenation = function(nums) {
    return [...nums, ...nums]
};

//normal loop
var getConcatenation = function(nums) {
    let newArray = [];
    for (i=0; i <nums.length; i++){
        newArray[i] = nums[i]
        newArray[i+nums.length] = nums[i]
    }
    return newArray;
};