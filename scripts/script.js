var smileArray = [
    '-_-',
    '^-^',
    'o_O',
]

var textArray = [
    {
        foreign: 'love',
        rus: 'любить по английски',
    },
    {
        foreign: 'dashuri',
        rus: 'любить по албански',
    },
    {
        foreign: 'любить',
        rus: 'любить по русски',
    }
]


function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    var number = Math.floor(rand);

    return number;
}

var numberArray = randomInteger(0, 2);

function smileChoice (number){
    var smile = document.querySelector('.title');
    smile.textContent = smileArray[number];
}

function textChoice(number){
    var foreignText = document.querySelector('.title-md');
    foreignText.textContent = textArray[number].foreign;

    var rusText = document.querySelector('.text');
    rusText.textContent = textArray[number].rus;
}

function onLoad(number){
    textChoice(number);
    smileChoice(number);
}

document.addEventListener("DOMContentLoaded", onLoad(numberArray));

let timerId = setInterval(() => {
    var numberArrayInterval = randomInteger(0, 2);
    smileChoice(numberArrayInterval);
    textChoice(numberArrayInterval);
}, 1000);


setTimeout(flyBurger, 5000); 

function flyBurger(){
    var burger = document.querySelector('.burger');
    burger.classList.add('burger_active');
}