/* 
    Input: Array of numbers
    Output: integer
    Purpose: Determine the minimum number of deletions needed to make all remaining elements equal
*/

function equalize(arr) {
    // edge cases: array has 0 or 1 element
    if(arr.length == 1 || arr.length == 0)
        return 0;

    // dictionary to track number of occurrences of each term
    let tracker = {};
    
    // calculate occurrence of all values
    arr.forEach(element => tracker[element] >-1 ? tracker[element]++ : tracker[element] = 1);

    let modeValue = 0;

    // Determine value of the array's mode term
    Object.keys(tracker).length == 1 ? 
        modeValue = arr.length : 
        modeValue = Object.keys(tracker).reduce((a, b) => tracker[a] > tracker[b] ? tracker[a] : tracker[b]);

    return arr.length- modeValue;
}


// test cases
let arrs1 = [1,2,2,3];
let arrs2 = [7,7,7,7,7,7,7,7,7,7,7,7,7,7];
let arrs3 = [7,2,4,5,2,3,3,4,1,7,3];
let arrs4 = [2,2];
let arrs5 = [1];
let arrs6 = [];
let arrs7 = [1,2,2,1];

console.log(equalize(arrs1));
console.log(equalize(arrs2));
console.log(equalize(arrs3));
console.log(equalize(arrs4));
console.log(equalize(arrs5));
console.log(equalize(arrs6));
console.log(equalize(arrs7));