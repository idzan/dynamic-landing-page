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

function setBg() {
    let currentTime = new Date();
    let currentHours = currentTime.getHours();

    if (currentHours < 11 && currentHours > 7) {
        document.body.style.background = "url('../img/morning.jpg')";
    } else if (currentHours < 17 && currentHours > 11) {
        document.body.style.background = "url('../img/day.jpg')";
    } else if (currentHours < 20 && currentHours > 17) {
        document.body.style.background = "url('../img/afternoon.jpg')";
    } else {
        document.body.style.background = "url('../img/night.jpg')";
        document.body.style.color = "white";
    }
}

showDate();
showTime();
setBg();