/* 
    罗马数字转换
*/
var romanToInt = function(s) {
  let sum = 0;
  let map = {
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
  let normalStr = s;
  specialArr.forEach(function(value, index) {
    if (s.match(value.key) !== null) {
      sum += value.value;
      normalStr = s.replace(value.key, "");
      s = normalStr;
    }
  });
  let arr = normalStr.split("");

  arr.map(function(a) {
    sum += map[a];
  });
  return sum;
};
romanToInt('MCMXCIV')