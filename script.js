var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");
var newCSS = document.getElementById("newCSS");

function bgGradient() {
    body.style.background = "linear-gradient(to right ," + color1.value + ',' + color2.value + ")";

    css.textContent = body.style.background + ";";
    newCSS.textContent = "";
}

function generateRandomColor1() {
    var maxVal1 = 0xFFFFFF;
    var randomNumber1 = Math.random() * maxVal1;
    randomNumber1 = Math.floor(randomNumber1);
    // console.log(randomNumber1);
    var randColor1 = randomNumber1.toString(16);
    return `#${randColor1.toUpperCase()}`
}
// console.log(generateRandomColor1() );

function generateRandomColor2() {
    var maxVal2 = 0xFFFFFF;
    var randomNumber2 = Math.random() * maxVal2;
    randomNumber2 = Math.floor(randomNumber2);
    // console.log(randomNumber2);
    var randColor2 = randomNumber2.toString(16);
    return `#${randColor2.toUpperCase()}`
}

function randomGradient() {
    var col1 = generateRandomColor1();
    var col2 = generateRandomColor2();
    body.style.background = "linear-gradient(to right ," + col1 + ',' + col2 + ")";
    // console.log(body.style.background)
    newCSS.textContent = body.style.background + ";";
    css.textContent = "";
}

color1.addEventListener("input", bgGradient());
color2.addEventListener("input", bgGradient());

color1.addEventListener("input", bgGradient);
color2.addEventListener("input", bgGradient);

button.addEventListener("click", function () {
    randomGradient();
    color1.addEventListener("input", bgGradient);
    color2.addEventListener("input", bgGradient);
});