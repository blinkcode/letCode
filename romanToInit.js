/* 
    罗马数字转换
*/
/* 

罗马数字包含以下七种字符：I， V， X， L，C，D 和 M。

字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。

示例 1:
输入: "III"
输出: 3

示例 2:
输入: "IV"
输出: 4

示例 3:
输入: "IX"
输出: 9

示例 4:
输入: "LVIII"
输出: 58
解释: C = 100, L = 50, XXX = 30, III = 3.

示例 5:
输入: "MCMXCIV"
输出: 1994
解释: M = 1000, CM = 900, XC = 90, IV = 4.*/
/**
 * 
 * 
 * @param {string} s 
 * @returns number
 * @description 1.首先建立一个罗马数字和十进制之间一个关系
 *              2.然后建立一个特殊情况的一个关系
 *              3.循环特殊关系来检查输入的字符串中是否含有该特殊值，
 *                如果有则将他在原字符串中删掉 并且计算和
 *              4.将剩余的普通规则的罗马字符串分割成数组依次按照普通映射表来相加即可
 */
var romanToInt = function(s) {
  let sum = 0;
  let normalMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let specialArr = [
    { key: "CM", value: 900 },
    { key: "CD", value: 400 },
    { key: "XC", value: 90 },
    { key: "XL", value: 40 },
    { key: "IX", value: 9 },
    { key: "IV", value: 4 }
  ];
  specialArr.forEach(function(value, index) {
    if (s.match(value.key) !== null) {
      sum += value.value;
      s = s.replace(value.key, "");
    }
  });
  let arr = s.split("");
  arr.map(function(a) {
    sum += normalMap[a];
  });
  return sum;
};
romanToInt('MCMXCIV')