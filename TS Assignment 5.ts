// Easy

// 1. Log "Hello, World!" to the console
console.log("Hello, World!");

// 2. Create a variable temperature and assign it a value. Log "It's cold!" if the temperature is below 20 degrees Celsius.
let temperature = 15;
if (temperature < 20) {
    console.log("It's cold!");
}

// 3. If you have 10 apples and you give away 3, how many do you have left? Log the result.
let apples = 10;
apples -= 3;
console.log(apples); // Output: 7

// 4. Declare two variables, firstName and lastName, then create a third variable fullName that combines them. Log the result.
let firstName: string = "John";
let lastName: string = "Doe";
let fullName: string = `${firstName} ${lastName}`;
console.log(fullName); // Output: John Doe

// 5. TypeScript code that uses a comparison operator to check if the number 5 is greater than 3. Log "Yes" if true, otherwise log "No".
let number1: number = 5;
let number2: number = 3;
if (number1 > number2) {
    console.log("Yes");
} else {
    console.log("No");
}

// Medium

// 6. Function to calculate the area of a circle
function calculateArea(radius: number): number {
    return Math.PI * radius * radius;
}

// 7. Loop that logs numbers from 1 to 50. For multiples of 3, log "Fizz" instead of the number, and for multiples of 5, log "Buzz".
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// 8. Define an array temperatures with at least five different temperatures. Find and log the highest temperature.
let temperatures: number[] = [16, 23, 12, 28, 19];
let maxTemperature: number = Math.max(...temperatures);
console.log(maxTemperature);


// 10. Function that takes an array of numbers and returns the count of positive numbers in the array.
function countPositiveNumbers(numbers: number[]): number {
    let count: number = 0;
    for (let number of numbers) {
        if (number > 0) {
            count++;
        }
    }
    return count;
}

// Arrays and Array Methods

// 11. Function that takes an array of words and returns a new array containing only the words that start with the letter 'a'.
function filterWords(words: string[]): string[] {
    return words.filter(word => word.startsWith('a'));
}

// 12. Log the second to last element of an array named fruits.
let fruits: string[] = ["apple", "banana", "cherry", "date"];
console.log(fruits[fruits.length - 2]); // Output: cherry

// 13. Function that takes an array of numbers and returns a new array with each number squared.
function squareNumbers(numbers: number[]): number[] {
    return numbers.map(number => number * number);
}

// 14. Function that accepts an array and reverses its elements without using the .reverse() method. Log the result.
function reverseArray<T>(array: T[]): T[] {
    let reversed: T[] = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i]);
    }
    return reversed;
}

// 15. Given an array scores, log the number of times the score exceeded the maximum score and the number of times it fell below the minimum score.
function logScoreExtremes(scores: number[]): void {
    let maxScore: number = scores[0];
    let minScore: number = scores[0];
    let maxExceeds: number = 0;
    let minFalls: number = 0;

    for (let score of scores) {
        if (score > maxScore) {
            maxScore = score;
            maxExceeds++;
        }
        if (score < minScore) {
            minScore = score;
            minFalls++;
        }
    }
    console.log(`Exceeded max score: ${maxExceeds} times, Fell below min score: ${minFalls} times`);
}

let scores: number[] = [10, 5, 20, 20, 4, 5, 2, 25, 1];
logScoreExtremes(scores);

// 16. Function that removes all falsey values from an array.
function removeFalseyValues(array: any[]): any[] {
    return array.filter(Boolean);
}

// 17. Script that concatenates two arrays [1, 2, 3] and [4, 5, 6] into a single array.
let array1: number[] = [1, 2, 3];
let array2: number[] = [4, 5, 6];
let concatenatedArray: number[] = array1.concat(array2);
console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]

// 18. Function called sumOfElements that calculates the sum of all elements in an array that are either even or odd, based on a parameter.
function sumOfElements(array: number[], type: 'even' | 'odd'): number {
    return array.reduce((sum, number) => {
        if (type === 'even' && number % 2 === 0) {
            return sum + number;
        } else if (type === 'odd' && number % 2 !== 0) {
            return sum + number;
        }
        return sum;
    }, 0);
}

// 19. Function that checks whether an element exists in an array. If it exists, return the index, otherwise return -1.
function findElementIndex(array: any[], element: any): number {
    return array.indexOf(element);
}

// 20. Function to find and return the smallest number in an array of integers.
function findSmallestNumber(numbers: number[]): number {
    return Math.min(...numbers);
}

// Functions

// 21. Function calculateProduct that takes an array of numbers and returns the product of all elements.
function calculateProduct(numbers: number[]): number {
    return numbers.reduce((product, number) => product * number, 1);
}

// 22. Function filterByLength that takes an array of strings and a number n. Returns an array containing only the strings that are longer than n characters.
function filterByLength(strings: string[], n: number): string[] {
    return strings.filter(string => string.length > n);
}

// 23. Function findDuplicates that finds and logs all duplicates in an array.
function findDuplicates(array: any[]): void {
    let duplicates: any[] = [];
    let seen: Set<any> = new Set();

    for (let item of array) {
        if (seen.has(item)) {
            if (!duplicates.includes(item)) {
                duplicates.push(item);
            }
        } else {
            seen.add(item);
        }
    }
    console.log(duplicates);
}

// 24. Function incrementAll that takes an array of integers and increments each element by one.
function incrementAll(array: number[]): number[] {
    return array.map(number => number + 1);
}

// 25. Function countOccurrences that counts how many times a specific element appears in an array.
function countOccurrences(array: any[], element: any): number {
    return array.filter(item => item === element).length;
}

// 26. Function isSorted that checks if an array is sorted in ascending order.
function isSorted(array: number[]): boolean {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return false;
        }
    }
    return true;
}

// 27. Function that receives an array of names and formats them into a string separated by commas, except for the last two names, which should be separated by "and".
function formatNames(names: string[]): string {
    if (names.length <= 1) {
        return names.join('');
    }
    let lastTwo: string = names.slice(-2).join(' and ');
    let rest: string = names.slice(0, -2).join(', ');
    return rest ? `${rest}, ${lastTwo}` : lastTwo;
}

// 28. Function that converts an array of Fahrenheit temperatures to Celsius and logs the new temperatures.
function convertToCelsius(fahrenheitTemps: number[]): void {
    let celsiusTemps: number[] = fahrenheitTemps.map(temp => (temp - 32) * 5 / 9);
    console.log(celsiusTemps);
}

// 29. Function minMaxAverage that takes an array of numbers and returns an object with properties for the minimum, maximum, and average of those numbers.
function minMaxAverage(numbers: number[]): { min: number, max: number, average: number } {
    let min: number = Math.min(...numbers);
    let max: number = Math.max(...numbers);
    let average: number = numbers.reduce((sum, number) => sum + number, 0) / numbers.length;
    return { min, max, average };
}

// 30. Function swapElements that swaps two specified indices in an array.
function swapElements(array: any[], index1: number, index2: number): any[] {
    let temp: any = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return array;
}

// Hard

// 31. Function that takes two inputs, a string and a character, and returns the number of times the character appears in the string.
function countCharacterOccurrences(str: string, char: string): number {
    return str.split(char).length - 1;
}

// 32. 'To-do list' array of objects where each object has properties task and completed. Log only the tasks that are not yet completed.
let todoList = [
    { task: 'Do laundry', completed: false },
    { task: 'Clean room', completed: true },
    { task: 'Write code', completed: false }
];

function logIncompleteTasks(todoList: { task: string, completed: boolean }[]): void {
    todoList.filter(item => !item.completed).forEach(item => console.log(item.task));
}

logIncompleteTasks(todoList);

// 33. Function that takes an array of integers and sorts them from smallest to largest.
function sortArray(numbers: number[]): number[] {
    return numbers.sort((a, b) => a - b);
}

// 34. TypeScript program that logs every element of an array in reverse order without using the .reverse() method.
function logArrayInReverse<T>(array: T[]): void {
    for (let i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}

let array: number[] = [1, 2, 3, 4, 5];
logArrayInReverse(array);

// 35. Script that simulates a basic calculator. It should take two operands and an operator ('+', '-', '*', '/') from the user, perform the operation, and log the result.
function basicCalculator() {
    let operand1: number = parseFloat(prompt("Enter the first number:") || "0");
    let operand2: number = parseFloat(prompt("Enter the second number:") || "0");
    let operator: string = prompt("Enter an operator (+, -, *, /):") || "+";

    let result: number;
    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            result = operand1 / operand2;
            break;
        default:
            console.log("Invalid operator!");
            return;
    }
    console.log(`Result: ${result}`);
}


