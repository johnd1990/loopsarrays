console.log("Block 14 Workshop: Loops and Arrays")
console.log("\n******************************************************")
console.log("Only Odds\n")

/* ******************************************************
Only Odds Pseudocode:
    Create a function called "filterOddNumbers" that takes an array of numbers as input.
    Create a new empty array called "resultArray".
    Iterate over the input array using a for loop.
    For each number in the input array, check if it's odd using the modulus operator (%).
    If the number is odd, push it into the "resultArray".
    After the loop is complete, check the length of "resultArray".
    If the length is greater than 1, return "resultArray".
    If the length is 1, return an array with the single odd number.
    Print the input array and the result array to the console.
*/

function getOddNumbers(arr) {
    let oddNumbers = arr.filter(num => num % 2 !== 0);
    if (oddNumbers.length === 1) {
        return [oddNumbers[0]];
    }
    return oddNumbers;
}

// Test cases
const arr1 = [2, 4, 6, 8, 11, 20, 15, 22];
console.log("Input array: ", arr1);
console.log("Output array: ", getOddNumbers(arr1));

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Input array: ", arr2);
console.log("Output array: ", getOddNumbers(arr2));

const arr3 = [70, 42, 55, 81, 21, 91, 34];
console.log("Input array: ", arr3);
console.log("Output array: ", getOddNumbers(arr3));

const arr4 = [2, 4, 6, 8, 10, 11, 12];
console.log("Input array: ", arr4);
console.log("Output array: ", getOddNumbers(arr4));

/* ******************************************************
Vowels vs Constant Pseudocode:
    Define a function that takes a string parameter.
    Initialize two variables: one for counting the number of consonants, and the other for counting the number of vowels.
    Loop through each character of the string.
    Check if the current character is a vowel.
    If the current character is a vowel, increment the vowel counter.
    Otherwise, increment the consonant counter.
    After the loop, print the original string followed by the number of consonants and vowels.
*/

console.log("\n******************************************************")
console.log("Vowels vs Constant\n")

/*
Function accepts a string input and initializes two variables for counting consonants and vowels. 
Then iterates through each character in the string and checks if it is a vowel or consonant. 
Depending on which, the corresponding variable is incremented. 
Function returns a string with the original input along with the counts of consonants and vowels.
*/

function countVowelsAndConsonants(str) {
    let vowels = 0;
    let consonants = 0;
    const vowelsArr = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        if (vowelsArr.includes(char)) {
            vowels++;
        } else {
            consonants++;
        }
    }
    console.log(`${str} has ${consonants} consonants and ${vowels} vowels`);
}

countVowelsAndConsonants('hello');
countVowelsAndConsonants('ukelele');
countVowelsAndConsonants('awesome');
countVowelsAndConsonants('onomonopia');
countVowelsAndConsonants('textbook');

/* ******************************************************
Reverse Array Pseudocode:
    Define a function that accepts an array as an argument.
    Create an empty array to hold the reversed array.
    Start a for loop that will iterate over each element in the array starting from the last index and decrementing by 1 each time.
    Within the loop, push the current element into the new array.
    Return the new array with the elements in reverse order.
    Call the function with the given input arrays and print the original and reversed arrays.
*/

console.log("\n******************************************************")
console.log("Reverse Array\n")

// Function sets up a for loop going through each element of the input array starting from the end going backwards
function reverseArray(array) {
    const reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}

const array1 = [1, 2, 3];
console.log("Input array:", array1);
console.log("Reversed array:", reverseArray(array1));

const array2 = [1, 3, 5, 7, 9, 11];
console.log("Input array:", array2);
console.log("Reversed array:", reverseArray(array2));

const array3 = [20, 50, 30, 60, 200];
console.log("Input array:", array3);
console.log("Reversed array:", reverseArray(array3));

const array4 = [1, -1, 2, -3, 5, -8, 13];
console.log("Input array:", array4);
console.log("Reversed array:", reverseArray(array4));


/* ******************************************************
FizzBuzz Pseudocode:
    Create a loop that goes from 1 to 100.
    For each number in the loop, check if it is a multiple of both 3 and 5, and if so, print "FizzBuzz".
    If the number is not a multiple of both 3 and 5, check if it is a multiple of 3, and if so, print "Fizz".
    If the number is not a multiple of both 3 and 5, and not a multiple of 3, check if it is a multiple of 5, and if so, print "Buzz".
    If the number is not a multiple of either 3 or 5, print the number itself.
    End loop.
*/

console.log("\n******************************************************")
console.log("FizzBuzz\n")

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) { // If i is not a multiple of 15, this else if statement checks if i is divisible by 3.
            console.log("Fizz");
        } else if (i % 5 === 0) { // If i is not divisible by 3, this else if statement checks if i is divisible by 5.
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

console.log("Printing numbers from 1 to 100 with FizzBuzz:");
fizzBuzz();
console.log("******************************************************")