function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  var number = Math.floor(rand);

  return number;
}

function smileChoice(number) {
  var smile = document.querySelector(".title");
  smile.textContent = smiles[number]["117"];
}

function textChoice(number) {
  var foreignText = document.querySelector(".title-md");
  foreignText.textContent = words[number]["97"];

  var rusText = document.querySelector(".text");
  rusText.textContent = `любить по-${words[number]["97__1"]}`;
}

function onLoad() {
  var numberArray = randomInteger(0, 96);
  textChoice(numberArray);
  smileChoice(numberArray);
}

document.addEventListener("DOMContentLoaded", onLoad());

let timerId = setInterval(() => {
  var numberArrayInterval = randomInteger(0, 96);
  smileChoice(numberArrayInterval);
  textChoice(numberArrayInterval);
}, 4000);

let fadeInOut = setInterval(() => {
  var foreignText = document.querySelector(".title-md");
  var rusText = document.querySelector(".text");
  var smile = document.querySelector(".title");

  foreignText.classList.toggle("animation-on");
  foreignText.classList.toggle("animation-off");
  rusText.classList.toggle("animation-on");
  rusText.classList.toggle("animation-off");
  smile.classList.toggle("animation-on");
  smile.classList.toggle("animation-off");
}, 2000);

// setTimeout(flyBurger, 5000);

// function flyBurger(){
//     var burger = document.querySelector('.burger');
//     burger.classList.add('burger_active');
// }
