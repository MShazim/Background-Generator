var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById('random');
var copy = document.getElementById('copy');

//On Load
body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
css.textContent = body.style.background + ";";

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}
function rgbToHex(r, g, b) {
    return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}

function RandomGenerator(){
    
    // Math.floor(Math.random() * 256) => This will generate a random number between 0 - 255 

    color1.value = rgbToHex(Math.floor(Math.random() * 256),Math.floor(Math.random() * 256), Math.floor(Math.random() * 256));
    color2.value = rgbToHex(Math.floor(Math.random() * 256),Math.floor(Math.random() * 256),Math.floor(Math.random() * 256));
    setGradient();
}

function copyColor(){
    navigator.clipboard.writeText(css.textContent);
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

copy.addEventListener("click", copyColor);

random.addEventListener("click", RandomGenerator);

