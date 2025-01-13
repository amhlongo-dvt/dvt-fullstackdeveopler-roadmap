// const dayjs = require("dayjs");
dayjs.extend(window.dayjs_plugin_utc)
dayjs.extend(window.dayjs_plugin_timezone)

console.log("Hello from JavaScript!"); 

const time = document.querySelector(".time")
const date = document.querySelector(".date")
const timezone = document.querySelector(".timezone")

timezone.textContent = dayjs.tz.guess()
date.textContent = dayjs().format('dddd D MMMM, YYYY')
setInterval(function () {time.textContent = dayjs().format('HH:mm:ss');}, 1000);

