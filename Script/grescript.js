let verbal1 = document.querySelector(".v1")
let verbal2 = document.querySelector(".v2")
let quant1 = document.querySelector(".q1")
let quant2 = document.querySelector(".q2")
let submit = document.querySelector(".Calculate")
let result = document.querySelector(".result")
let reset = document.querySelector(".exit")
let verbal1score =  0
    let verbal2score = 0
    let quant1score =0
    let quant2score = 0
    let verbalfinal;
    let quantfinal;
    let grefinal;
    let grezero = 260;

    let noinput;
    let greater20;

submit.addEventListener('click', function(){

   verbal1score = Number(verbal1.value);
     verbal2score = Number(verbal2.value);
     quant1score = Number(quant1.value);
    quant2score = Number(quant2.value);

    console.log(`Scores :
    verbal 1 : ${verbal1score}
    verbal 2 : ${verbal2score}
    quant 1 : ${quant1score}
    quant 2 : ${quant2score}`);

    if(verbal1score==0 || verbal2score==0 || quant2score==0 || quant1score==0)
    {

        noinput = "Kindly enter all marks ";
        console.log("No ibput");
        result.classList.remove("hide")
       
        result.textContent=`Kindly enter all Marks` ;
    }

    else if(verbal1score>20 || verbal2score>20 || quant2score>20 || quant1score>20)

    {

        greater20 = "Kindly enter marks out of 20"
        console.log("Invalid");
        result.classList.remove("hide")
       
        result.textContent=`Kindly enter marks out of 20` ;
    }
   
    else if(verbal1score<20 || verbal2score<20 || quant2score<20 || quant1score<20)
    {
        verbalfinal=verbal1score+verbal2score;
        quantfinal=quant2score+quant1score;
        grefinal=verbalfinal+quantfinal+grezero;
        console.log(grefinal);
        result.classList.remove("hide")
       
        result.textContent=`💯Your gre score is ${grefinal}/340` ;
    }






})