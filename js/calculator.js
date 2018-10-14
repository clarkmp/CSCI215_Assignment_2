
var isFinished = false;
var userNumbers = [];

while (isFinished !== true){
    var input = prompt("Enter a positive value. When you are finished, enter -1", "");
    if (input == -1){
        isFinished = true;
    }
    else{
        userNumbers.push(input)
    }
}
console.log(userNumbers);

var max;
max = userNumbers[0];
for (var x=1; x < userNumbers.length; x++){
    if (userNumbers[x] > max){
        max = userNumbers[x];
    }
}
console.log("max is " + max);

var min;
min = userNumbers[0];
for (var v=1; v < userNumbers.length; v++){
    if (userNumbers[v] < min){
        min = userNumbers[v];
    }
}
console.log("min is " + min);

var total = 0;
for (var z=0; z < userNumbers.length; z++){
    total = total + parseInt(userNumbers[z]);
}
var mean = total / userNumbers.length;
console.log("mean is " + mean);

userNumbers.sort();
var medianPos1;
var medianPos2;
var median;
if (userNumbers.length % 2 === 0){
    medianPos1 = (userNumbers.length / 2) - 1;
    medianPos2 = medianPos1 + 1;
    median =  ( parseInt(userNumbers[medianPos1]) + parseInt(userNumbers[medianPos2]) ) / 2;
}
else{
    medianPos1 = Math.ceil(userNumbers.length/2);
    median = userNumbers[medianPos1-1];
}
console.log("median is: " + median);

var evens = 0;
var odds = 0;
for (var y=0; y < userNumbers.length; y++){
    if (userNumbers[y] % 2 === 0){
        evens++;
    }
    else{
        odds++;
    }
}
console.log("even numbers: " + evens + " odd numbers: " + odds);

function isPrime(userNum) {
    for(var m = 2; m < userNum; m++) {
        if(userNum % m === 0) {
            return false;
        }
    }
    return true;
}
var primeCount = 0;
for (var p = 0; p < userNumbers.length; p++){
    if ( isPrime(userNumbers[p]) ){
        primeCount++;
    }
}
console.log("number of prime nums: " + primeCount);

var power2 = 0;
for (var w = 0; w < userNumbers.length; w++){
    if (Math.log2(userNumbers[w]) % 1 === 0){
        power2++;
    }
}
console.log("number of power of 2 numbers: " + power2);


document.getElementById("userNums").innerHTML = "{" + userNumbers + "}";
document.getElementById("max").innerHTML = max;
document.getElementById("min").innerHTML = min;
document.getElementById("mean").innerHTML = mean;
document.getElementById("median").innerHTML = median;
document.getElementById("numEven").innerHTML = evens;
document.getElementById("numOdd").innerHTML = odds;
document.getElementById("prime").innerHTML = primeCount;
document.getElementById("powerOf2").innerHTML = power2;









