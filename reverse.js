/**
 * 
 * 
 * @param {number} x 
 * @returns number
 * @desc 先取绝对值
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