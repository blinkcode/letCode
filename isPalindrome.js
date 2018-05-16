/* 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
            
示例 1:
输入: 121
输出: true

示例 2:
输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。

示例 3:
输入: 10
输出: false
解 释: 从右向左读, 为 01 。因此它不是一个回文数。*/

/**
 * 
 * 
 * @param {number} x 输入的数字
 * @returns flage
 * @description: 1.判断如果是负数直接退出(负数不成立）
 *                2.通过字符串分割和数组的倒序将倒着读的数得到
 *                 3.循环判断每一项是否相等
 */
var isPalindrome = function(x) {
    var flag = true;
    if(x!=0 && (Math.abs(x)+x)===0){ 
        flag = false;
        return flag;
    }
    var arr = String(x).split('');
    var arr1 = [...arr].reverse();
    // var arr1 = arr.reverse()//这个地方要注意，reverse会改变原数组，
    for(var i = 0;i<arr.length;i++){
        if(arr[i]!==arr1[i]){
            flag = false;
        }
    }
    return flag
};
/**
 * 
 * 
 * @param {number} x 输入的数字
 * @description 1.上面那个太麻烦了，直接判断倒序后数组字符串是否跟原来相等即可 
 */
var isPalindrome1 = function(x) {
    var arr = String(x).split('');
    var arr1 = [...arr].reverse();
    if(arr.toString()===arr1.toString()){
        return true;
    }else{
        return false;
    }   
}