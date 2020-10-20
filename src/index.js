module.exports = function toReadable (number) {
    if (number === 0) {
        return 'zero';
    }
  
    let num = {
        0: "hundred",
        1: "one",
        10: "ten",
        11: "eleven",
        2: "two",
        12: "twelve",
        20: "twenty",
        3: "three",
        13: "thirteen",
        30: "thirty",
        4: "four",
        14: "fourteen",
        40: "forty",
        5: "five",
        15: "fifteen",
        50: "fifty",
        6: "six",
        16: "sixteen",
        60: "sixty",
        7: "seven",
        17: "seventeen",
        70: "seventy",
        8: "eight",
        18: "eighteen",
        80: "eighty",
        9: "nine",
        19: "nineteen",
        90: "ninety",
        10: "ten",
    }
    const hund = (xxx) => {
        return num[xxx/100] + ' ' + num[0]; 
    }
    const dozen = (xx) => {
        return num[Math.floor( xx / 10 ) * 10] + ' ' + num[xx - Math.floor( xx / 10 ) * 10];
    }
  
    let xxx = Math.floor(number/100) * 100;
    let xx = number - xxx;
  
    if (number <= 20 || (number % 10 === 0 && String(number).length === 2) ) {
        return num[number];
    } else if (number % 100 === 0) {
        return hund(number);
    } else if (String(number).length === 3) {
        
        if (xx in num) {
            return hund(xxx) + ' ' + num[xx];
        } else {
            return hund(xxx) + ' ' + dozen(xx);
        }
    } else {
        return dozen(number);
    }
}
