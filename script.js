let userscore=0;
let computerscore=0;
const msg=document.querySelector(".msg");
const msgcontainer=document.querySelector(".msg-container")
const myscore = document.querySelector(".my-score");
const cscore = document.querySelector(".c-score"); 


const choices=document.querySelectorAll(".choice");
//computer choice
function compchoice(){
    const option=["rock","paper","scissor"];
    const randomidx=Math.floor(Math.random()*3);
    return option[randomidx];
}
function draw(){
    console.log("game was draw");
    msg.innerText="Game was Draw !Play Again";
    msgcontainer.style.backgroundColor="#081b31"
}
function showwinner(userwin,userchoice,computerchoice){
    if(userwin){
        console.log("you win");
        msg.innerText=`you win! ${userchoice} beats ${computerchoice}`;
        msgcontainer.style.backgroundColor = "green";
        msgcontainer.style.textalgin="center";
        userscore++;
        myscore.innerText = userscore;
        myscore.style.fontSize = "3rem";
        
    }
    else{
        console.log("comp win");
        msg.innerText=`You Loose! ${computerchoice} beats ${userchoice} `;
        msgcontainer.style.backgroundColor = "red";
      computerscore++;
        cscore.innerText = computerscore;
        cscore.style.fontSize = "3rem";
    }
    







}

function playgame(userchoice){
    console.log("userchoice=",userchoice);
    const computerchoice=compchoice();
    console.log("compchoice=",computerchoice);

    let userwin=true;
    if(userchoice===computerchoice){
        draw();
        return ;
    }
    else if(userchoice==="rock"){
        //paper scissor
       userwin= computerchoice==="paper"?false:true;
    }
    else if(userchoice==="paper"){
        //scissor,rock
        userwin=computerchoice==="scissor"?false:true;
    }
    else{
        //paper,rock
        userwin=computerchoice==="paper"?true:false;
    }
    showwinner(userwin,userchoice,computerchoice);

}


 choices.forEach((choice)=>{
    

    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);

    });
 });
