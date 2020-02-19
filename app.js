const time = document.getElementById('time');
const date = document.getElementById('date');
const weekday = document.getElementById('weekday');
const greeting = document.getElementById('greetings');

const today = new Date();
const todayDate = new Date();
const weekdays = ["Sun","Mon","Tue","Wen","Thu","Fri","Sat"];


function showTime () {
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    time.innerHTML = `${addZeros(hour)}:${addZeros(minutes)}:${addZeros(seconds)}`;
}

function showDate () {
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