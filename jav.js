const menubtn = document.querySelector(".menu-button")
const navlinks = document.querySelector(".nav-links")
const socialbutton = document.querySelector(".soc")
const socialmedia = document.querySelector(".conmain1")
const secondrow = document.querySelector(".secondrow")
const more = document.querySelector(".more")
pressed=0;

menubtn.addEventListener('click', function(e){

navlinks.classList.toggle('mobile-menu')

})

socialbutton.addEventListener('click' , function(){
     pressed=1;
    console.log("Social pressed");
    socialmedia.classList.toggle('hide')
    if(pressed==1)
    {  socialbutton.textContent="hi✋"}
  


    

})


more.addEventListener('click', function(){
    secondrow.classList.toggle("hide")
})