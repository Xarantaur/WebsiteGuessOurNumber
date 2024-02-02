"use strict"

let guess;
window.addEventListener("load", start)



function start(event){
    event.preventDefault();
    console.log("this is the javascript for guess-your-number")
     makeAGuess()
     document.querySelector("#List-of-guesses").addEventListener('click', handleButtonClick);
}

function handleButtonClick(event) {
    const button = event.target;
    if (button.tagName === 'BUTTON') {
        if (button.id === 'low-btn') {
            tooLowGuess();
        } else if (button.id === 'high-btn') {
            tooHighGuess();
        } else if (button.id === 'correct-btn') {
            correctGuess();
        }
    }
}

function makeAGuess() {
    guess = Math.floor(Math.random() * 99) + 1;
    const list = document.querySelector("#List-of-guesses")
    const html = `<li> I'm guessing ${guess} - is that <button id="low-btn">too low?</button><button id="high-btn">too high?</button><button id="correct-btn">correct!?!</button> </li>`
    list.insertAdjacentHTML("beforeend", html)
}



function correctGuess() {
    console.log("correct Guess")
    const list = document.querySelector("#List-of-guesses");
    const correctGuess = `<li> You've guessed correct!!</li>`
    list.lastElementChild.outerHTML = correctGuess;

}

function tooLowGuess(){
    console.log("too low was pressed")
    const list = document.querySelector("#List-of-guesses");
    const lastGuess = `<li>I guess ${guess} - which was too low</li>`;
    list.lastElementChild.outerHTML = lastGuess;
    makeAGuess();
}

function tooHighGuess(){
    console.log("too high was pressed")
    const list = document.querySelector("#List-of-guesses");
    const lastGuess = `<li>I guess ${guess} - which was too high</li>`;
    list.lastElementChild.outerHTML = lastGuess;
    makeAGuess();

}


