const year = new Date().getFullYear()
const day = new Date().getDay()
const month = new Date().getMonth()
let christmas = new Date(month == 11 && day >= 25 ? year + 1 : year, 11, 25).getTime()

function convertMS( milliseconds ) {
    var day, hour, minute, seconds;
    seconds = Math.floor(milliseconds / 1000);
    minute = Math.floor(seconds / 60);
    seconds = seconds % 60;
    hour = Math.floor(minute / 60);
    minute = minute % 60;
    day = Math.floor(hour / 24);
    hour = hour % 24;
    return {
        day: day,
        hour: hour,
        minute: minute,
        seconds: seconds
    };
}
  console.log(convertMS(christmas - Date.now()))
  document.addEventListener("DOMContentLoaded", function(event) {
    const main = document.getElementById('time')
    
    function writeTime() {
        let dur = christmas - Date.now()
        if(dur > 0) {
        let time = convertMS(dur)
        main.innerText = `${time.day}days ${time.hour}hrs ${time.minute}mins ${time.seconds}secs`
        fitText(main, 1);
    } else {
        main.innerText = "Merry Christmas"
    }
    }
    setInterval(writeTime, 100)
})