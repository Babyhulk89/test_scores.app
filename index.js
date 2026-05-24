"use strict";

// Get command-line arguments after "node index.js"
const scores = process.argv.slice(2);

// Convert scores to numbers
let total = 0;

for (let score of scores) {
    total += Number(score);
}

// Calculate average
const average = total / scores.length;

// Display results
console.log("Test Scores:", scores.join(", "));
console.log("Average Score:", average.toFixed(2));