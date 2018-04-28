// 给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
// 你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。
// 示例:
// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
/**
    * @param {number[]} nums
    * @param {number} target
    * @return {number[]}
        desc:数组的第一个数和剩下的数遍历只要第一个数和其中一个相加为target即可，
            这个地方要注意index的的位置关系
    */
var twoSum = function(nums, target) {
  nums.map(function(value, index, array) {});
  for (let i = 0; i < nums.length; i++) {
    var index1 = nums.findIndex(function(value, index, arr) {
      return index > i && value + nums[i] === target;
    });
    if (index1 !== -1) {
      return [i, index1];
    }
  }
};
console.log(twoSum([3, 2, 4], 6));
