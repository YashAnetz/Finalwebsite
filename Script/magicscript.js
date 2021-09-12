"use strict";

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let page1 = document.querySelector(".page1");
let nextButton = document.querySelector(".nextbutton");
let page2 = document.querySelector(".page2");
let page2yes = document.querySelector(".Page2yes");
let page2no = document.querySelector(".Page2no");
let page3 = document.querySelector(".page3");
let page3yes = document.querySelector(".Page3yes");
let page3no = document.querySelector(".Page3no");
let page4 = document.querySelector(".page4");
let page4yes = document.querySelector(".Page4yes");
let page4no = document.querySelector(".Page4no");
let page5 = document.querySelector(".page5");
let page5yes = document.querySelector(".Page5yes");
let page5no = document.querySelector(".Page5no");
let page6 = document.querySelector(".page6");
let page6yes = document.querySelector(".Page6yes");
let page6no = document.querySelector(".Page6no");
let page7 = document.querySelector(".page7");
let page7yes = document.querySelector(".Page7yes");
let page7no = document.querySelector(".Page7no");
let page8 = document.querySelector(".page8");
let page8yes = document.querySelector(".Page8yes");
let page8no = document.querySelector(".Page8no");
let page9 = document.querySelector(".page9");
let page9yes = document.querySelector(".Page9yes");
let page9no = document.querySelector(".Page9no");
let page10 = document.querySelector(".page10");
let page10yes = document.querySelector(".Page10yes");
let page10no = document.querySelector(".Page10no");
let page11 = document.querySelector(".page11");
let page11yes = document.querySelector(".Page11yes");
let page11no = document.querySelector(".Page11no");
let page12 = document.querySelector(".page12");
let page12yes = document.querySelector(".Page12yes");
let page12no = document.querySelector(".Page12no");
let result = document.querySelector(".result");
let resulttext = document.querySelector(".resulttext");
let image = document.querySelector(".res");
let again = document.querySelector(".again");

nextButton.addEventListener("click", function () {
  page1.classList.add("hide");
  page2.classList.remove("hide");
});

page2yes.addEventListener("click", function () {
  page2.classList.add("hide");
  page3.classList.remove("hide");
  numbers.splice(4, 8);

  console.log(numbers);
});

page2no.addEventListener("click", function () {
  page2.classList.add("hide");
  page6.classList.remove("hide");
  numbers.splice(0, 4);
  console.log(numbers);
});

page3yes.addEventListener("click", function () {
  page3.classList.add("hide");
  page4.classList.remove("hide");
  numbers.splice(2, 2);
  console.log(numbers);
});

page3no.addEventListener("click", function () {
  page3.classList.add("hide");
  page5.classList.remove("hide");
  numbers.splice(0, 2);
  console.log(numbers);
});

page4yes.addEventListener("click", function () {
  page4.classList.add("hide");
  result.classList.remove("hide");
  resulttext.classList.remove("hide");
  numbers.splice(1, 1);
  let a = numbers[0];
  console.log(a);

  console.log(numbers);
  image.src = `/Images/magicimages/${a}.jpg`;
});

page4no.addEventListener("click", function () {
  page4.classList.add("hide");
  result.classList.remove("hide");
  resulttext.classList.remove("hide");
  numbers.splice(0, 1);
  let a = numbers[0];
  console.log(a);

  console.log(numbers);
  image.src = `/Images/magicimages/${a}.jpg`;
});

page5yes.addEventListener("click", function () {
  page3.classList.add("hide");
  result.classList.remove("hide");
  resulttext.classList.remove("hide");
  numbers.splice(1, 1);
  let a = numbers[0];
  console.log(a);

  console.log(numbers);
  image.src = `/Images/magicimages/${a}.jpg`;
  console.log(numbers);
});

page5no.addEventListener("click", function () {
  page3.classList.add("hide");
  result.classList.remove("hide");
  resulttext.classList.remove("hide");
  numbers.splice(0, 1);
  let a = numbers[0];
  console.log(a);
  image.src = `/Images/magicimages/${a}.jpg`;
  console.log(numbers);
});

page6yes.addEventListener("click", function () {
  page6.classList.add("hide");
  page7.classList.remove("hide");
  numbers.splice(4, 4);

  console.log(numbers);
});

page6no.addEventListener("click", function () {
  page6.classList.add("hide");
  page10.classList.remove("hide");
  numbers.splice(0, 4);

  console.log(numbers);
});

page7yes.addEventListener("click", function () {
  page7.classList.add("hide");
  page8.classList.remove("hide");

  console.log(numbers);
});

page7no.addEventListener("click", function () {
  page7.classList.add("hide");
  page9.classList.remove("hide");
  numbers.splice(0, 2);

  console.log(numbers);
});

page8yes.addEventListener("click", function () {
  page8.classList.add("hide");
  result.classList.remove("hide");
  resulttext.classList.remove("hide");
  numbers.splice(0, 1);
  let a = numbers[0];
  console.log(a);
  image.src = `/Images/magicimages/${a}.jpg`;
  console.log(numbers);
});

page8no.addEventListener("click", function () {
  page8.classList.add("hide");
  result.classList.remove("hide");
  resulttext.classList.remove("hide");
  numbers.splice(1, 1);
  let a = numbers[0];
  console.log(a);
  image.src = `/Images/magicimages/${a}.jpg`;
  console.log(numbers);
});

page9yes.addEventListener("click", function () {
  console.log("hi");
  page9.classList.add("hide");
  result.classList.remove("hide");
  resulttext.classList.remove("hide");
  numbers.splice(1, 1);
  let a = numbers[0];
  console.log(a);
  image.src = `/Images/magicimages/${a}.jpg`;
  console.log(numbers);
});

page9no.addEventListener("click", function () {
  page9.classList.add("hide");
  result.classList.remove("hide");
  resulttext.classList.remove("hide");
  numbers.splice(0, 1);
  let a = numbers[0];
  console.log(a);
  image.src = `/Images/magicimages/${a}.jpg`;
  console.log(numbers);
});

page10yes.addEventListener("click", function () {
  page10.classList.add("hide");
  page11.classList.remove("hide");
  numbers.splice(2, 2);

  console.log(numbers);
});

page10no.addEventListener("click", function () {
  page10.classList.add("hide");
  page12.classList.remove("hide");
  numbers.splice(0, 2);

  console.log(numbers);
});

page11yes.addEventListener("click", function () {
  page11.classList.add("hide");
  result.classList.remove("hide");
  resulttext.classList.remove("hide");
  numbers.splice(1, 1);
  let a = numbers[0];
  console.log(a);
  image.src = `/Images/magicimages/${a}.jpg`;
  console.log(numbers);
});

page11no.addEventListener("click", function () {
  page11.classList.add("hide");
  result.classList.remove("hide");
  resulttext.classList.remove("hide");
  numbers.splice(0, 1);
  let a = numbers[0];
  console.log(a);
  image.src = `/Images/magicimages/${a}.jpg`;
  console.log(numbers);
});

page12yes.addEventListener("click", function () {
  page12.classList.add("hide");
  result.classList.remove("hide");
  resulttext.classList.remove("hide");
  numbers.splice(1, 1);
  let a = numbers[0];
  console.log(a);
  image.src = `/Images/magicimages/${a}.jpg`;
  console.log(numbers);
});

page12no.addEventListener("click", function () {
  page12.classList.add("hide");
  result.classList.remove("hide");
  resulttext.classList.remove("hide");
  numbers.splice(0, 1);
  let a = numbers[0];
  console.log(a);
  image.src = `/Images/magicimages/${a}.jpg`;
  console.log(numbers);
});

again.addEventListener("click", function () {
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  page1.classList.remove("hide");
  result.classList.add("hide");
  resulttext.classList.add("hide");
  page2.classList.add("hide");
  page3.classList.add("hide");
  page4.classList.add("hide");
  page5.classList.add("hide");
  page6.classList.add("hide");
  page7.classList.add("hide");
  page8.classList.add("hide");
  page9.classList.add("hide");
  page10.classList.add("hide");
  page11.classList.add("hide");
  page12.classList.add("hide");
});
