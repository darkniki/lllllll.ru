import './styles/main.scss';

require('./index.html');
document.addEventListener('DOMContentLoaded', function() {
    const birthdayTime = document.querySelector('#birthdayTime');
    const countdownContainer = document.querySelector('#countdown');
    const daysCountdown = document.querySelector('#days');
    const hoursCountdown = document.querySelector('#hours');
    const minutesCountdown = document.querySelector('#minutes');
    const secondsCountdown = document.querySelector('#seconds');
    const currentTime = new Date();

    const yearOfTheEvent = currentTime.getFullYear();

    let eventDate = new Date(yearOfTheEvent, 10, 7);
    const isItNovember7th = currentTime.getMonth() === 10 &&
        currentTime.getDate() === 7;

    function countdown() {
        const now = new Date();

        if (now > eventDate) {
            eventDate = new Date(yearOfTheEvent + 1, 11, 7);
        } else if (now.getFullYear() === eventDate.getFullYear() + 1) {
            eventDate = new Date(now.getFullYear(), 11, 7);
        }

        const currentTime = now.getTime();
        const eventTime = eventDate.getTime();
        const remainingTime = eventTime - currentTime;

        let seconds = Math.floor(remainingTime / 1000);

        let minutes = Math.floor(seconds / 60);

        let hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        hours %= 24;
        minutes %= 60;
        seconds %= 60;

        if (isItNovember7th) {
            console.log('Happy birthday, Mikita!');
            countdownContainer.style.display = 'none';
            birthdayTime.style.display = 'block';
        } else {
            daysCountdown.textContent = days;
            hoursCountdown.textContent = hours;
            minutesCountdown.textContent = minutes;
            secondsCountdown.textContent = seconds;
            setTimeout(countdown, 1000);
        }
    }
    countdown();
});
