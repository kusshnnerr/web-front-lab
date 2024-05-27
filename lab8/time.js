function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('header-time').innerHTML = currentTime;

    let seconds = today.getSeconds();
    document.getElementById('time').innerHTML = seconds;
    
    setTimeout(showTime, 1000);
}