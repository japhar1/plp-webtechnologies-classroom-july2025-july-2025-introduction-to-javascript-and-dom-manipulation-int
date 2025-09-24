// =============================================
// JavaScript Fundamentals Assignment
// This script demonstrates:
// - Variables, conditionals (Part 1)
// - Functions (Part 2)
// - Loops (Part 3)
// - DOM Manipulation (Part 4)
// =============================================

// Wait for DOM to load before adding event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Part 1: Event listeners
    document.getElementById('checkAgeBtn').addEventListener('click', checkAge);
    document.getElementById('calculateBtn').addEventListener('click', calculate);
    
    // Part 2: Event listeners
    document.getElementById('toFahrenheitBtn').addEventListener('click', convertToFahrenheit);
    document.getElementById('toCelsiusBtn').addEventListener('click', convertToCelsius);
    document.getElementById('upperCaseBtn').addEventListener('click', function() { formatText('upper'); });
    document.getElementById('lowerCaseBtn').addEventListener('click', function() { formatText('lower'); });
    document.getElementById('capitalizeBtn').addEventListener('click', function() { formatText('capitalize'); });
    
    // Part 3: Event listeners
    document.getElementById('generateSequenceBtn').addEventListener('click', generateSequence);
    document.getElementById('addUserBtn').addEventListener('click', addUser);
    document.getElementById('displayUsersBtn').addEventListener('click', displayUsers);
    document.getElementById('clearUsersBtn').addEventListener('click', clearUsers);
    
    // Part 4: Event listeners
    document.getElementById('changeTextBtn').addEventListener('click', changeText);
    document.getElementById('changeColorBtn').addEventListener('click', changeColor);
    document.getElementById('toggleVisibilityBtn').addEventListener('click', toggleVisibility);
    document.getElementById('createBoxBtn').addEventListener('click', createBox);
    document.getElementById('removeBoxBtn').addEventListener('click', removeLastBox);
    document.getElementById('clearBoxesBtn').addEventListener('click', clearAllBoxes);
    document.getElementById('addListItemBtn').addEventListener('click', addListItem);
});

// =============================================
// PART 1: JavaScript Basics
// Variables, conditionals, and user input
// =============================================

// Task 1: Age Checker
function checkAge() {
    // Get user input using DOM selection
    const ageInput = document.getElementById('ageInput');
    const ageOutput = document.getElementById('ageOutput');
    
    // Validate input
    if (!ageInput.value) {
        ageOutput.textContent = "Please enter your age.";
        ageOutput.style.color = "red";
        return;
    }
    
    // Variable declaration and assignment
    const age = parseInt(ageInput.value);
    
    // Conditional statements to determine eligibility
    if (age < 0 || age > 120) {
        ageOutput.textContent = "Please enter a valid age (1-120).";
        ageOutput.style.color = "red";
    } else if (age >= 18) {
        ageOutput.textContent = `You are ${age} years old. You are eligible to vote!`;
        ageOutput.style.color = "green";
    } else {
        ageOutput.textContent = `You are ${age} years old. You are not yet eligible to vote.`;
        ageOutput.style.color = "orange";
    }
}

// Task 2: Simple Calculator
function calculate() {
    // Get user inputs using DOM selection
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    const calcOutput = document.getElementById('calcOutput');
    
    // Validate inputs
    if (isNaN(num1) || isNaN(num2)) {
        calcOutput.textContent = "Please enter valid numbers.";
        calcOutput.style.color = "red";
        return;
    }
    
    // Variable declaration
    let result;
    
    // Conditional statements to perform the correct operation
    if (operation === 'add') {
        result = num1 + num2;
        calcOutput.textContent = `${num1} + ${num2} = ${result}`;
    } else if (operation === 'subtract') {
        result = num1 - num2;
        calcOutput.textContent = `${num1} - ${num2} = ${result}`;
    } else if (operation === 'multiply') {
        result = num1 * num2;
        calcOutput.textContent = `${num1} × ${num2} = ${result}`;
    } else if (operation === 'divide') {
        // Additional conditional for division by zero
        if (num2 === 0) {
            calcOutput.textContent = "Error: Division by zero is not allowed.";
            calcOutput.style.color = "red";
            return;
        }
        result = num1 / num2;
        calcOutput.textContent = `${num1} ÷ ${num2} = ${result}`;
    }
    
    calcOutput.style.color = "green";
}

// =============================================
// PART 2: JavaScript Functions
// Reusable blocks of logic
// =============================================

// Task 1: Temperature Converter Functions

// Function to convert Celsius to Fahrenheit
function convertToFahrenheit() {
    const tempInput = document.getElementById('tempInput');
    const tempOutput = document.getElementById('tempOutput');
    
    // Input validation
    if (!tempInput.value) {
        tempOutput.textContent = "Please enter a temperature.";
        return;
    }
    
    const celsius = parseFloat(tempInput.value);
    // Formula: F = (C × 9/5) + 32
    const fahrenheit = (celsius * 9/5) + 32;
    
    tempOutput.textContent = `${celsius}°C is equal to ${fahrenheit.toFixed(1)}°F`;
    tempOutput.style.color = "blue";
}

// Function to convert Fahrenheit to Celsius
function convertToCelsius() {
    const tempInput = document.getElementById('tempInput');
    const tempOutput = document.getElementById('tempOutput');
    
    // Input validation
    if (!tempInput.value) {
        tempOutput.textContent = "Please enter a temperature.";
        return;
    }
    
    const fahrenheit = parseFloat(tempInput.value);
    // Formula: C = (F - 32) × 5/9
    const celsius = (fahrenheit - 32) * 5/9;
    
    tempOutput.textContent = `${fahrenheit}°F is equal to ${celsius.toFixed(1)}°C`;
    tempOutput.style.color = "blue";
}

// Task 2: String Formatter Function
function formatText(formatType) {
    const textInput = document.getElementById('textInput');
    const textOutput = document.getElementById('textOutput');
    
    // Input validation
    if (!textInput.value) {
        textOutput.textContent = "Please enter some text.";
        return;
    }
    
    // Variable to store formatted text
    let formattedText;
    
    // Conditional statements to apply the correct formatting
    if (formatType === 'upper') {
        formattedText = textInput.value.toUpperCase();
    } else if (formatType === 'lower') {
        formattedText = textInput.value.toLowerCase();
    } else if (formatType === 'capitalize') {
        // Capitalize the first letter of each word
        formattedText = textInput.value
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }
    
    textOutput.textContent = formattedText;
    textOutput.style.color = "purple";
}

// =============================================
// PART 3: JavaScript Loops
// Efficient repetition with loops
// =============================================

// Task 1: Number Sequence Generator
function generateSequence() {
    const loopCount = parseInt(document.getElementById('loopCount').value) || 5;
    const sequenceOutput = document.getElementById('sequenceOutput');
    
    // Input validation
    if (loopCount < 1 || loopCount > 20) {
        sequenceOutput.textContent = "Please enter a number between 1 and 20.";
        return;
    }
    
    // Array to store the sequence
    let sequence = [];
    
    // For loop to generate the sequence
    for (let i = 1; i <= loopCount; i++) {
        sequence.push(i);
    }
    
    sequenceOutput.textContent = `Sequence: ${sequence.join(', ')}`;
    sequenceOutput.style.color = "darkgreen";
}

// Task 2: User List Manager
// Array to store users (global variable)
let users = [];

// Function to add a user
function addUser() {
    const userNameInput = document.getElementById('userName');
    const name = userNameInput.value.trim();
    
    // Input validation
    if (!name) {
        alert("Please enter a user name.");
        return;
    }
    
    // Add user to the array
    users.push(name);
    userNameInput.value = ''; // Clear input
    displayUsers(); // Update the display
}

// Function to display all users
function displayUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = ''; // Clear current list
    
    // Check if array is empty
    if (users.length === 0) {
        userList.innerHTML = '<li>No users added yet.</li>';
        return;
    }
    
    // For loop to iterate through the users array
    for (let i = 0; i < users.length; i++) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>User ${i+1}: ${users[i]}</span>
            <button onclick="removeUser(${i})">Remove</button>
        `;
        userList.appendChild(listItem);
    }
}

// Function to remove a specific user
function removeUser(index) {
    // Remove user from array
    users.splice(index, 1);
    displayUsers(); // Update the display
}

// Function to clear all users
function clearUsers() {
    // Clear the array
    users = [];
    displayUsers(); // Update the display
}

// =============================================
// PART 4: DOM Manipulation
// Interactive web page elements
// =============================================

// Task 1: Content Modifier

// Function to change text content
function changeText() {
    const modifiableText = document.getElementById('modifiableText');
    const texts = [
        "This text has been changed!",
        "JavaScript is powerful!",
        "DOM manipulation is fun!",
        "You can change content dynamically!"
    ];
    
    // Randomly select a new text
    const randomIndex = Math.floor(Math.random() * texts.length);
    modifiableText.textContent = texts[randomIndex];
}

// Function to change text color
function changeColor() {
    const modifiableText = document.getElementById('modifiableText');
    const colors = ['red', 'blue', 'green', 'purple', 'orange', 'teal'];
    
    // Randomly select a new color
    const randomIndex = Math.floor(Math.random() * colors.length);
    modifiableText.style.color = colors[randomIndex];
}

// Function to toggle visibility
function toggleVisibility() {
    const modifiableText = document.getElementById('modifiableText');
    
    // Toggle visibility using DOM style manipulation
    if (modifiableText.style.display === 'none') {
        modifiableText.style.display = 'block';
    } else {
        modifiableText.style.display = 'none';
    }
}

// Task 2: Dynamic Element Creator

// Function to create a new colored box
function createBox() {
    const boxContainer = document.getElementById('boxContainer');
    const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#6B48FF', '#FF8E53', '#47B8FF'];
    
    // Create a new div element
    const newBox = document.createElement('div');
    newBox.className = 'color-box';
    
    // Randomly select a color
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    newBox.style.backgroundColor = randomColor;
    
    // Add the new box to the container
    boxContainer.appendChild(newBox);
}

// Function to remove the last box
function removeLastBox() {
    const boxContainer = document.getElementById('boxContainer');
    
    // Remove the last child if exists
    if (boxContainer.lastChild) {
        boxContainer.removeChild(boxContainer.lastChild);
    }
}

// Function to clear all boxes
function clearAllBoxes() {
    const boxContainer = document.getElementById('boxContainer');
    // Remove all children using DOM manipulation
    boxContainer.innerHTML = '';
}

// Task 3: Interactive List

// Function to add a new list item
function addListItem() {
    const listItemInput = document.getElementById('listItem');
    const itemText = listItemInput.value.trim();
    
    // Input validation
    if (!itemText) {
        alert("Please enter an item.");
        return;
    }
    
    const itemList = document.getElementById('itemList');
    
    // Create new list item element
    const newItem = document.createElement('li');
    newItem.innerHTML = `
        <span>${itemText}</span>
        <button onclick="this.parentElement.remove()">Remove</button>
    `;
    
    // Add the new item to the list
    itemList.appendChild(newItem);
    
    // Clear the input
    listItemInput.value = '';
}