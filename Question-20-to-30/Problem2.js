/* 
     --- PERFECT NUMBER EXAMPLE
        its means sum of proper divisor,excluding itself, is equals the number itself


function checkPerfectNumber(positiveInteger) {
  let num = positiveInteger;
  let sumOfReminder = 0;
  let properDivisor = [];
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      // console.log(i);
      properDivisor.push(i);
      sumOfReminder = sumOfReminder + i;
    }
  }

  if (sumOfReminder === num) {
    console.log(`Perfect number  bcz num ${num}, \nits proper divisors are ${properDivisor} and its sum is ${sumOfReminder} which are equal to ${num}`);
  } else if (sumOfReminder != num) {
    console.log(
      `Not perfect number, bcz num ${num} ,\nits proper divisors are ${properDivisor} and its sum is ${sumOfReminder} which are not equal to ${num}`
    );
  }
}

checkPerfectNumber(6);
checkPerfectNumber(28);
checkPerfectNumber(85);
checkPerfectNumber(8128);
checkPerfectNumber(8118);

 */

/*
    --- STRONG PASSWORD CHECKER
        PASSWORD SHOUL CONTAIN: 
            minumum 8 char
            one small case character a-z
            one big case character A-Z
            one specail character - !@



function isPasswordStrong(passwordInString) {
  let password = passwordInString;

  let smallCasesChars = "abcdefghijklmnopqrstuvwxyz";
  let bigCaseChars = smallCasesChars.toUpperCase();
  let oneNumbers = "0123456789";
  let specialChars = "!@";

  if (password.length < 8) {
    console.log("Length of password must be at least 8 characters");
    return false;
  }

  let isContainSmallCase = false;
  let isContainUpperCase = false;
  let isContainNumber = false;
  let isContainSpecialChar = false;

  for (let char of password) {
    if (smallCasesChars.includes(char)) {
      isContainSmallCase = true;
    } else if (bigCaseChars.includes(char)) {
      isContainUpperCase = true;
    } else if (oneNumbers.includes(char)) {
      isContainNumber = true;
    } else if (specialChars.includes(char)) {
      isContainSpecialChar = true;
    }
  }

  if (
    isContainSmallCase &&
    isContainUpperCase &&
    isContainNumber &&
    isContainSpecialChar
  ) {
    return true;
  } else {
    return false;
  }
}

const res = isPasswordStrong("Anuraggupta");
console.log(res);

*/


/*
  --- THIS PROBLEM IS BASED ON MATHMATICS MULTIPLICATION OF 2D MATIX 
*/

/*
    --- TIP CALCULATOR
        WRITE A PROGRAM THAT CALCULATE THE TIP  AMOUNT BASED ON THE BILL TOTAL AND  PERCENTAGE ENTERED BY THE USER 
        INPUT : TOTAL AMOUNT, TIP PERCENTAGE
        OUTPUT : DIFFERENT TIP AMOUNT
        EX : AMOUNT : 1000
            TIP PERCENTAGE : 5, 10,15
            OUTPUT : 50 , 100 , 150

            percentage = (value / totalval )* 100


function tipCalculator(anmountInNumber, tipPercentageInArray) {

  let amount = anmountInNumber
  let tipPercentage = tipPercentageInArray

  let tipResult = []
  for (let percentage of tipPercentage) {
    let value = (percentage / 100) * amount
    value = Math.floor(value)
    tipResult.push(value)
  }

  console.log(`The amount of ${amount} tips are ${tipResult}`)
}

tipCalculator(4572, [5, 10, 15])

*/


/*
    --- WRITE  A PROGRAM TO FIND ALL PALINDROMIC SUBSTRINGS WITHIN A GIVEN STRING
    INPUT - A STRING
    OUTPUT - ARRAY OF ALL PALINDROMIC SUBSTRINGS.
    PALINDROME : ITS EXAMPLES ARE , RADAR,MADAM,LEVEL
*/

let strings = "hello i am anu madam"
strings = strings.toLowerCase()
strings = strings.split(" ")
// console.log(strings)

let palindromeRes = []

for (let substring of strings) {
  let str = substring
  let temp = str
  let reverseStr = ""
  for (let i = 0; i < str.length; i++) {
    reverseIndexing = (str.length - 1) - i
    reverseStr = reverseStr + str[reverseIndexing]
  }
  // console.log(temp, reverseStr)

  if (temp === reverseStr) {
    // console.log("palindrome")
    palindromeRes.push(reverseStr)
  }
  else {
    // console.log("not palindrome")
  }

}
console.log(palindromeRes)
