// Problem-1: Calculate sum of two number
function calculateSum(num1, num2){
    return num1 + num2;
}

let sum =  calculateSum(50, 50);
console.log(sum);

//Problem-2: Check the number is even or not
function isEven(num){
    let isevenNum = (num % 2 === 0) ? true : false;
    return isevenNum;
}

let isEvenNumber =  isEven(0);
console.log(isEvenNumber);

//Problem-3: Find the largest number in an array
function findMax(numArray){
    let max = 0;
    for(let i=0; i<numArray.length; i++){
        if(numArray[i] > max)
            max = numArray[i];
        else
            max = max;
    }
    return max;
}

let myArray = [12, 80, 20, 95, 75, 30, 7];
let maximumNumber = findMax(myArray);
console.log(maximumNumber);

//Problem-4: Filter the odd numbers from an array
function filterOddNumbers(array){
    let oddArray = [];
    for(let i=0; i<array.length; i++){
        if(array[i]%2 != 0)
            oddArray.push(array[i]);
    }
    return oddArray;
}

let myEvenOddArray = [5, 10, 15, 20, 25, 30];
let oddNumArray = filterOddNumbers(myEvenOddArray);
console.log(oddNumArray);

//Problem-5: Count Number of word present in a string
function countWords(myString) {
    let count = 0;
    let insideWord = false;
    const symbols = ".,;:!?'\"-()[]{}@$^*~`<>+-/%_";

    for (let i = 0; i < myString.length; i++) {
        if (myString[i] !== ' ' && !symbols.includes(myString[i])) {
            if (!insideWord) {
                count++;
                insideWord = true;
            }
        } else {
            insideWord = false;
        }
    }

    return count;
}

console.log(countWords("This program is for count words in an array of string."));

//Problem-6: Removes duplicate number from an array
function removeDuplicates(array){
    let arrayUniqueElements = [];
    let existedElements = {};

    for (let i=0; i<array.length; i++){
        if(!existedElements[array[i]]){
            arrayUniqueElements.push(array[i]);
            existedElements[array[i]] = true;
        }
    }

    return arrayUniqueElements;
}

let numberArray = [12, 16, 12, 20, 15, 16, 30];
console.log(removeDuplicates(numberArray));
