/* 
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
说明:

所有输入只包含小写字母 a-z 。 */

/**
 *
 *
 * @param {string []} strs
 * @returns string
 * @description  未成功  后期会做修改
 *  1.数组的每一项字符串全部分割
 *  2.双重循环判断字符串的对应位置项是不是跟下一项的对应位置相等
 *  3.如果相等 则计数添加一个  same数组得到的是相邻两项出现公共前缀的所有数量
 *  4.取same的最小值 则为原数组的公共前缀数量；
 */
var longestCommonPrefix = function(strs) {
  let str = "";
  for (let i = 0; i < strs.length; i++) {
    strs[i] = strs[i].split("");
  }
  let same = [];
  for (let i = 0; i < strs.length - 1; i++) {
    let num = 0;
    var flag = true;
    for (let j = 0; j < strs[i].length; j++) {
      if (flag) {
        if (strs[i][j] === (strs[i + 1][j] || "")) {
          num++;
        } else {
          same.push(num);
          flag = false;
          num = 0;
        }
      }
    }
  }
  var sameNum = Math.min(...same);
  if (sameNum === 0) return "";
  for (let i = 0; i < sameNum; i++) {
    str += strs[0][i];
  }
  console.log(str);
};
// longestCommonPrefix(["", ""]);

/**
 *
 *
 * @param {any} strs
 * @returns string
 * @description
 */
function longestCommonPrefix1(strs) {
    if(strs.length===0) return '';
    if(strs.length===1) return strs[0];
  for (let i = 0; i < strs.length; i++) {
    strs[i] = strs[i].split("");
  }
  var same = [];
  //数组排序 以最短的遍历
  strs.sort(function(a, b) {
    return b.length - a.length;
  });
  let num = 0;
  let flag = true;
  for (let i = 0; i < strs[0].length; i++) {
    const s = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (s !== strs[j][i]) {
        if (flag) {
          num = i;
          flag = false;
        }
      }
    }
  }
  if(num===0)return '';
  let str = '';
  for(let i = 0;i<num;i++){
      str+= strs[0][i];
  }
  console.log(str);
}
longestCommonPrefix1(['a','a']);
