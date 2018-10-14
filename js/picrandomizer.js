

var pictures = [ "imgs/birdman.jpg", "imgs/fitGod.jpg", "imgs/ForrestGump.jpg", "imgs/jonahHill.jpg", "imgs/savethebees.jpg"]
console.log("put imgs in array");

var randomNum = Math.floor(Math.random() * pictures.length);
console.log("made random number:" + randomNum);

var divNode = document.getElementById("randPic");
var imgNode;
imgNode = document.createElement("img");
var srcAttr;
srcAttr = document.createAttribute("src");
srcAttr.value = pictures[randomNum];
imgNode.setAttributeNode(srcAttr);
divNode.appendChild(imgNode);
console.log("changed image");




