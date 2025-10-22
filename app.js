let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const usescore=document.querySelector("#user-score");
const compscore=document.querySelector("#comp-score");


const gencompchoice =()=>{
    const option=["rock","paper","scissors"];
//   rock , paper , scissor 
   const ranidx=Math.floor(Math.random()*3);
   return option[ranidx];
}

const drawGame=()=>{
    // console.log(`The Game was a draw`);
    msg.innerText=" Game is Draw ";
    msg.style.backgroundColor="black";
}

const playgame =(userChoice)=>{
//   console.log(`user choice = ${userChoice}`);
  //generate computer choice 
const compchoice=gencompchoice();
// console.log(`Computer choice = ${compchoice}`);

if(userChoice===compchoice){
    drawGame();
}else{
    let userwin = true;
    if(userChoice==="rock"){
        userwin= compchoice ==="paper"? false:true ;
    }
    else if(userChoice==="paper"){
        userwin= compchoice ==="scissors"?false:true;
    }else{
       userwin= compchoice ==="rock"?false:true;
    }
    showwinner(userwin,userChoice,compchoice);
  
  }
};
const showwinner = (userwin,userChoice,compchoice) => {
    if(userwin){
       userScore++;
       usescore.innerText=userScore;
        msg.innerText=`You Win ! ${userChoice} beats ${compchoice}`;
         msg.style.backgroundColor =  "green";
    }
    else{
        compScore++;
        compscore.innerText=compScore;
        msg.innerText=`You Lose ! ${compchoice} beats ${userChoice}`;
         msg.style.backgroundColor = "red";
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=> {
        const userChoice=choice.getAttribute("id");
    // console.log("Choice was clicked",userChoice);
    playgame(userChoice);
    });
});