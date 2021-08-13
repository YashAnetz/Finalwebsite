'use strict'



var images = document.querySelectorAll(".box img")
var scoreu = document.querySelector(".score")
var timeu = document.querySelector(".time")
var modal = document.querySelector(".modal");
var modalP = document.querySelector(".modal p");
var button = document.querySelector(".modal .play");
var slowbutton = document.querySelector(".slow")
var fastbutton = document.querySelector(".fast")
var mediumbutton = document.querySelector(".Medium")
var reset= document.querySelector(".reset")
var stop = document.querySelector(".restart")



var time30 = document.querySelector(".t")
var time60 = document.querySelector(".s")
var time90 = document.querySelector(".h")

var back= document.querySelector(".back");
var setTimer, setShowHide;

let score=0;
let time;
let speed;



slowbutton.addEventListener('click' , function(){
    speed=700;
    mediumbutton.classList.add('hide')
    fastbutton.classList.add('hide')
})

mediumbutton.addEventListener('click' , function(){
    speed=600;
    slowbutton.classList.add('hide')
    fastbutton.classList.add('hide')
})


fastbutton.addEventListener('click' , function(){
    speed=500;
    mediumbutton.classList.add('hide')
    slowbutton.classList.add('hide')
})

time30.addEventListener('click' , function(){
    time=30;
    button.classList.remove("hide")
    time60.classList.add('hide')
    time90.classList.add('hide')
    

})

time60.addEventListener('click' , function(){
    time=60;
    button.classList.remove("hide")
    time30.classList.add('hide')
    time90.classList.add('hide')
})

time90.addEventListener('click' , function(){
    time=90;
    button.classList.remove("hide")
    time60.classList.add('hide')
    time30.classList.add('hide')
})


stop.addEventListener('click' , function(){
  restart()

})



reset.addEventListener('click' , rest)

function rest()
{
    button.classList.add("hide")
    time30.classList.remove('hide')
    time60.classList.remove('hide')
    time90.classList.remove('hide')
    slowbutton.classList.remove('hide')
    mediumbutton.classList.remove('hide')
    fastbutton.classList.remove('hide')
}


button.addEventListener('click' , function(){
    console.log('Clicke');

if(time==undefined)
{
    time=40;
}

if(speed==undefined)
{
    speed=600;
}



modal.classList.add('hide')
back.classList.add('hide')

setTimer=setInterval(timer,1000)
setShowHide = setInterval(showHide, speed*2);


for (let i=0 ; i<images.length ; i++)
{
    images[i].addEventListener('click' , hit )
} 
})


function hit(e)
{
    let curr;
    console.log("Hit");
    curr = e.target;
    curr.parentNode.classList.add("touched");
    score += 10;
    scoreu.innerHTML = score;
    setTimeout(function() {
      curr.parentNode.classList.remove("touched");
    }, speed/2);
}

function showHide() {
    var randd = randomize(9);
    images[randd].style.top = "1px";
    setTimeout(function() {
      images[randd].style.top = "100px";
    }, speed);
  }


  function timer() {
    if (time) {
      time -= 1;
      timeu.innerHTML = time;
    }
    else {
      restart();
    }
  }

  function restart() {
    modalP.innerHTML = "You scored " + score + " !";
    modal.classList.remove("hide");
    button.classList.add('hide')
    clearInterval(setTimer);
    clearInterval(setShowHide);
    rest()
    time;
    score = 0;
    timeu.innerHTML = time;
    scoreu.innerHTML = score;
  }
  

  function randomize(rand) {
    return Math.floor(Math.random() * rand);
  }
  
  // handle focus of the page

  