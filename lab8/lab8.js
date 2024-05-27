function showDate () {
    let currentDate = new Date();

    let ruDate = document.getElementById('ru-date');
    ruDate.innerHTML = 'Дата и время для русской локали: ' + currentDate.toLocaleString('ru-RU');

    let frDate = document.getElementById('fr-date');
    frDate.innerHTML = 'Дата и время для французской локали: ' + currentDate.toLocaleString('fr-FR');

    let arDate = document.getElementById('ar-date');
    arDate.innerHTML = 'Дата и время для арабской локали: ' + currentDate.toLocaleString('ar-AE');

    let krDate = document.getElementById('kr-date');
    krDate.innerHTML = 'Дата и время для локали Кореи: ' + currentDate.toLocaleString('ko-KR');

    let inDate = document.getElementById('in-date');
    inDate.innerHTML = 'Дата и время для локали Индии: ' + currentDate.toLocaleString('hi-IN');
}