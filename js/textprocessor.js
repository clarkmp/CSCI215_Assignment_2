
function processText() {

    var wordsAndSpaces = document.getElementById("input").value.toUpperCase();
    var output = "";
    console.log("Got input: " + wordsAndSpaces);

    var wordsWithoutPeriods = wordsAndSpaces.split(".").join("");
    var words = wordsWithoutPeriods.split(" ");
    console.log("split input into array");


    for (var x=0; x < words.length; x++){
        var word = words[x];
        var count = 0;

        for (var z=0; z < words.length; z++){
            if (word === words[z] && !output.includes(word)){
                count++;
            }
        }
        if (!output.includes(word)){
            output = output + word + " " + count + " ";
        }
    }
    console.log("looped through input and created output");

    console.log("output is:" + output);
    document.getElementById("output").innerHTML = output;




}