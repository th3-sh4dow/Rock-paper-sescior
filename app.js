let userScore = 0;
let compScore = 0;

let msg  = document.querySelector(".msg");
console.dir(msg);

let body = document.querySelector("body");

// Select all elements with the class "choice"
const choices = document.querySelectorAll("#choice"); // Use querySelectorAll

const compGenChoice=() => {
    let choices = ["rock", "paper", "scissors"];
    const rendomeIDX = Math.floor(Math.random() * 3);
    return choices[rendomeIDX];
};

const draw = () => {
    console.log("match Draw!");
    msg.innerHTML = "Match Draw! Play Again!";
    msg.style.backgroundColor = "Yellow";
    msg.style.fillter = "drop-shadow(0 0 0.50rem black)";
    msg.style.color = "black";
    // body.style.backgroundColor = "yellow";
    
};

const winner = (userWin,compID,userid) => {
    if (userWin) {
        userScore++;
        console.log("You Win!");
        msg.innerHTML = `You Win. Your ${userid} Beats ${compID}!`;
        msg.style.backgroundColor = "Green";
        // body.style.backgroundColor = "Green";
    } else {
        compScore++;
        console.log("You Loss!");
        msg.innerHTML = `You Loss. ${compID} Beats Your ${userid}!`;
        msg.style.backgroundColor = "red";
        // body.style.backgroundColor = "red";
    }
    counting(userScore,compScore);
};

const counting = (userScore,compScore) =>{
    let uScore = document.querySelector("#user-score");
    let cScore = document.querySelector(".comp-score");
    uScore.innerText = userScore;
    cScore.innerText = compScore;
}

const playgames = (userid) => {
    console.log("Choice was clicked:",userid);
    const compID = compGenChoice();
    console.log("Choice was clicked:",compID);

    if(compID === userid){
        draw();
    } else {

    

    let userWin  = true;

    if(userid = "rock"){
        //paper,scissors
        userWin = compID === "paper" ? false : true;
    } else if(userid = "scissors"){
        //rock,scissors
        userWin = compID === "scissors" ? false : true;
    } else {
        //rock,paper
        userWin = compID === "rock" ? false : true;
    }

    winner(userWin,compID,userid);
}
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("class");
    playgames(choiceId);
    });
    
});
