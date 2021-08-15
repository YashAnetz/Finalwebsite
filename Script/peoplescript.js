let input = document.querySelector(".input");
let submit = document.querySelector(".generate");
let reset = document.querySelector(".reset");
let output = document.querySelector(".output");
let image = document.querySelector(".img");

submit.addEventListener("click", function () {
  let number = input.value;
  let a = number;

  //1 to 9

  if (a <= 9) {
    number = a;
    output.textContent = `This is how ${number} person looks like `;
  } else if (number >= 10 && number <= 100) {
    number = Math.ceil(number / 10) * 10;
  } else if (number > 100 && number <= 500) {
    numberx(100, 200);
    numberx(200, 300);
    numberx(300, 400);
    numberx(400, 500);
  } else if (number > 500 && number <= 1000000000) {
    numberz(500, 1000);
    numberz(1000, 5000);
    numberz(5000, 10000);
    numberz(10000, 15000);
    numberz(15000, 20000);
    numberz(20000, 50000);
    numberz(50000, 100000);
    numberz(100000, 1000000);
    numberz(1000000, 5000000);
    numberz(5000000, 10000000);
    numberz(10000000, 50000000);
    numberz(50000000, 100000000);
    numberz(100000000, 1000000000);
  } else if (number > 1000000000) {
    number = 7000000000;
  } else if (input.value.includes("million")) {
    number = 1000000;
  } else if (input.value.includes("billion")) {
    number = 100000000;
    console.log("bill");
  }

  //100 to 500

  function numberx(number1, number2) {
    if (number > number1 && number < number2) {
      number = Math.ceil(number2 / 10) * 10;
      console.log(number);
    }
  }

  function numberz(numbera, numberb) {
    if (input.value > numbera && input.value < numberb) {
      number = numberb;
    }
  }

  if (input.value == "" || input.value == "0") {
    image.src = "/Images/no.jpg";
    output.textContent = `This is how 0 people will look`;
  } else {
    image.src = `/Images/${number}.jpg`;
    output.textContent = `This is how ${input.value} people will look like  `;
  }
});

reset.addEventListener("click", function () {
  image.src = "/Images/people.png";
  output.textContent = "Try 1 million , 5 million ,100 million , 1 billion";
  input.value = "";
});

//https://netzyash.w3spaces.com/Index.html?bypass-cache=1627894972
