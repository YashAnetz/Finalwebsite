"use strict";

let billamt = document.querySelector(".bill");
let tipvalue = document.querySelector(".tipper");
let tipdisplay = document.querySelector(".tipamt");
let tipvaluedisplay = document.querySelector(".tipvalue");
let totalvaluedisplay = document.querySelector(".totalvalue");
let people = document.querySelector(".people");
let peopledisp = document.querySelector(".peoplename");
let dividevalue = document.querySelector(".dividevalue");
let emoji = document.querySelector(".emoji");
let person = document.querySelector(".person");

function calculatetip() {
  tipdisplay.textContent = `${tipvalue.value}%`;
  let tipval = (billamt.value * tipvalue.value) / 100;
  tipvaluedisplay.textContent = `₹${tipval}`;
  let totval = Number(billamt.value) + Number(tipval);
  totalvaluedisplay.textContent = `₹${totval.toFixed(2)}`;
  peopledisp.textContent = `${people.value} People`;
  let finaltotal = totval / people.value;
  dividevalue.textContent = `₹${finaltotal.toFixed(2)}`;
  console.log(finaltotal);

  if (tipvalue.value > 25) {
    emoji.textContent = "😄";
  }
  if (tipvalue.value > 50) {
    emoji.textContent = "😊";
  }
  if (tipvalue.value > 75) {
    emoji.textContent = "💖";
  }
  if (tipvalue.value == 100) {
    emoji.textContent = "🤑";
  }
  let persona = "🕺";
  let emojiv = people.value / 2;
  person.textContent = persona.repeat(emojiv);
}

document.addEventListener("change", calculatetip);
document.addEventListener("mousemove", calculatetip);
