let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log("Original Array:", fruits);

// Array property
console.log("Array Length:", fruits.length);

// Access first element
console.log("First Element:", fruits[0]);

// Add element at the end
fruits.push("Grapes");
console.log("After push:", fruits);

// Remove element from the end
fruits.pop();
console.log("After pop:", fruits);

// Add element at the beginning
fruits.unshift("Pineapple");
console.log("After unshift:", fruits);

// Remove element from the beginning
fruits.shift();
console.log("After shift:", fruits);

// Sort array
fruits.sort();
console.log("After sort:", fruits);

// Function to display array elements
function displayArray(arr) {
    console.log("Array Elements:");

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// Calling function
displayArray(fruits);

// Number array
let numbers = [10, 20, 30, 40, 50];
// Function to find sum of numbers
function findSum(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

console.log("Numbers:", numbers);
console.log("Sum:", findSum(numbers));
