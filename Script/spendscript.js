'use strict'


let form = document.getElementById('info')
let addmoney = document.querySelector('.add')
let removemoney = document.querySelector('.sub')
let moneyinput = document.querySelector('.userinputmoney')
let typeinput = document.querySelector('.userinputtype')
let mainbalance = document.querySelector('.available')
let percentbar = document.querySelector('.line')
let percent = document.querySelector('.stat')
let budgeti= document.querySelector('.amtsi')
let setgoalbutton = document.querySelector('.setg')
let setgoalbuttonforincome = document.querySelector('.setgi')
let incomegoal = document.querySelector('.spentperincome')
let incomeset = document.querySelector('.ingbuttoninc')
let incomenetry = document.querySelector('.inginc')
let goalmodal = document.querySelector('.spentper')
let addamt = 0
let spendamt = 0

let list = document.getElementById('item')
let incomefinalgoal = 1000

addmoney.addEventListener('click' , addtoBalance)
removemoney.addEventListener('click' , removefrombalance)


setgoalbuttonforincome.addEventListener('click' , function()
{
    goalmodal.classList.add('hide')
    incomegoal.classList.remove('hide')
})

incomeset.addEventListener('click', function(){

    if(incomenetry.value == '')
    {
        incomenetry.placeholder = 'Please Enter'
    }
    else{
        incomegoal.classList.add('hide')

        incomefinalgoal = incomenetry.value
        budgeti.textContent = `$0/$${incomefinalgoal}`
        goalmodal.classList.remove('hide')
    }
    
})


function addtoBalance(e)
{
    e.preventDefault()

    if(typeinput.value=="" || moneyinput.value=="")
    {
       moneyinput.style = 'background-color: rgb(247, 187, 177);'
       typeinput.style = 'background-color: rgb(247, 187, 177);'
       

    }

    else
    {
 
        moneyinput.style = 'background-color: none;'
        typeinput.style = 'background-color: none;'
    let type = `🟢 ${typeinput.value}`
    console.log(type)
   

    addamt= Number(addamt) + Number(moneyinput.value);
    
    mainbalance.textContent = `$${addamt}`
    
    let addh2 = document.createElement('h2')
    addh2.className = 'amt plus'
    addh2.appendChild(document.createTextNode(`+$${moneyinput.value}`))

    let li = document.createElement('li')
    li.className = 'items'
    li.appendChild(document.createTextNode(type))
    li.appendChild(addh2)
    list.appendChild(li)
  
    console.log('adda'+addamt)

    let percent1 = Number((addamt / incomefinalgoal) * 100).toFixed(1)
    let percent2 = Number(100 - percent1);

    console.log(percent2 , percent1)

    let percent11 = Number(percent1)

    percentbar.style = `background-image: linear-gradient(to right , #4facfe ${percent11}% , #d3d3d3 ${percent2}%);`
    budgeti.textContent = `$${addamt}/$${incomefinalgoal}`
    percent.textContent = `${percent1}%`
    }

    if(addamt < 0)
    {
        mainbalance.style = 'background-image: linear-gradient(to right, #d6625e 0%, #ec296a 100%);'
    }

    else if(addamt >= 0)
    {

        mainbalance.style = '  background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);   '
    }

    typeinput.value=''
    moneyinput.value=''

    

    
}


function removefrombalance(e)
{
    e.preventDefault()

    
    if(typeinput.value=="" || moneyinput.value=="")
    {
       moneyinput.style = 'background-color: rgb(247, 187, 177);'
       typeinput.style = 'background-color: rgb(247, 187, 177);'

    }
    else{

    let type = `🔴 ${typeinput.value}`
    console.log(type)
   
    addamt = Number(addamt) - Number(moneyinput.value)
  
    console.log(addamt)
    mainbalance.textContent = `$${addamt}`
    
    let addh2 = document.createElement('h2')
    addh2.className = 'amt minus'
    addh2.appendChild(document.createTextNode(`-$${moneyinput.value}`))

    let li = document.createElement('li')
    li.className = 'items'
    li.appendChild(document.createTextNode(type))
    li.appendChild(addh2)
    list.appendChild(li)
    
    
    console.log('adda'+addamt)
    
 
  
 
    }
     
    typeinput.value=' '
    moneyinput.value=' '


    if(addamt < 0)
    {
        mainbalance.style = 'background-image: linear-gradient(to right, #d6625e 0%, #ec296a 100%);'
    }

    else if(addamt >= 0)
    {

        mainbalance.style = '  background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);   '
    }

    
}


