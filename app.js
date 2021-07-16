var min = 0;
var sec = 0;
var ms = 0;
var mintues = document.getElementById("min");
var seconds = document.getElementById("sec");
var milisecs = document.getElementById("ms");
var interval;

function timer(){
    ms++
    milisecs.innerHTML = ms;
    if(ms==100){
        sec++
        seconds.innerHTML = sec;
        ms = 0
    }
    else if(sec ==60){
        min++
        mintues.innerHTML = min;
        sec = 0

    }
}

function start(){

    interval = setInterval(timer,10)

    var startBtn = document.getElementById("start")
    startBtn.className += " disabled"

}


function pause(){
    clearInterval(interval)
    var startBtn = document.getElementById("start")
    startBtn.className = "btn btn-outline-info"
}

function reset(){

    min = 00;
    sec = 00;
    ms =  00;
    mintues.innerHTML = min;
    seconds.innerHTML = sec;
    milisecs.innerHTML = ms;
    pause()

}