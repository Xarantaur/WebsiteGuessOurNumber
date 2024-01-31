"use strict"

let guess;
window.addEventListener("load", start)



function start(){
    console.log("this is the javascript for guess-your-number")
    makeAGuess()
}

function makeAGuess(){
   let guess = Math.floor(Math.random()*99)+1;
   const list = document.querySelector("#List-of-guesses")
   const html =  `<li> I guessing ${guess} - is that <button id="low-btn">too low?</button><button id="high-btn">too high?</button><button id="correct-btn">correct!?!</button> </li>`
   list.insertAdjacentHTML("beforeend",html)
}


function correctGuess() {

}

function tooLowGuess(){

}

function tooHighGuess(){

}


