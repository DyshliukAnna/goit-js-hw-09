import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const DELAY = 1000;

const refs = {
    startButton: document.querySelector("button[data-start]"),
    input: document.querySelector("#datetime-picker"),
    dateOut: document.querySelector('.value[data-days]'),
    hourOut: document.querySelector('.value[data-hours]'),
    minuteOut: document.querySelector('.value[data-minutes]'),
    secondOut: document.querySelector('.value[data-seconds]'),

  
}

refs.startButton.addEventListener("click", flatpickr);
// flatpickr();


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        // const currentDate = Date.now;
        // const pastOrFutureDate = selectedDates - currentDate;
        if ( selectedDates[0] < new Date()) {
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

