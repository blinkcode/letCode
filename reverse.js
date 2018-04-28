/**
 * 给定一个 32 位有符号整数，将整数中的数字进行反转。
示例 1:
输入: 123
输出: 321

示例 2:
输入: -123
输出: -321

示例 3:
输入: 120
输出: 21

注意:
假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。根据这个假设，如果反转后的整数溢出，则返回 0。
 * 
 * @param {number} x 
 * @returns number
 * @desc 1.先取绝对值 使用字符串和数组倒序 再变为字符串 Number转一下
 */
var reverse = function(x) {
    let abs = Math.abs(x);
    let num = Number(String(abs).split('').reverse().join(''));
    if((abs+x)===0){
    num = 0-num;   
    }
    if(-(Math.pow(2,31))<num && num <(Math.pow(2,31)-1)){
        return num;
    }else{
        return 0;
    }
    
};
reverse(1534236469);