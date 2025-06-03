let userScore=0;
let compScore=0;
 
const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");


const genCompChoice=()=>{
    const options=["Rock","Paper","Scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame=()=>{
    msg.innerText="Game Was Draw";
    msg.style.backgroundColor="yellow";
    msg.style.color="black";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin)
    {
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=`You Win! your ${userChoice} beats your ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText=`You Lose! your ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame =(userChoice)=>{
    console.log("user choice=",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice",compChoice);
    if(userChoice==compChoice)
    {
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice=="Rock")
        {
          userWin=  compChoice=="Paper"? false:true;
        }
        else if(userChoice=="Paper")
        {
          userWin=  compChoice=="Scissors"? false:true;
        }
        else{
           userWin= compChoice=="Rock"? false:true;
        }
        showWinner(userWin, userChoice,compChoice)
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});