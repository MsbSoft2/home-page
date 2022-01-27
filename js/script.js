
AOS.init();

// For Date Time
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
function TimeNow() {
    var d = new Date();
    var x = document.getElementById("time");
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    x.innerHTML = s + " : " + m + " : " + h;
}
TimeNow();
setInterval(() => {
    TimeNow();
}, 1000);
