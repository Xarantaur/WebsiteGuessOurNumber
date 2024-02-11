    "use strict"

    const range = Array.from(Array(100), (_, index) => index + 1);

    let low = 1;
    let end = range.length ;
    let middel = Math.floor((low + end)/2)
    let guess;
    window.addEventListener("load", start)



    function start(event){
        event.preventDefault();
        console.log("this is the javascript for guess-your-number")
        
        document.querySelector("#List-of-guesses").addEventListener('click', handleButtonClick);
        makeAGuess()
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
        guess = Math.floor((low + end)/2)
        const list = document.querySelector("#List-of-guesses")
        const html = `<li> I'm guessing ${guess} - is that <button id="low-btn">too low?</button><button id="high-btn">too high?</button><button id="correct-btn">correct!?!</button> </li>`
        list.insertAdjacentHTML("beforeend", html)
    }  



    function correctGuess() {
        console.log("correct Guess")
        const list = document.querySelector("#List-of-guesses");
        const correctGuess = `<li> I guessed ${guess} which was correct!!!</li>`
        list.lastElementChild.outerHTML = correctGuess;
    }

    function tooLowGuess(){
        console.log("too low was pressed")
        const list = document.querySelector("#List-of-guesses");
        const lastGuess = `<li>I guessed ${guess} - which was too low</li>`;
        list.lastElementChild.outerHTML = lastGuess;
        low = guess + 1;
        makeAGuess()
    }

    function tooHighGuess(){
        console.log("too high was pressed")
        const list = document.querySelector("#List-of-guesses");
        const lastGuess = `<li>I guessed ${guess} - which was too high</li>`;
        list.lastElementChild.outerHTML = lastGuess;
        end = guess - 1
        makeAGuess()
    }

