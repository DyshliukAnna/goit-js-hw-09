
const refs = {
startButton: document.querySelector("button[data-start]"),
stopButton: document.querySelector("button[data-stop]"),
};


const PROMPT_DELAY = 1000;
let timerId = null;

refs.startButton.addEventListener("click", onStartButtonClick);
refs.stopButton.addEventListener("click", onStopButtonClick);


function onStartButtonClick() {
    refs.startButton.disabled = true;
    refs.stopButton.disabled = false;
    timerId = setInterval(setColor, 1000);
    
function setColor() {
    document.body.style.backgroundColor = getRandomHexColor() ;
}
}

function onStopButtonClick() {
    refs.startButton.disabled = false;
    refs.stopButton.disabled = true;
    clearTimeout(timerId)
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}





// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const bgdColorBtnStart = document.querySelector('button[data-start]');
// const bgdColorBtnStop = document.querySelector('button[data-stop]');

// bgdColorBtnStart.addEventListener('click', onStartBtnClick);
// bgdColorBtnStop.addEventListener('click', onStopBtnClick);

// let timerId = null;

// function onStartBtnClick() {
//   bgdColorBtnStart.disabled = true;
//   bgdColorBtnStop.disabled = false;
//   timerId = setInterval(setColor, 1000);
// }

// function setColor() {
// //   const colorValue = getRandomHexColor();
//   //   console.log(`Color = `, colorValue);
//   document.body.style.backgroundColor = getRandomHexColor();
// }

// function onStopBtnClick() {
//   bgdColorBtnStart.disabled = false;
//   bgdColorBtnStop.disabled = true;
//   clearInterval(timerId);
// }






// const PROMPT_DELAY = 3000;
// const MAX_PROMPT_ATTEMPTS = 3;
// let timeoutId = null;

// let promtCounter = 0;


// clearTimeout(timeoutId);



// setInterval((getRandomHexColor) => {
//     if (promtCounter === MAX_PROMPT_ATTEMPTS) {
//         console.log(); ("нужно остановить интервал")
//         return
//     }
//     console.log("Постыйна змына кольорsd");
//     promtCounter += 1;
// }, delay);


// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
// }