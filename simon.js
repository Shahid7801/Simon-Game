
let gameSeq = [];        //check game sequence
let userSeq = [];            //check user input
let btns = ["yellow", "red", "purple", "green"];

let started = false;        //game not started
let level = 0;            //level 0

let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
        if (started == false) {
                console.log("game is started");
                started = true;
                levelUp();
        }
});

// function btnFlash(btn) {
//         btn.classList.add("flash");
// }
// function for flash color
function gameFlash(btn) {                 //button flash
        btn.classList.add("flash");             // flash button class add
        setTimeout(function () {                 //set timer to remove bg color
                btn.classList.remove("flash");          //remove bg color before one second
        }, 250);
}
function userFlash(btn) {                 //button flash
        btn.classList.add("userflash");             // flash button class add
        setTimeout(function () {                 //set timer to remove bg color
                btn.classList.remove("userflash");          //remove bg color before one second
        }, 250);
}




function levelUp() {                            //cll function 
        userSeq = [];
        level++;                                //increase  level
        h2.innerText = `level ${level}`;                      //show level on the screen

        let randIdx = Math.floor(Math.random() * 3);
        let randColor = btns[randIdx];
        let randBtn = document.querySelector(`.${randColor}`);

        gameSeq.push(randColor);
        console.log(gameSeq);
        gameFlash(randBtn);
}
function checkAns(idx) {
        if (userSeq[idx] === gameSeq[idx]) {
                if (userSeq.length == gameSeq.length) {
                        // levelUp();
                        setTimeout(levelUp(), 1000);
                }
        } else {
                h2.innerHTML = ` <b > Game over!your score was : ${level}<b><br> Press any key to start!`;
                        // h2.innerHTML = ` Press any key to start!`;

document.querySelector("#col").style.backgroundColor ="red"; 
                setTimeout(function () {
                document.querySelector("#col").style.backgroundColor=" black";
                }, 150)
                reset();
        }
}
function btnPress() {
        let btn = this;
        userFlash(btn);
        userColor = btn.getAttribute("id");
        userSeq.push(userColor);
        checkAns(userSeq.length - 1);
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
        btn.addEventListener("click", btnPress);
}
function reset() {
        starteed = false;
        gameSeq = [];
        userSeq = [];
        level = 0;
}