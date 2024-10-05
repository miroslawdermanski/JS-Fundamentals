function solve(input) {
    const pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
    const phoneNumbers = input[0];
    
    const validPhones = [];
    let match;

    while ((match = pattern.exec(phoneNumbers)) !== null) {
        validPhones.push(match[0]);
    }

    console.log(validPhones.join(', '));
}

// Test the function with the provided examples
const input1 = ['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'];
solve(input1);
// Expected output: +359 2 222 2222, +359-2-222-2222

const input2 = ['+359 2 357 3351 +359 2 22 2222 +359 2 173 3408 +359-2-789-2584 +359 2 193 3953 +359-2-961-0248 +359-2-789-2584 +359 2 222 222 +360 2 222 2222 +359 2 727 9740 +359-2-854-2280 +359 2 193 3953 +359 2 357 3351 +359 2 558 8560 +359 2 222 222'];
solve(input2);
// Expected output: +359 2 357 3351, +359 2 173 3408, +359-2-789-2584, +359 2 193 3953, +359-2-961-0248, +359-2-789-2584, +359 2 727 9740, +359-2-854-2280, +359 2 193 3953, +359 2 357 3351, +359 2 558 8560
