'use strict'

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js';
import { getDatabase } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js';


let form = document.getElementById('form')
let submit = document.querySelector('.submit')
let title = document.querySelector('.title')
let content = document.querySelector('.content')
let date = document.querySelector('.date')
let author = document.querySelector('.author')
let blog = document.querySelector('.blog')
let allblogs = document.querySelector('.allblogs')





submit.addEventListener('click', writeData)






const firebaseConfig = {
  apiKey: 'AIzaSyDKTf0mRQTxbuv8FL3i0j_S1e3KFjleuOE',
  authDomain: 'fir-app-cbabf.firebaseapp.com',
  databaseURL: 'https://fir-app-cbabf-default-rtdb.firebaseio.com',
  projectId: 'fir-app-cbabf',
  storageBucket: 'fir-app-cbabf.appspot.com',
  messagingSenderId: '924136041356',
  appId: '1:924136041356:web:e4720b1339c59f39b884a9',
};

firebase.initializeApp(firebaseConfig); // i added this :)
let titlefinal
let contentfinal
let datefinal
let authorfinal
let usersfinal

//submit.addEventListener('click',additems)

submit.addEventListener('click',writeData)

submit.addEventListener('click',onclick)



 

  // Initialize Firebase


  function writeData()
  {
    if (title.value=="" ) 
    {
  
      title.style = " background-color: rgb(228, 153, 153);"
     
      title.placeholder = "Kindly enter all fields"
  
  
    }
    else if ( content.value=="")
    {
      content.style = " background-color: rgb(228, 153, 153);"
      content.placeholder = "Kindly enter content"
    }
    else if (date.value=="" )
    {
      date.style = " background-color: rgb(228, 153, 153);"
     
      date.placeholder = "Kindly enter all fields"
    } 
    else if (author.value=="" )
    {
      author.style = " background-color: rgb(228, 153, 153);"
     
      author.placeholder = "Kindly enter all fields"
    } 

    else{
      firebase.database().ref("users/"+title.value).set({
        titledb:title.value,
        contentdb:content.value,
        datedb:date.value,
        authordb:author.value,
      })
    }


  
   
     

  



  
    
   firebase.database().ref("users/"+title.value).on('value',function(snapshot)
   {
     titlefinal = snapshot.val().titledb
     contentfinal = snapshot.val().contentdb
     datefinal = snapshot.val().datedb
     authorfinal = snapshot.val().authordb
    
    
   })




 }



 function selecte(){

  let titlefinal1
  let contentfinal1
  let datefinal1
  let authorfinal1
 firebase.database().ref("users").once('value',
 function(AllRecords)
 {
   AllRecords.forEach(
     function(CurrentRecord)
     {
      titlefinal1 = CurrentRecord.val().titledb
      contentfinal1 = CurrentRecord.val().contentdb
      datefinal1= CurrentRecord.val().datedb
      authorfinal1 = CurrentRecord.val().authordb
      additems(titlefinal1,contentfinal1,datefinal1,authorfinal1)
     }
   )

 })

}



 window.onload = selecte()


function additems(titlefinal1,contentfinal1,datefinal1,authorfinal1)
{

  let blogno = 0 ;

  let h1 = document.createElement('h1')
  let blognew = document.createElement('div')
  blognew.className = 'blog'
  h1.className  = 'blogtitle'
  h1.appendChild(document.createTextNode(`${titlefinal1}`))
  blognew.appendChild(h1)
 



  let contentmain = document.createElement('p')
  contentmain.className= 'blogcontent'
  contentmain.appendChild(document.createTextNode(`${contentfinal1}`))
  blognew.appendChild(contentmain)




  let datemain = document.createElement('h2')
  datemain.className= 'blogdate'
  datemain.appendChild(document.createTextNode(`Date - ${datefinal1}`))
  blognew.appendChild(datemain)



  let authormain = document.createElement('h2')
  authormain.className= 'blogdate'
  authormain.appendChild(document.createTextNode(`By - ${authorfinal1}`))
  blognew.appendChild(authormain)
  
  allblogs.append(blognew)




  
}



 function onclick()
 {

  if (title.value=="" ) 
  {

    title.style = " background-color: rgb(228, 153, 153);"
   
    title.placeholder = "Kindly enter all fields"


  }
  else if ( content.value=="")
  {
    content.style = " background-color: rgb(228, 153, 153);"
    content.placeholder = "Kindly enter content"
  }
  else if (date.value=="" )
  {
    date.style = " background-color: rgb(228, 153, 153);"
   
    date.placeholder = "Kindly enter all fields"
  } 
  else if (author.value=="" )
  {
    author.style = " background-color: rgb(228, 153, 153);"
   
    author.placeholder = "Kindly enter all fields"
  } 
      else
      {
        

        let h1 = document.createElement('h1')
        let blognew = document.createElement('div')
        blognew.className = 'blog'
        h1.className  = 'blogtitle'
        h1.appendChild(document.createTextNode(`${title.value}`))
        blognew.appendChild(h1)
       
      
      
      
        let contentmain = document.createElement('p')
        contentmain.className= 'blogcontent'
        contentmain.appendChild(document.createTextNode(`${content.value}`))
        blognew.appendChild(contentmain)
      
      
      
      
        let datemain = document.createElement('h2')
        datemain.className= 'blogdate'
        datemain.appendChild(document.createTextNode(`${date.value}`))
        blognew.appendChild(datemain)
      
      
      
        let authormain = document.createElement('h2')
        authormain.className= 'blogdate'
        authormain.appendChild(document.createTextNode(`${author.value}`))
        blognew.appendChild(authormain)
        
        allblogs.prepend(blognew)
      
      }

 }




 

