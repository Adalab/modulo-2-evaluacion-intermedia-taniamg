"use strict";
const randonNumber = getRandomNumber(100);
const numberEl = document.querySelector(".js_number");
const buttonEl = document.querySelector(".js_btn");
const clueEl = document.querySelector(".js_clue");
const counterEl = document.querySelector(".js_counter");
/*generar número random*/
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
console.log(`Mi número aleatorio es: ${randonNumber}`);

/*pista*/
function tip(advise) {
  clueEl.value = "Pista : " + advise;
}

/*Adivina*/
function checkNumber() {
  const numberValue = parseInt(numberEl.value);

  if (numberValue === randonNumber) {
    tip("Has ganado campeona!!");
  } else if (numberValue < 1 || numberValue > 100) {
    tip(" El número debe estar entre 1 y 100");
  } else if (numberValue < randonNumber) {
    tip(" Demasiado bajo");
  } else if (numberValue > randonNumber) {
    tip("Demasiado alto");
  } else {
    tip("Inserta un caracter válido");
  }
}

/*contador*/
let triesCounterValue = 0;
function counterCheck() {
  triesCounterValue += 1;

  counterEl.value = "Número de intentos:" + triesCounterValue;
}

function handleClickgame() {
  checkNumber();
  counterCheck();
}

/* evento*/
buttonEl.addEventListener("click", handleClickgame);
