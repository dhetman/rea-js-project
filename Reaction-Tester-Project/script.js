bestTime = 0;

function getRandomColor(){
    var letters = "0123456789ABCDEF".split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function makeShapeAppear(){
    var top = Math.random() * 150;
    var left = Math.random() * 1100;
    var width = (Math.random() * 200) + 100;

    if (Math.random() > 0.7 && Math.random() < 0.9) {
        document.getElementById("naughty").style.display = "block";
    }else {
        if (Math.random() > 0.9) {
            document.getElementById("shape").style.borderRadius = "50%";
        } else {
            document.getElementById("shape").style.borderRadius = "0";
        }

        document.getElementById("shape").style.backgroundColor = getRandomColor();
        document.getElementById("shape").style.width = width + "px";
        document.getElementById("shape").style.height = width + "px";
        document.getElementById("shape").style.top = top + "px";
        document.getElementById("shape").style.left = left + "px";
        document.getElementById("shape").style.display = "block";
    }
}

function appearAfterDelay(){
    setTimeout(makeShapeAppear, Math.random() * 500);
}

function resetTime(){
    bestTime = 0;
    document.getElementById("timeTaken").innerHTML = '0s';
    document.getElementById("timeBest").innerHTML = '0s';
}

function startGame(){
    appearAfterDelay();
    window.start = new Date().getTime();
}

document.getElementById("shape").onclick = function(){
    document.getElementById("shape").style.display = "none";

    var end = new Date().getTime();

    var timeTaken = (end - window.start) / 1000;

    document.getElementById("timeTaken").innerHTML = timeTaken + "s";

    if (bestTime == 0) {
        bestTime = timeTaken;
    }

    if (timeTaken >= bestTime) {
        document.getElementById("timeBest").innerHTML = bestTime + "s";
    } else {
        bestTime = timeTaken;
        document.getElementById("timeBest").innerHTML = bestTime + "s";
    }

    //window.timeBest = (end - start) / 1000;
    //document.getElementById("timeBest").innerHTML = timeBest + "s";

}
document.getElementById("naughty").onclick = function(){
    document.getElementById("naughty").style.display = "none";

    var end = new Date().getTime();

    var timeTaken = (end - window.start) / 1000;

    document.getElementById("timeTaken").innerHTML = timeTaken + "s";

    if (bestTime == 0) {
        bestTime = timeTaken;
    }

    if (timeTaken >= bestTime) {
        document.getElementById("timeBest").innerHTML = bestTime + "s";
    } else {
        bestTime = timeTaken;
        document.getElementById("timeBest").innerHTML = bestTime + "s";
    }

    //window.timeBest = (end - start) / 1000;
    //document.getElementById("timeBest").innerHTML = timeBest + "s";

}
