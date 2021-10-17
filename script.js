let subStr; //Temporary substring variable
let rand; //Random number variable

let str = window.prompt("Enter a string: "); //Prompts user for a string

str = str.toLowerCase(); //Converts string to lowercase

for (let i = 0; i < str.length; i++) { //Spongification
    rand = getRandomInt(2);

    if(rand == 1) {
        subStr = str.substr(i, 1);
        str = str.replace(subStr, subStr.toUpperCase());
    }
}

alert("Here is the spongified text: " + str); //Prints the output on a browser alert

function getRandomInt(max) { //Random integer function
    return Math.floor(Math.random() * max);
}