/* 
    Input: base 10 number
    Output: roman numeral representation of input
    Purpose: Convert a number in base 10 into roman numerals
*/
function toRoman(number) {
    let romanNumeralString = "";

    // dictionary for conversion
    const dict = {1000:"M", 900:"CM", 500:"D", 400:"DC", 100:"C", 90:"XC", 50:"L", 40:"XL", 10:"X", 9:"IX", 5:"V", 4:"IV", 1:"I"};

    Object.keys(dict).reverse().forEach(key => {
        while(number >= key) {
            number -= key;
            romanNumeralString += dict[key];
        }
    });

    return romanNumeralString;

}

/* 
    Input: number in roman numerals
    Output: base 10 representation of input
    Purpose: Convert a number in roman numerals into base 10
*/
function fromRoman(string) {
    let baseTenNum = 0;

    // dictionary for conversion
    const dict = {"M":1000, "CM":900, "D":500, "DC":400, "C":100, "XC":90, "L":50, "XL":40, "X":10, "IX":9, "V":5, "IV":4, "I":1};

    Object.keys(dict).forEach(key => {
        while(string.indexOf(key) == 0) {
            string = string.replace(key,'');
            baseTenNum+= dict[key];
        }
    });

    return baseTenNum;
}

// test cases
console.log(`1990 is ${toRoman(1990)} in roman numerals.`);
console.log(`2008 is ${toRoman(2008)} in roman numerals.`);
console.log(`1666 is ${toRoman(1666)} in roman numerals.`);

console.log(`MCMXC is ${fromRoman("MCMXC")} in base 10.`);
console.log(`MMVIII is ${fromRoman("MMVIII")} in base 10.`);
console.log(`MDCLXVI is ${fromRoman("MDCLXVI")} in base 10.`);