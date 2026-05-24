import { readFile } from "fs/promises";

try {
    // Read file contents
    const data = await readFile("scores.txt", "utf8");

    // Split lines and convert to numbers
    const scores = data.trim().split("\n").map(Number);

    // Calculate total
    let total = 0;

    for (let score of scores) {
        total += score;
    }

    // Calculate average
    const average = total / scores.length;

    // Display output
    console.log("Scores:", scores.join(", "));
    console.log("Average Score:", average.toFixed(2));

} catch (error) {
    console.error("Error reading file:", error.message);
}