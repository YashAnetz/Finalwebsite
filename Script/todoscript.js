'use strict'

let form = document.getElementById('addForm')
let userinput = document.getElementById("item")
let Userbutton = document.querySelector('.add')
let delet = document.querySelector('.delete')
let list = document.getElementById('items')
let item = document.querySelector('.items_item')
let search = document.getElementById('filter')






Userbutton.addEventListener('click' ,additem)
list.addEventListener('click',removeitem)
search.addEventListener('keyup',searchitems)


     function additem(e)
    {
        
       
       if(userinput.value =="")
       {
            userinput.style = ' background-color: lightcoral'
            userinput.placeholder = 'Please Enter text'
       }else
       {

        userinput.style = ' background-color: white'
        let newentry = userinput.value;

        
        
        let li 
         
        
        li = document.createElement('li')
        li.className = 'items_item'
        li.appendChild(document.createTextNode(newentry))
        list.appendChild(li)
        


        let del = document.createElement('span')
        del.className = 'delete'
        del.appendChild(document.createTextNode('X'))
        li.appendChild(del)
       }
}

function removeitem(e)
{
 
    
    let li = e.target.parentElement
    list.removeChild(li)


}



function searchitems(e)
{
let text = e.target.value
let finaltext = text.toLowerCase()

let lists = document.getElementsByTagName('li')
Array.from(lists).forEach(function(item)
{
    let itemname = item.firstChild.textContent;
    if(itemname.toLowerCase().indexOf(finaltext)!=-1)
    {
        item.style.display='block'
    }
    else
    {
        item.style.display='none'
    }
})
}








