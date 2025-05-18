/*
        --- WRITE A SIMPLE PYRAMID of given num
            ex -> num = 5
                  1
                1 2 1
              1 2 3 2 1
            1 2 3 4 3 2 1
          1 2 3 4 5 4 3 2 1
        

let inputVal = 5;

for (let i = 1; i <= inputVal; i++) {
  // for spacing
  let str = "";
  for (let spacing = 1; spacing <= inputVal - i; spacing++) {
    str = str + " ";
  }

  for (let counter = 1; counter <= i; counter++) {
    str = str + `${counter}`;
  }

  for (let reverCounter = i - 1; reverCounter >= 1; reverCounter--) {
    // console.log(reverCounter)
    str = str + `${reverCounter}`;
  }

  console.log(str);
}


/*
    --- write a program that counts the occurence of each character in a given string
      Anurag Gupta
      a -> 3
      n -> 1
      u -> 2
      r -> 1
      g -> 2
      p -> 1
      t -> 1
      ' ' -> 1

let str = "Anurag Gupta";
str = str.toLowerCase().trim();

let totalChar = {};

for (let char of str) {
   totalChar[`${char}`] = 0;
}

for (let char of str) {
    totalChar[char] = totalChar[char] + 1;
}

console.log(totalChar)

*/

/*
      --- WRITE A PROGRAM CHECKING ALPHABETICAL ORDER IN STRINGS
          EX:
            'acehkosvz' : true
            'abcab' : false


function isStringAlphabeticalOrder(inputString) {
  let str = inputString;
  str = str.toLowerCase();
  
  let result = true;
  for (let char = 1; char < str.length; char++) {
    // console.log(str[char].charCodeAt(0))
    // console.log(str[char - 1]);
    if (str[char - 1] < str[char]) {
      result = true;
    } else {
      result = false;
      break
    }
  }
  return result;
}

let res = isStringAlphabeticalOrder("acehkosvz");
console.log(res)

*/

/*
    --- WRITE A PROGRAM THAT CHECK IF TWO GIVEN STRINGS ARE ANAGRAMS OF EACH OTHER
      'anagram' -> it is a word that formed by rearranging the letter of another word

function areTwoStringAnagram(string1, string2) { 
  string1 = string1.toLowerCase()
  string2 = string2.toLowerCase()

  if (string1.length !== string2.length) {
    return "give string is not equall";
  }

  for (let char of string1) {
    if (!string1.includes(char)) {
      return false;
    }
  }
  return true;
}

let res = areTwoStringAnagram("pools", "loops");
console.log(res);

*/

let matrix = [[3,4,8],
              [5,6,9]]

// console.log(matrix[0][0])
// console.log(matrix[0][1])
// console.log(matrix[0][2])
// console.log(matrix[1][0])
// console.log(matrix[1][1])
// console.log(matrix[1][2])
let TransposedMatrix = [
  [matrix[0][0] , matrix[1][0]],
  [matrix[0][1] , matrix[1][1]],
  [matrix[0][2] , matrix[1][2]]
]
// console.log(matrix , TransposedMatrix)
for(let item of matrix){
  console.log(item.length)
}
for(let item of TransposedMatrix){
  console.log(item.length)
}

// CONFUSING SOLVE NAI KAR PAA RHA HU😭