'use strict'

let userinput = document.querySelector(".kminput")
let addbutton = document.querySelector(".add")
let mon = document.querySelector(".mon")
let tue = document.querySelector(".tue")
let wed = document.querySelector(".wed")
let thu = document.querySelector(".thu")
let fri = document.querySelector(".fri")
let sat = document.querySelector(".sat")
let sun = document.querySelector(".sun")
let daytext = document.querySelector(".day")
let totalamt = document.querySelector(".totalamt")
let avgtext = document.querySelector(".avgtext")
let caltext = document.querySelector(".caltext")
let goaltext = document.querySelector(".goaltext")
let goalcolor = document.querySelector(".goal")
let percent = document.querySelector(".goal .per")
let box1 = document.querySelector(".box1")
let success = document.querySelector(".box .status")
let statu = document.querySelector(".box ")
let setgoalbutton1 = document.querySelector(".setg")
let setgoalmodal = document.querySelector(".setgoal")
let setgoalvalue = document.querySelector(".setinput")
let setgoalok = document.querySelector(".set")
let win = document.querySelector(".win")
let goalstats = document.querySelector(".goalstats")
let congrats = document.querySelector(".congrats")
let next = document.querySelector(".next")
let reseter = document.querySelector(".reset")
let target = 25
let day = 1;

setgoalbutton1.addEventListener('click' , function(){
setgoalmodal.classList.remove('hide')
console.log('hi')
})

setgoalok.addEventListener('click' , function(){
    setgoalmodal.classList.add('hide')
    target = setgoalvalue.value;
console.log(target)
goaltext.textContent = `Goal - 0/${target}km`
   

    
    
    })

function display()
{
    let total;
    let avg;


let currday 

  switch(day)

 
  {
    case 1:
    currday = 'Monday'
   
    mon.textContent = userinput.value;
    totalamt.textContent = userinput.value;
  


    break;
    case 2:
    currday = 'Tuesday'
    tue.textContent = userinput.value;
    totalamt.textContent =  Number(totalamt.textContent) + Number(userinput.value);
   

    break;
    case 3:
    currday = 'Wednesday'
    wed.textContent = userinput.value;
    totalamt.textContent =  Number(totalamt.textContent) + Number(userinput.value);
   
    break;
    case 4:
    currday = 'Thursday'
    thu.textContent = userinput.value;
    totalamt.textContent =  Number(totalamt.textContent) + Number(userinput.value);
   
    break;
    case 5:
    currday = 'Friday'
    fri.textContent = userinput.value;
    totalamt.textContent =  Number(totalamt.textContent) + Number(userinput.value);
   
    break;
    case 6:
    currday = 'Saturday'
    sat.textContent = userinput.value;
    totalamt.textContent =  Number(totalamt.textContent) + Number(userinput.value);
   
    break;
    case 7:
    currday = 'Sunday'
    sun.textContent = userinput.value;
    totalamt.textContent =  Number(totalamt.textContent) + Number(userinput.value);
   
    break;
    

  }
  avg = Number(totalamt.textContent)/day
  avgtext.textContent = avg.toFixed(1)
  caltext.textContent = Number(totalamt.textContent) * 90

  daytext.textContent =currday;

  if(day != 7)
  {day++;}
  else if(day == 7)
  {day = 1}

  if(currday == 'monday')

  {
    avgtext.textContent = 0
    caltext.textContent =0 
    totalamt.textContent =0 
  }


 let goal
 goal = Number(totalamt.textContent);
goaltext.textContent = `Goal - ${goal}/${target}km`

let goalpercent 

goalpercent = ((goal/target)*100).toFixed(1)

percent.textContent = `${goalpercent}%` 
let green = goalpercent;
let white = 100 - goalpercent;
statu.style = ` background-image:
linear-gradient(
        
    rgb(167, 167, 167) ${white}% ,
    rgb(87, 156, 99) ${green}%
    
                );

}
`
console.log('goal-'+goal)
console.log('target-'+target)




if(day==1 && goal < target)
{

 
 
  win.classList.remove('hide')
 
  goalstats.textContent =`Goal - ${goal}/${target} km`
    congrats.textContent = `You completed ${goalpercent}% of your goal`
}
else if(goal >= target)
{
  goalcolor.style = ` background-color: mediumseagreen;`
  box1.classList.add('hide')
  success.classList.remove('hide')
  win.classList.remove('hide')
  goalstats.textContent =`Goal - ${goal}/${target} km`
  congrats.textContent = `Hurray , you completed ${goalpercent}% of your goal💯`
 

  

}




userinput.value=''


  

 


  



}

function reset()
{
    daytext.textContent = 'Monday';
    mon.textContent = 0
    tue.textContent = 0
    wed.textContent = 0
    thu.textContent = 0
    fri.textContent = 0
    sat.textContent = 0
    sun.textContent = 0
    win.classList.add('hide')
    day=1;
    caltext.textContent=0;
    totalamt.textContent=0;
    avgtext.textContent=0;
    goaltext.textContent =`Goal - 0/${target} km`
    percent.textContent = `0%`
    goalcolor.style = ` background-color: rgb(36, 99, 128);`
  box1.classList.remove('hide')
  success.classList.add('hide')
}
next.addEventListener('click' , reset)
reseter.addEventListener('click' , reset)


addbutton.addEventListener('click' , display)
