const year = new Date().getFullYear()
const day = new Date().getDay()
const month = new Date().getMonth()
let christmas = new Date(year + 1, 1, 1).getTime()
let speed = 1
let angle = Math.floor(Math.random() * 361);
function convertMS(milliseconds) {
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
document.addEventListener("DOMContentLoaded", function (event) {
    const main = document.getElementById('time')

    function writeTime() {
        let dur = christmas - Date.now()
        if (dur > 0) {
            let time = convertMS(dur)
            main.innerText = `${time.day}days ${time.hour}hrs ${time.minute}mins ${time.seconds}secs`
            fitText(main, 1);
        } else {
            main.innerText = "Happy New Year"
        }
    }
    setInterval(writeTime, 10)
})

function move() {
    let height = window.innerHeight
    let width = window.innerWidth
    let bounce = document.getElementById('bounce')
    if(!bounce) return console.warn('The bounce object didn\'t exist when trying to move')
    let props = bounce.getBoundingClientRect()
    let x = false
    let y = false
    if (props.x <= 0) x = 'right'
    if (props.x + props.width >= width) x = 'left'
    if (props.y <= 0) x = 'top'
    if (props.x + props.height >= height) y = 'bottom'
}