let a = parseInt(prompt('Enter the first number: '));
let b = parseInt(prompt('Enter the second number: '));

function checkPrime(k) {
    let isPrime = true;
    if (k < 2) {
        isPrime = false;
    } else if (k > 3) {
        let threshold = Math.floor(Math.sqrt(k)) + 1;
        for (let i = 2; i < threshold; i++) {
            if (k % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}

document.writeln("Here is the list of primes between " + a + " and " + b + ": ");
for (let num = a; num < b + 1; num++) {
    if (checkPrime(num)) {
        document.writeln(num);
    }
}