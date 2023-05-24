import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const DELAY = 1000;
let timeId = null;

const refs = {
    startButton: document.querySelector("button[data-start]"),
    input: document.querySelector("#datetime-picker"),
    dateOut: document.querySelector('.value[data-days]'),
    hourOut: document.querySelector('.value[data-hours]'),
    minuteOut: document.querySelector('.value[data-minutes]'),
    secondOut: document.querySelector('.value[data-seconds]'),

  
}
// flatpickr();


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        // const currentDate = Date.now;
        // const pastOrFutureDate = selectedDates - currentDate;
        if (selectedDates[0] < new Date()) {
            alert("Please choose a date in the future");
            return
        } else {
            refs.startButton.disabled = false;
            setInterval((convertMs) => {
                
            },DELAY)  
        }

  },
};

flatpickr(refs.input, options);
refs.startButton.disabled = true;


function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

refs.startButton.addEventListener('click', counter);

function counter() {
  const timeoutId = setInterval(() => {
    const ms = new Date(refs.input.value) - new Date();
    refs.startButton.disabled = true;;
    if (ms >= 0) {
      let convertTimeObject = convertMs(ms);
      refs.dateOut.textContent = addLeadingZero(convertTimeObject.days);
      refs.hourOut.textContent = addLeadingZero(convertTimeObject.hours);
      refs.minuteOut.textContent = addLeadingZero(convertTimeObject.minutes);
      refs.secondOut.textContent = addLeadingZero(convertTimeObject.seconds);
    } else {
      clearInterval(timeoutId);
    }
  }, 1000);
}
    

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

// const date = new Date;
// const timer = {
//     start() {
//         const startTime = Date.now();
//         setInterval(() => {
//             const currentTime = Date.now();
//             const deltaTime = currentTime - startTime;
//             const timeComponents = gettimeComponents(deltaTime);

//         }, 1000);
    
//     },
// };

// timer.start();

