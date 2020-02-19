const time = document.getElementById('time');
const date = document.getElementById('date');
const weekday = document.getElementById('weekday');
const greeting = document.getElementById('greetings');

const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function showTime () {
    let today = new Date();
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    time.innerHTML = `${addZeros(hour)}:${addZeros(minutes)}:${addZeros(seconds)}`;

    setTimeout(showTime, 1000);
}

function showDate () {
    let todayDate = new Date();
    
    let dates = todayDate.getDate();
    let month = todayDate.getMonth()+1;
    let year = todayDate.getFullYear();

    date.innerHTML = `${addZeros(dates)}.${addZeros(month)}.${year}.`;
    weekday.innerHTML = `${weekdays[todayDate.getDay()]}`;
}

function addZeros(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

showDate();
showTime();