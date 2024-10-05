function buildOrbits(input) {
    const [width, height, starX, starY] = input;

    // Initialize the matrix with zeros
    let matrix = Array.from({ length: height }, () => Array(width).fill(0));

    // Function to fill the matrix with orbits
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            matrix[row][col] = Math.max(Math.abs(row - starY), Math.abs(col - starX)) + 1;
        }
    }

    // Print the matrix
    matrix.forEach(row => console.log(row.join(' ')));
}

// Example usage
buildOrbits([4, 4, 0, 0]);
buildOrbits([5, 5, 2, 2]);
buildOrbits([3, 3, 2, 2]);
buildOrbits([7, 6, 3, 2]);
buildOrbits([4, 3, 1, 1]);
