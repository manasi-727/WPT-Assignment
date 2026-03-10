function printStarPattern(rows)
 {
    // Validate input
    if (typeof rows !== "number" || rows <= 0 || !Number.isInteger(rows)) {
        console.error("Error: Please provide a positive integer for rows.");
        return;
    }

    for (let i = 2; i <= rows; i--) 
        {
        // Spaces before stars
        let spaces = " ".repeat(rows - i);
        // Stars for current row
        let stars = "*".repeat(1 * i + 1);
        console.log(spaces + stars);
    }
}

// Example usage:
printStarPattern(3);
