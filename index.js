var timeoutId = 0;

function timer(){
    var currentTime = document.getElementsByClassName("time")[0].innerHTML; // 00:00:00
    console.log(currentTime);
    var hour = parseInt(currentTime.split(":")[0]);
    var min = parseInt(currentTime.split(":")[1]);
    var sec = parseInt(currentTime.split(":")[2]);

    currentTime = hour*3600 + min*60 + sec;
    currentTime++;
    hour = Math.floor(currentTime/(60*60));
    min = Math.floor(currentTime/60)%60;
    sec = currentTime%60;

    currentTime = hour.toString().padStart(2, '0').concat(":").concat(min.toString().padStart(2, '0').concat(":").concat(sec.toString().padStart(2, '0')));
    document.getElementsByClassName("time")[0].innerHTML = currentTime;

    timeoutId = setTimeout(timer, 1000);
}

function stopTimer(){
    clearTimeout(timeoutId);
}

function resetTimer(){
    var currentTime = document.getElementsByClassName("time")[0].innerHTML;
    currentTime = "00:00:00";
    document.getElementsByClassName("time")[0].innerHTML = currentTime;
    clearTimeout(timeoutId);
}