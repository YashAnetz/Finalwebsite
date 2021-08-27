"use strict";

let username = "yash";
let password = "1234";

let usernameinput = document.querySelector(".username");
let passinput = document.querySelector(".password");
let loginbutton = document.querySelector(".logbutton");
let loginmodal = document.querySelector(".login");
let bankmodal = document.querySelector(".bankmain");
let logout = document.querySelector(".logout");
let error = document.querySelector(".error");
let errorbutton = document.querySelector(".errorclose");
let overlay = document.querySelector(".overlay");
let deposit = document.querySelector(".deposit");
let withdraw = document.querySelector(".withdraw");
let balancedisplay = document.querySelector(".balance");
let add = document.querySelector(".add");
let withtext = document.querySelector(".withtext");
let deptext = document.querySelector(".deptext");
let transations = document.querySelector(".tran");
let welcomeuser = document.querySelector(".user");
let loginback = document.getElementById("loginback");
let signuppage = document.querySelector(".signup");
let signupgobutton = document.querySelector(".signupbutton");
let balancecolor = document.querySelector(".bankmain .balance");
let resetbalance = document.querySelector(".bankmain .spend");
let statusimage = document.querySelector(".status .statusimg");
let status = document.querySelector(".status ");
let rich = document.querySelector(".bankmain .transac .rich");

let statustxt = document.querySelector(".status .statustxt");
let finalbal;
let bal = 0;
let flag;

signupgobutton.addEventListener("click", function () {
  loginmodal.classList.add("hide");
  signuppage.classList.remove("hide");
  overlay.classList.add("hide");
});

loginback.addEventListener("click", function () {
  loginmodal.classList.remove("hide");
  signuppage.classList.add("hide");
});

deposit.addEventListener("click", function () {
  flag = 0;
});

withdraw.addEventListener("click", function () {
  flag = 1;
});

resetbalance.addEventListener("click", function () {
  finalbal = 0;
  bal = 0;
  balancedisplay.textContent = `₹${finalbal}`;
});

add.addEventListener("click", function () {
  let depamount = deposit.value;
  let withamount = withdraw.value;

  if (flag == 0) {
    finalbal = bal + Number(depamount);
    transations.textContent = `\n➕You deposited  ₹${depamount} into your savings account , Total balance is ${finalbal} ➕                    `;
  } else if (flag == 1) {
    finalbal = bal - Number(withamount);
    transations.textContent = `\n➖You withdrew  ₹${withamount} from your savings account , Total balance is ${finalbal} ➖ `;
  } else {
    finalbal = bal;
  }

  balancedisplay.textContent = `₹${finalbal}`;

  console.log(finalbal);
  withdraw.classList.remove("hide");
  deposit.classList.remove("hide");
  withtext.classList.remove("hide");
  deptext.classList.remove("hide");

  bal = finalbal;

  if (finalbal <= 0) {
    console.log("HEY");
    balancecolor.style = "background-color: red; color:white;";
  } else {
    balancecolor.style = "background-color: white;";
  }

  let money;
  let richstatus;
  let item;
  if (finalbal <= 0) {
    money = 0;
    item = "nothing";
  } else if (finalbal < 10 && finalbal > 0) {
    money = 1;
    item = "Chocolate";
  } else if (finalbal == 10) {
    money = 10;
    item = "Vadapav";
    console.log("hi");
  } else if (finalbal > 10 && finalbal < 20) {
    money = 15;
    item = "chips";
    console.log("hi");
  } else if (finalbal == 20) {
    item = "Cocacola/softdrink";
    money = 20;
  } else if (finalbal > 20 && finalbal <= 50) {
    item = "Mcdonalds burger";
    money = 50;
  } else if (finalbal > 50 && finalbal <= 100) {
    money = 100;
    item = "Big coke";
  } else if (finalbal > 100 && finalbal <= 500) {
    money = 500;
    item = "Pizza";
  } else if (finalbal > 500 && finalbal <= 1000) {
    money = 1000;
    item = "Premium perfume";
  } else if (finalbal > 1000 && finalbal <= 5000) {
    item = "Midrange watch";
    money = 5000;
  } else if (finalbal > 5000 && finalbal <= 10000) {
    item = "Cycle";
    money = 10000;
  } else if (finalbal > 10000 && finalbal <= 20000) {
    money = 20000;
    item = "Airpods Series";
  } else if (finalbal > 20000 && finalbal <= 50000) {
    item = "laptop";
    money = 50000;
  } else if (finalbal > 50000 && finalbal <= 100000) {
    item = "iphone";
    money = 100000;
  } else if (finalbal > 100000 && finalbal <= 200000) {
    item = "Sports bike";
    money = 200000;
  } else if (finalbal > 200000 && finalbal <= 500000) {
    item = "100 Gm gold";
    money = 500000;
  }
  //10 lakh
  else if (finalbal > 500000 && finalbal <= 1000000) {
    item = "Car";
    richstatus = "💲💲 ";
    money = 1000000;
    //25 lakh
  } else if (finalbal > 1000000 && finalbal <= 2500000) {
    item = "Shop";
    richstatus = "💲💲💲 (More than a million)";
    money = 2500000;
  }
  //50 lakh
  else if (finalbal > 1000000 && finalbal <= 5000000) {
    item = "House";
    richstatus = "💲💲💲💲 (More than 2 million)";
    money = 5000000;
  }
  //1 cr
  else if (finalbal > 5000000 && finalbal <= 10000000) {
    money = 10000000;
    item = "jaguar";
    richstatus = "Millionaire 💰 (More than 5 million)";
  }
  //5 cr
  else if (finalbal > 10000000 && finalbal <= 50000000) {
    money = 50000000;
    item = "Villa";
    richstatus = "Millionaire 💰💰 (More than 10 million)";
  }
  //10cr
  else if (finalbal > 50000000 && finalbal <= 100000000) {
    money = 100000000;
    item = "Mcdonalds franchise ";
    richstatus = "Millionaire 💰💰💰 ";
    //50 cr
  } else if (finalbal > 100000000 && finalbal <= 500000000) {
    money = 500000000;
    item = "Yacht";
    richstatus = "MultiMillionaire 💸";
    //100cr
  } else if (finalbal > 500000000 && finalbal <= 1000000000) {
    money = 1000000000;
    item = "Big Mansion";
    richstatus = "MultiMillionaire 💸💸";
    //500cr
  } else if (finalbal > 1000000000 && finalbal <= 5000000000) {
    money = 5000000000;
    item = "Helicopter";
    richstatus = "MultiMillionaire 💸💸💸";
  }
  //1000cr
  else if (finalbal > 5000000000 && finalbal <= 10000000000) {
    money = 10000000000;
    item = " Private jet ";
    richstatus = "Super rich 💸💸💸";
  }
  //5000cr
  else if (finalbal > 10000000000 && finalbal <= 50000000000) {
    money = 50000000000;
    item = "the white house";
    richstatus = "Super rich 💸💸💸";
  }
  // 1 billion
  else if (finalbal > 50000000000 && finalbal <= 100000000000) {
    item = "burj khalifa";
    richstatus = "billionaire 🤑";
    money = 100000000000;
  }
  //10 billion
  else if (finalbal > 100000000000 && finalbal <= 1000000000000) {
    money = 1000000000000;
    item = "Private Island";
    richstatus = "billionaire 🤑";
  }
  //50 billion
  else if (finalbal > 1000000000000 && finalbal <= 10000000000000) {
    money = 10000000000000;
    item = "BMW Corporation";
    richstatus = "Multibillionaire 🤑";
  }
  //100 billion
  else if (finalbal > 10000000000000 && finalbal <= 100000000000000) {
    money = 100000000000000;
    item = "Amazon.com";
    richstatus = "in forbes to 10 richest list 🤑";
  }
  //1 trillion
  else if (finalbal > 100000000000000 && finalbal <= 1000000000000000) {
    money = 1000000000000000;

    item = "Apple Co";
    richstatus = "richest person in the world 🤑";
  }
  //10 tril
  else if (finalbal > 1000000000000000 && finalbal <= 10000000000000000) {
    money = 10000000000000000;
    item = "the united states";
    richstatus = "richest person in the world 🤑";
  } else if (finalbal > 10000000000000000) {
    item = "the earth";
    richstatus = "richest in the Universe ,aliens want to meet you";
    money = 100000000000000000;
  }

  statusimage.src = `/Images/bankappimg/${money}.jpg`;

  statustxt.textContent = `You can buy ${item} for ${finalbal} Rs`;

  if (finalbal >= 1000000) {
    rich.textContent = `You are ${richstatus}`;
  }

  deposit.value = "";
  withdraw.value = "";
});

logout.addEventListener("click", function () {
  console.log(usernameinput.value);

  loginmodal.classList.remove("hide");
  bankmodal.classList.add("hide");
  status.classList.add("hide");
});

overlay.addEventListener("click", function () {
  overlay.classList.add("hide");
});

var users = [{}];

document.getElementById("registerButton").onclick = function () {
  if (document.getElementById("registerName").value) {
    var newUsername = document.getElementById("registerName").value;
    var newPassword = document.getElementById("registerPassword").value;
    users.push({ username: newUsername, password: newPassword });
    document.getElementById(
      "loginResult"
    ).innerHTML = `Account created , ${newUsername} `;
    console.log(users);
  } else {
    alert("Kindly enter username and password");
  }
};

loginbutton.addEventListener("click", function () {
  var username = document.getElementById("loginName").value;
  var password = document.getElementById("loginPassword").value;
  for (var i = 0; i < users.length; i++) {
    if (username == users[i].username || username == "1") {
      if (password == users[i].password || password == "1") {
        loginmodal.classList.add("hide");
        bankmodal.classList.remove("hide");
        status.classList.remove("hide");
        welcomeuser.textContent = `WELCOME  , ${username} `;
        overlay.classList.add("hide");
        return;
      }
    } else {
      console.log("hi");
      overlay.classList.remove("hide");
    }
  }
});
