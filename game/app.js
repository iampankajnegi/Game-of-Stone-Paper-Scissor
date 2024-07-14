let userScore = 0;
let compScore = 0;


let choices = document.querySelectorAll(".choice");

let msg = document.querySelector("#msg");


let userScorePara = document.querySelector("#user-score")

let compScorePara = document.querySelector("#comp-score")

let ResetBtn = document.querySelector("#reset-btn")




ResetBtn.addEventListener("click" , ()=>{

      userScorePara.innerHTML="0"
      compScorePara.innerHTML="0"
      msg.innerHTML="Play your move"
      msg.style.backgroundColor ="black"
})



let getComputerChoice =()=>{

      let options =["Stone", "Paper" , "Scissor"]

      let resultId = Math.floor(Math.random()*3);

      return options[resultId];
}


let drawGame = ()=>{

      msg.innerHTML = "Game was Draw . Play again" ;

      msg.style.backgroundColor ="#08lb3"
}






let showWinner = (userWin , userChoice , compChoice)=>{

       if(userWin){

          userScore++

          userScorePara.innerHTML = userScore;

          msg.innerHTML = `you win  your ${userChoice} beats ${compChoice}` ;

          msg.style.backgroundColor = "green"

       }

       else{

           compScore++

           compScorePara.innerHTML = compScore ;
           msg.innerHTML = `you lost ${compChoice} beat your ${userChoice}` ;

           msg.style.backgroundColor = "red" ;
       }
}






let playGame =(userChoice)=>{
 
    let compChoice = getComputerChoice();

    console.log("comp user" , compChoice)

    if(userChoice === compChoice){

        return drawGame();
    }
    else{

        let userWin = true ;

        if(userChoice === "Stone"){

              userWin = compChoice === "Paper" ? false :true ;
        }

        else if(userChoice === "Paper"){

             userWin = compChoice === "Scissor" ? false : true;
        }

        else{
               // stone , paper
              userWin = compChoice === "Stone" ? false : true ;
        }


         showWinner(userWin , userChoice , compChoice) 
    }

}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice =  choice.getAttribute("id")
          
        console.log("choice was clicked",userChoice)

        playGame(userChoice)
        
    })
})
