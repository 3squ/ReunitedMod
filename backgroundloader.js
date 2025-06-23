// Picks a random background
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
  }
  
  document.write('<img id="loadbackground" src="LoadBackground/' + getRandomInt(1, 4) + '.png">');

// Background Image Use
let scale = 320 / (1920 / 4);
let landscapeMode = (640 * (window.innerWidth / window.innerHeight)) >= 360;

let resolution = window.innerHeight / 640;
let width = (640 * (window.innerWidth / window.innerHeight));
let height = 640;
if (landscapeMode == false) {
    width = 360;
    height = (360 * (window.innerHeight / window.innerWidth));
    resolution = window.innerWidth / 360;
};
scale *= resolution;

if (scale * 2048 < window.innerWidth) {
  scale = window.innerWidth / 2048;
};
if (scale * 2048 < window.innerHeight) {
  scale = window.innerHeight / 2048;
};

let loadbackground = document.getElementById("loadbackground");
loadbackground.style.transform = `translate(-50%, -50%) scale(${scale}, ${scale})`;