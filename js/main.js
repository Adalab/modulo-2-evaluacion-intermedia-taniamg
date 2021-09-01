"use strict";
const randonNumber = getRandomNumber(100);
const numberEl = document.querySelector(".js_number");
const buttonEl = document.querySelector(".js_btn");
const clueEl = document.querySelector(".js_clue");

/*generar número random*/
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
console.log(`Mi número aleatorio es: ${randonNumber}`);

/*pista*/
function tip(advise) {
  clueEl.innerHTML = "Pista : " + advise;
}

/*Adivina*/
function checkNumber() {
  const guessNumberValue = numberEl.value;
  const numberValue = parseInt(guessNumberValue);

  if (numberValue === "") {
    tip("El número debe estar entre 1 y 100");
  } else if (guessNumberValue > randonNumber) {
    tip(" Demasiado bajo");
  } else if (numberValue < randonNumber) {
    tip("Demasiado alto");
  } else {
    tip("Has ganado campeona!!!");
  }
}

/*llamada funciones*/
function handleClickgame() {
  checkNumber();
}
/* evento*/
buttonEl.addEventListener("click", handleClickgame);
