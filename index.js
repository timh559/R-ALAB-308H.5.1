// 1
function maxOfTwoNumbers(a, b) {
    if (a <= b) {
        return b;
    }
    else {
        return a;
    }
}
console.log("maxOfTwoNumbers");
console.log(maxOfTwoNumbers(1, 2));
console.log("================================================")
// 2
function maxOfThreeNumbers(a, b, c) {
    if (a > b && a > c) {
        return a;
    }
    else if (b > a && b > c) {
        return b;
    }
    else {
        return c;
    }
}
console.log("maxOfThreeNumbers");
console.log(maxOfThreeNumbers(1, 2, 3));
console.log("================================================")
// 3
const isChar = function isCharAVowel(a) {
    if (a === 'a' || a === 'e' || a === 'i' || a === 'o' || a === 'u') {
        return true;
    }
    else {
        return false;
    }
}
console.log("isCharAVowel");
console.log(isChar('e'));
console.log("================================================")
// 4
const sum = function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log("sumArray")
console.log(sum([2,4,5]));
console.log("================================================")
// 5
function multiplyArray(arr) {
    let sum = -1;
    for (let i = 0; i < arr.length; i++) {
        sum *= arr[i];
    }
    return Math.abs(sum);
}
console.log("multiplyArray")
console.log(multiplyArray([2,4,5]));
console.log("================================================")
// 6
const numArgs = function numArgs(...args) {
    return arguments.length;
}
console.log("numArgs")
console.log(numArgs(1,3,4,5,6,4,3,2,3,3,4,4,5,5));
console.log("================================================")
// 7
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log("reverseString");
console.log(reverseString("rockstar"));
console.log("================================================")
// 8
const longestString = function longestStringInArray(arr){
    let longestStringLength = 0;
    for (let i = 0; i<arr.length;i++) {
        if(longestStringLength<=arr[i].length) {
            longestStringLength = arr[i].length;
        }
    }
    return longestStringLength;
}
console.log("longestStringInArray");
console.log(longestString(["sdf","skfsdfjks","lksdfjksdkfsdlfjsd","sdkfjsdf"]));
console.log("================================================")
// 9
function stringsLongerThan(arr, length) {
    let longerThan = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length > length) {
            longerThan.push(arr[i]);
        }
    }
    return longerThan;
}
console.log("stringsLongerThan");
console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3));
console.log("================================================")
// 10
const addList = function addList(...arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log("addList");
console.log(addList(1,2,3,4,5,6,7,8,9,10,11,12,13));