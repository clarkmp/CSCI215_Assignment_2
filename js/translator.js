
function translateText(){
    var userInput = document.getElementById("input").value;
    var output = "";

    var inputWithSpaces = userInput.split("   ").join(" & ");
    var inputAsWords = userInput.split(" ");
    console.log(userInput);
    console.log(userInput.length);
    console.log(userInput[0]);

    for (var x = 0; x < inputAsWords.length; x++) {
        var word = inputAsWords[x];

        if (word === ".-") {
            output = output + "A";
        }
        else if (word === "-...") {
            output = output + "B";
        }
        else if (word === "-.-.") {
            output = output + "C";
        }
        else if (word === "-..") {
            output = output + "D";
        }
        else if (word === ".") {
            output = output + "E";
        }
        else if (word === "..-.") {
            output = output + "F";
        }
        else if (word === "--.") {
            output = output + "G";
        }
        else if (word === "....") {
            output = output + "H";
        }
        else if (word === "..") {
            output = output + "I";
        }
        else if (word === ".---") {
            output = output + "J";
        }
        else if (word === "-.-") {
            output = output + "K";
        }
        else if (word === ".-..") {
            output = output + "L";
        }
        else if (word === "--") {
            output = output + "M";
        }
        else if (word === "-.") {
            output = output + "N";
        }
        else if (word === "---") {
            output = output + "O";
        }
        else if (word === ".--.") {
            output = output + "P";
        }
        else if (word === "--.-") {
            output = output + "Q";
        }
        else if (word === ".-.") {
            output = output + "R";
        }
        else if (word === "...") {
            output = output + "S";
        }
        else if (word === "-") {
            output = output + "T";
        }
        else if (word === "..-") {
            output = output + "U";
        }
        else if (word === "...-") {
            output = output + "V";
        }
        else if (word === ".--") {
            output = output + "W";
        }
        else if (word === "-..-") {
            output = output + "X";
        }
        else if (word === "-.--") {
            output = output + "Y";
        }
        else if (word === "--..") {
            output = output + "Z";
        }
        else {
            output = output + " ";
        }
    }
    document.getElementById("output").innerHTML = output;
}
