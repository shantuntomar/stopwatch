var second = 00;
var tens = 00;

var appendTens = document.getElementById('tens');
var appSecond = document.getElementById('second');
var btnStart = document.getElementById('btn-start');
var btnStop = document.getElementById('btn-stop');
var btnReset = document.getElementById('btn-reset');
var interval;

function startTimer() {
    tens++;
    if(tens < 0) {
        appendTens.innerHTML = "0" + tens;
    }
    if(tens > 0) {
        appendTens.innerHTML = tens;
    }
    if(tens > 99) {
        second++;
        appSecond.innerHTML = "0" + second;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }
    if(second > 0) {
        appSecond.innerHTML = second;
    }
}

btnStart.onclick = function() {
    interval = setInterval(startTimer);
};

btnStop.onclick = function() {
    clearInterval(interval);
};

btnReset.onclick = function() {
    clearInterval(interval);
    tens = "00";
    second = "00";
    appSecond.innerHTML = second;
    appendTens.innerHTML = tens;
}





