/*
        --- FIND THE GIVEN NUMBER IS EVEN OR ODD

function oddEven(number) {
    if (number % 2 === 0) {
        return "Even"
    }

    return "Odd"
}

const res = oddEven(-130)
console.log(res)
*/

/*
    ---SMALLEST NUMBER FROM GIVEN THREE NUMBERS

function findSmallestNumber(number1, number2, number3) {
  let arr = [];
  arr.push(number1, number2, number3);
  arr.sort();
  return arr[0];
}

function findSmallestNumber2(number1, number2, number3) {
  if (number1 < number2 && number1 < number3) {
    return number1;
  }
  if (number2 < number1 && number2 < number3) {
    return number2;
  }
  if (number3 < number1 && number3 < number2) {
    return number3;
  }
}

const result = findSmallestNumber2(88, 54, 90);
console.log(result);
*/

/*
        --- WRITE A FUNCTION THAT RETURN THE REVERSE OF A STRING

function reverseString(string) {
  let reverseStr = "";
  for (let i = 0; i < string.length; i++) {
    let idx = string.length - 1 - i;
    reverseStr = reverseStr + string[idx];
  }
  return reverseStr;
}

function reverseString2(string) {
  let reverseStr = string.split("").reverse().join("");
  return reverseStr;
}

let res = reverseString2("Anurag");
console.log(res);

*/

/*
    --- WRITE A FUNCTION THAT CALACULATE THE FACTORIAL OF GIVEN NUMBER

    function calculateFactorial(number){
        let fact = 1;
        for(let i = 1 ; i<=number ; i++){
            fact = fact * i
        }
        return fact
    }

   const res =  calculateFactorial(4)
   console.log(res)

    */

/*
    --- WRITE A FUNCTION TO IDENTIFY THE GIVEN YEAR IS LEAP OR NOT

function leapYearOrNot(year){
    if(year % 4 === 0){
        return `The given ${year} is the leap year `
    }

    return `The given ${year} is not leap year `
}

let res = leapYearOrNot(2024)
console.log(res)

*/

/*
    ---WRITE A FUNCTION THAT CALCULATE AND PRINT THE SUM  OF THE DIGIT OF GIVEN NUMBER


function sumOfTheGivenDigitNum(number) {
  let sum = 0
  let i = 0;
  while (number > 0) {
    let rem = number % 10;
    number = Math.floor(number/10)
    // console.log(rem);
    sum = sum + rem
    i++
  }
  return sum
}

let num = 46465465;
// console.log(num.length);
let res = sumOfTheGivenDigitNum(56)
console.log(res)

*/

/*
    ---- FUNCTION THAT GENERATE AND PRINT A MULTIPLICATION TABLE FOR GIVEN  NUMBER UP TO A SPECIFIED RANGE
    ex -> 4,10 =>4,8,..,40
    ex -> 8,20 =>8,16,..,160


function printTheTableOfGivenNum(number , range){
  for(let i = 1 ; i<=range ; i++){
    console.log(`${number} x ${i} = ${number * i}`)
  }
}

printTheTableOfGivenNum(5,40)

*/

/*
    --- WRITE A FUNCTION THAT FINDS  AND PRINTS THE MAXIMUM ELEMENT IN ARRAY OF NUMBERS

function printMaxNumFromArr(arry){
  return Math.max(...arry)
}

let res = printMaxNumFromArr([45,9,897,46,696,95])
console.log(res)

*/

/*
    --- WRITE A FUNCTION THAT CHECKS IF A STRING IS A PALINDROME OR NOT

function isStringPalindrome(string) {
  let temp = string;
  let reverStr = string.split("").reverse().join("");

  if (temp === reverStr) {
    return true;
  }

  return false;
}

let res = isStringPalindrome("level");
console.log(res);

*/

/*
  --- CALCULATE THE POWER OF NUMBER (baseVal,expoVal)
  ex -> 2,3 = 2 * 2 * 2
      -> 3,5 = 3 * 3 * 3 * 3 * 3
*/

function calcPower(baseVal, expoVal) {
  let powerRes = 1;
  for (let i = 1; i <= expoVal; i++) {
    powerRes = powerRes * baseVal;
  }

  return powerRes;
}

let res = calcPower(3, 5);
console.log(res);
