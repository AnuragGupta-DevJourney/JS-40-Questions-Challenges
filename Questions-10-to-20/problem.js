/*
    --- Write a function that counts and prints the number of vowels and consonants in a given string


function countVowelsAndConsonantsInStr(string) {
  string = string.replaceAll(" ", "").toLowerCase();

  let vowels = "aeiou";
  let countOfVowels = 0;
  let countOfConsonents = 0;
  for (let char of string) {
    if (vowels.includes(char)) {
      countOfVowels = countOfVowels + 1;
    } else {
      countOfConsonents = countOfConsonents + 1;
    }
  }
  console.log("vowels", countOfVowels);
  console.log("consonents", countOfConsonents);
  //   console.log(string.length, countOfConsonents + countOfVowels);
}

countVowelsAndConsonantsInStr("Hello World")

*/

/*
    --- Write a function that finds all the factors of a given number
        'factor' : means is a number that divides the given number evenly or exactly,leaving no reminder.
        EX : 4 : 1,2,4.
             14 : 1,2,7,14

function factorsOfGivenNum(number) {
  let totalFactors = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      totalFactors.push(i);
    }
  }

  return totalFactors;
}

let res = factorsOfGivenNum(35);
console.log(res);
*/

/*
    --- WRITE A FUNCTION THAT CALCULATE THE NUMBER OF AN ARRAY AND RETURNS THA AVERAGE OF A SET
    OF NUMBERS
      'average' : sum of all number / total count of numbers


function averageOfArrNum(array) {
  let sumOfNum = 0;
  let averageRes = 0;
  for (let num of array) {
    sumOfNum = sumOfNum + num;
  }

  averageRes = sumOfNum / array.length;

  return averageRes;
}

let res = averageOfArrNum([1, 2, 4]);
console.log(res);

*/

/*

    ---- Write a function that calculates and prints the simple interest on a loan amount.
  Input:
    Principal amount
    Interest rate (yearly)
    Time duration (how many years)
  Return: Interest amount
  Simple interest:
    (Principal * Interest Rate * Time Duration) / 100
  Example:
    1000, 5%, 1 year = (1000*5*1)/100 = 50 20000, 10%, 5 = (20000*10*5) / 100 = 10000 

    (why it is in detail becz mai bhul gya hu simple interest kya tha 😭)

soln:

function simpeInterstOfLoanAmount(principalAmount , interestRateYearly , timeDuratioInYear){

  let interestAmountWill = 0

  let res = (principalAmount * interestRateYearly * timeDuratioInYear) / 100;

  interestAmountWill = res

  return interestAmountWill
}

let res = simpeInterstOfLoanAmount(1000,5,1)
console.log("Your simple interest will be rupees",res)

*/

/*
      --- WRITE A FUCNTION WHICH INDENTIFIES THAT THE GIVEN NUMBER IS PRIM OR NOT
       'prime' : those number who did not divisible bewteen 1 itself number i.e for 5 ->  2,3,4
        inshot aise number jo 1 or khud ke alwa kisi se bhi divide karne par reminder 0 nai ata use hum prime kahete hai,
        else agar 1 or use number jo humne liye hai uske bich ke number se wah divide ho jata hai tht means that number is not prime or composite

  soln : 

function isNumPrime(number) {
  if (number === 1) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }

    return true;
  }
}

let res = isNumPrime(74);
res = res ? "Prime" : "Not Prime";
console.log(res);

*/

/*
      ---- WRITE A FUNCTION THAT COUNTS AND RETURN THE NUMBER OF WORDS IN A SENTENCE


function wordsInSentence(string) {
  string = string.trim();
  string = string.replace("  ","")
  let whiteSpcace = " ";
  let count = 1;
  for (let char of string) {
    if (whiteSpcace.includes(char)) {
      // console.log("yes")
      count++;
    }
  }
  console.log(count);
}

let res = wordsInSentence(" what is the day today");

// simple built-in soln is ---> string.split(" ").length done ✅

*/

/*
    --- WRITE A FUNCTION THAT CONVERTS A TEMPERATURE IN CELSIUS TO FAHRENHEIT [Easy question if know the formula😁]
      formul -> F = ( C * 9/5 ) + 32


function celsiusToFahrenheit(temperatureInCelsius){

  let fahrenheitVal = 0;  

  let res = (temperatureInCelsius * 9/5) + 32
  fahrenheitVal = Math.round(res)

  return fahrenheitVal

}

let res = celsiusToFahrenheit(34)
console.log(res,"°F")

*/

/*
      --- WRITE A PROGRAM TO SWAP TO 2 NUMBERS WITHOUT USING THIRD VARIABLE.

function swapTwoNumber(number1, number2) {
  let temp1 = number1
  let temp2 = number2
  number1 = number1 + number2
  number2 = number1 - number2
  number1 = number1 - number2

  console.log(`number1: ${temp1} and number2: ${temp2} after swapping number1: ${number1} and number2: ${number2}`);
}
 swapTwoNumber(10,20)

*/

/*
      --- WRITE A PROGRAM THAT CHECK THE GIVEN NUMBER IS ARMSTRONG OR NOT
          'armstrong' : its a number that is equal to the sum of its own digits raised to the power of the number of digits
            mtlab jo number hai uske digit alag kr then jitne total count of digit hai unka each number par put kro then subko sum kr do
          Ex -> 153 -> 1^3 + 5^3 + 3^3 = 1 + 25 + 27 = 153 (means this is prime number)

soln

function isNumArmstrong(number) {
  let powerValue = parseInt(String(number).length);

  let tempval = number;
  let resultVal = 0;

  let i = 0;
  while (number > 0) {
    let reminder = number % 10;
    resultVal = resultVal + reminder ** powerValue;
    number = Math.floor(number / 10);
    i++;
  }

  if (tempval === resultVal) {
    return true;
  }
  return false;
}

// let res = isNumArmstrong(1634);
let res = isNumArmstrong(92727);
console.log(res);

*/

/*
    ---- WRITE A PROGRAM THAT PRINT NUMBER FROM 1 TO N,
      REPLACING
        MULTIPLE OF 3 WITH "Fizz"
        MULTIPLE OF 5 WITH "Buzz"
        MULTIPLE OF BOTH 3 AND 5 WITH "FizzBuzz"
*/

function fizzBuzzProgram(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    }
    else{
      console.log(i)
    }
  }
}

fizzBuzzProgram(50);

