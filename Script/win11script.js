



let timed  = document.querySelector('.time')

let dated  = document.querySelector('.time1')





var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
var day = today.getDay()
let dayname;


switch (day)
{
    case 1: dayname = 'monday' 
    break;
    case 2: dayname = 'tuesday' 
    break;
    case 3: dayname = 'wednesday' 
    break;
    case 4: dayname = 'thursday' 
    break;
    case 5: dayname = 'friday' 
    break;
    case 6: dayname = 'Saturday' 
    break;
    case 7: dayname = 'Sunday' 
    break;


}

console.log(date)
console.log(time)
console.log(day)
console.log(dayname)

var myVar = setInterval(function() {
    myTimer();
  }, 1000);
  
  function myTimer() {
    var d = new Date();
    document.querySelector(".time").innerHTML = d.toLocaleTimeString();
    document.querySelector(".time1").innerHTML = date;
  }

let windowglobal = document.querySelector(".windowwrapper")
let closebutton = document.querySelector(".clos")
let minimizebutton = document.querySelector(".min")
let winButton = document.querySelector(".winlogowhite")
let startMenu = document.querySelector(".start")
let main = document.querySelector(".bg")

let chrometaskbar = document.querySelector("#chrometask")
let chromeicon = document.querySelector("#chromedesk")
let chromescreen = document.querySelector(".chromewindow")

let thispctask = document.querySelector("#thispctask")
let thispcdesk = document.querySelector("#thispcdesk")
let thispcwindow = document.querySelector(".thispcwindow")
let welcome = document.querySelector(".welcome")
let closewelcome = document.querySelector(".closewelcome")

let vscodedesk = document.querySelector("#vscodedesk")
let vswindow = document.querySelector(".vswindow")

let photosdesk = document.querySelector("#photosdesk")
let photostask = document.querySelector("#photostask")
let photosscreen= document.querySelector(".photoswindow")

let maildesk = document.querySelector("#maildesk")
let mailtask = document.querySelector("#mailtask")
let mailscreen= document.querySelector(".mailwindow")

let storedesk = document.querySelector("#storedesk")
let storetask = document.querySelector("#storetask")
let storewindow= document.querySelector(".storewindow")

let searchtask = document.querySelector("#searchtask")
let searchwindow= document.querySelector(".search")

let edgedesk = document.querySelector("#edgedesk")
let edgetask = document.querySelector("#edgetask")
let edgewindow= document.querySelector(".edgewindow")

let gitdesk = document.querySelector("#gitdesk")
let gitwindow= document.querySelector(".gitwindow")

let lastbar= document.querySelector(".lastbaricon")

lastbar.addEventListener('click' ,function()
{
  welcome.classList.toggle('hide')
})


searchtask.addEventListener('click',function()
{
  searchwindow.classList.remove('hide')

})

searchwindow.addEventListener('click',function()
{
  searchwindow.classList.add('hide')
})

chrometaskbar.addEventListener('click' , openChrome)
chromeicon.addEventListener('click' , openChrome)


thispctask.addEventListener('click' , openThispc)
thispcdesk.addEventListener('click' , openThispc)
vscodedesk.addEventListener('click' , openvscode)

photosdesk.addEventListener('click',openphotos)
photostask.addEventListener('click',openphotos)

mailtask.addEventListener('click',openmail)
maildesk.addEventListener('click',openmail)

storedesk.addEventListener('click',openstore)
storetask.addEventListener('click',openstore)

edgedesk.addEventListener('click',openedge)
edgetask.addEventListener('click',openedge)


gitdesk.addEventListener('click',opengit)


closebutton.addEventListener('click' , closeglobal)
minimizebutton.addEventListener('click' , closeglobal)
function closeglobal(){
  windowglobal.classList.add('hide')
  chromescreen.classList.add('hide')
  thispcwindow.classList.add('hide')
  vswindow.classList.add('hide')
  photosscreen.classList.add('hide')
  mailscreen.classList.add('hide')
  storewindow.classList.add('hide')
  gitwindow.classList.add('hide')
  edgewindow.classList.add('hide')
}

winButton.addEventListener('click' , function(){
  startMenu.classList.toggle('hide')
})

startMenu.addEventListener('click' , function()
{
  startMenu.classList.add('hide')
})


function openChrome()
{
  windowglobal.classList.remove('hide')
  chromescreen.classList.remove('hide')
 console.log("hello")
}

function openThispc()
{
  windowglobal.classList.remove('hide')
  thispcwindow.classList.remove('hide')
}

closewelcome.addEventListener('click' ,function()
{
  welcome.classList.add('hide')
})

function openvscode()
{
  windowglobal.classList.remove('hide')
  vswindow.classList.remove('hide')
}


function openphotos()
{
  windowglobal.classList.remove('hide')
  photosscreen.classList.remove('hide')
}

function openmail()
{
  windowglobal.classList.remove('hide')
  mailscreen.classList.remove('hide')
}

function openstore()
{
  windowglobal.classList.remove('hide')
  storewindow.classList.remove('hide')
}

function openedge()
{
  windowglobal.classList.remove('hide')
  edgewindow.classList.remove('hide')
}

function opengit()
{
  windowglobal.classList.remove('hide')
  gitwindow.classList.remove('hide')
}


