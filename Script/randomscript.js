"use strict";

function random() {
  let randomcolor = Math.floor(Math.random() * 256);
  return randomcolor;
}

//for rgb
let generatecolor = document.querySelector(".rgb-btn");
let colorname = document.querySelector(".rgb-name");
let colorchange = document.querySelector(".rgb");

//

generatecolor.addEventListener("click", function () {
  let finalcolor = `rgb(${random()},${random()},${random()})`;
  colorchange.style.backgroundColor = finalcolor;
  colorname.textContent = finalcolor;
});

//for hex
function hex() {
  let hexnum = Math.random().toString(16).substr(-6);
  console.log(hexnum);
  return hexnum;
}

let generatecolorhex = document.querySelector(".hex-btn");
let colornamehex = document.querySelector(".hex-name");
let colorchangehex = document.querySelector(".hex");

generatecolorhex.addEventListener("click", function () {
  console.log(hex());
  let finalcolor = `#${hex()}`;
  colorchangehex.style.backgroundColor = finalcolor;
  colornamehex.textContent = finalcolor;
});

//grad

let generatecolorgrad = document.querySelector(".grad-btn");
let colornamegrad = document.querySelector(".grad-name");
let colorchangegrad = document.querySelector(".grad");
let c1 = document.querySelector(".c1");
let c2 = document.querySelector(".c2");

generatecolorgrad.addEventListener("click", function () {
  let randomcolor1 = `${random()} ,${random()} ,${random()}`;
  let randomcolor2 = `${random()} ,${random()} ,${random()}`;
  console.log(randomcolor1, randomcolor2);
  colorchangegrad.style = `background-image:linear-gradient(to bottom right,rgb(${randomcolor1}) , rgb(${randomcolor2}))`;
  colornamegrad.textContent = `rgb(${randomcolor1}) , rgb(${randomcolor2})`;
  c1.style.backgroundColor = `rgb(${randomcolor1})`;
  c2.style.backgroundColor = `rgb(${randomcolor2})`;
});

//hover

let generatecolorhover = document.querySelector(".hov-btn");
let colornamehov = document.querySelector(".hov-name");
let colorchangehov = document.querySelector(".hover");
let back = document.querySelector(".hov");
let c3 = document.querySelector(".c3");
let c4 = document.querySelector(".c4");
let c5 = document.querySelector(".c5");

generatecolorhover.addEventListener("click", function () {
  let hov1 = hex();
  let hov2 = hex();
  let hov3 = hex();

  let hov = `background-image: linear-gradient(
  to right,
  #${hov1} 0%,
  #${hov2} 51%,
  #${hov3} 100%
);`;

  colornamehov.textContent = `background-image: linear-gradient(
  to right,
  #${hov1} 0%,
  #${hov2} 51%,
  #${hov3} 100%
);`;

  c3.style = ` background-color: #${hov1}`;
  c4.style = ` background-color: #${hov2}`;
  c5.style = ` background-color: #${hov3}`;

  colorchangehov.style = hov;
});
