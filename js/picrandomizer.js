

var pictures = ["https://pixel.nymag.com/imgs/daily/vulture/2018/08/30/magazine/jonah-hill/7.w385.h578.2x.jpg",
                "https://static.fashionbeans.com/wp-content/uploads/2018/08/jonah-hill-15.jpg",
                "http://media.gq.com/photos/5859cee24afebb381143ac43/master/w_800/shopping-jonah-hill.jpg",
                "https://www.usmagazine.com/wp-content/uploads/2017/11/jonah-hill-august-25.jpg",
                "https://www.usmagazine.com/wp-content/uploads/jonah-hill-2-97689981-7db2-47cb-a6aa-9961b7c2b691.jpg"]
console.log("put imgs in array");

var randomNum = Math.floor(Math.random() * pictures.length);
console.log("made random number:" + randomNum);

document.body.style.backgroundImage = "url(" + pictures[randomNum] + ")";
console.log("changed image");




