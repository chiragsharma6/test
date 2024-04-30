let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscoreb = document.querySelector("#user-score");
const compscoreb = document.querySelector("#comp-score");
const gencompchoice =()=>{
const options = ["rock" , "paper" , "scissor"];
const ranindx = Math.floor(Math.random()*3);
return options[ranindx];
}
 
showwinner = (userwin , userchoice , compchoice) =>{
    if(userwin){
     userscore++;
     userscoreb.innerText=userscore;
    msg.innerText=` You win !! your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor="green";
    }
    else{
       compscore++;
       compscoreb.innerText=compscore;
        msg.innerText=`You lose!! ${compchoice} baeats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}


const playgame= (userchoice)=>{
console.log("userchoice = " , userchoice);
const compchoice = gencompchoice();
console.log("compchoice = " , compchoice);
if(userchoice === compchoice){
    console.log(" Game Draw !");
    msg.innerText=" Game Draw !!";
    msg.style.backgroundColor="pink";
    msg.style.color ="black";
}
else {
   let userwin=true;
    if(userchoice === "rock"){
        //paper , scissro
        userwin = compchoice === "paper" ? false :true;
    }
    else if(userchoice === "paper"){
        // rock , scissor
        userwin= compchoice === "scissor" ? false :true;

    }
    else{
        //rock . paper
        userwin=compchoice === "rock" ? false :true;
    }
showwinner(userwin , userchoice , compchoice);
}
};

choices.forEach((choice) => {
choice.addEventListener("click" , () =>{
const userchoice= choice.getAttribute("id");
playgame(userchoice);
});
});


