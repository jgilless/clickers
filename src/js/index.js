import { priceCalc } from './utils/numbers';

//Main Value
const mainClicksDiv = document.getElementById('main-clicks');
const mainClicker = document.getElementById('main-clicker');
const mainValueDiv = document.getElementById('main-value');

//AutoClicker
const autoClickerValueDiv = document.querySelector('div[data-group="autoclickers"]');
const autoClickerCountSpan = document.querySelector('span[data-group="autoclickers"]');

const autoClickerBtn = document.querySelector('button[data-group="autoclickers"]');
//Click Power
const clickPowerPriceDiv = document.querySelector('div[data-group="click-power"]');
const clickPowerValueSpan = document.querySelector('span[data-group="click-power"]');
const clickPowerBtn = document.querySelector('button[data-group="click-power"]');

let mainClicks = 0;
let mainValue = 0;
let ticks = 0;
// autoclickers
let autoClickerPrice = 5;
let autoClickerCount = 0;
//click power
let clickPowerPrice = 100;
let clickPowerValue = 1;

function updateValueDiv() {
    mainValueDiv.innerHTML = mainValue;
    mainClicksDiv.innerHTML = mainClicks;
}

function mainCallback() {
    mainValue += clickPowerValue;
    mainClicks += clickPowerValue;
}

function buyAutoClicker() {
    if (autoClickerPrice > mainValue) {
        return;
    }
    autoClickerCount++;
    mainValue -= autoClickerPrice;
    autoClickerPrice = priceCalc(autoClickerPrice);
    autoClickerValueDiv.innerHTML = autoClickerPrice;
    autoClickerCountSpan.innerHTML = autoClickerCount;
}

function clickAutoClickers() {
    if (ticks % 10 !== 0) {
        return;
    }
    const newClicks = autoClickerCount * clickPowerValue;
    mainValue = mainValue + newClicks;
    mainClicks += newClicks;
}

function buyClickPower() {
    if (clickPowerPrice > mainValue) {
        return;
    }
    clickPowerValue++;
    mainValue -= clickPowerPrice;
    clickPowerPrice = priceCalc(clickPowerPrice);
    clickPowerPriceDiv.innerHTML = clickPowerPrice;
    clickPowerValueSpan.innerHTML = clickPowerValue;
}

function addClickListeners() {
    mainClicker.addEventListener('click', mainCallback);
    autoClickerBtn.addEventListener('click', buyAutoClicker);
    clickPowerBtn.addEventListener('click', buyClickPower);
}

const milestones = {
    100: {
        message: 'You have clicked 100 times',
        done: false
    },
    1000: {
        message: 'You have clicked 1000 times',
        done: false
    }
};

function checkMilestones() {
    const milestone = Object.keys(milestones).find(key => {
        return !milestones[key].done && key <= mainClicks;
    });
    if (!milestone) {
        return;
    }
    milestones[milestone].done = true;
    alert(milestones[milestone].message);
}

addClickListeners();

// Main Game Loop
setInterval(function() {
    ticks++;
    updateValueDiv();
    clickAutoClickers();
    checkMilestones();
}, 100);
