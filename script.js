function sponge() {
    const resHeading = document.getElementById("result");
    let str = document.getElementById("string").value;

    str = str.toLowerCase(); //Converts string to lowercase

    for (let i = 0; i < str.length; i++) { //Spongification
        rand = getRandomInt(2);

        if(rand == 1) {
            subStr = str.substr(i, 1);
            str = str.replace(subStr, subStr.toUpperCase());
        }
    }

    resHeading.innerHTML = "The spongified string is: " + str;
    resHeading.style.visibility = "visible";
}

function getRandomInt(max) { //Random integer function
    return Math.floor(Math.random() * max);
}