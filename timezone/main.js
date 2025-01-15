import micromodal from "https://cdn.skypack.dev/micromodal@0.4.6";


micromodal.init();
dayjs.extend(window.dayjs_plugin_utc)
dayjs.extend(window.dayjs_plugin_timezone)

const popularTimezones = [
    'Africa/Johannesburg',
    'America/New_York',     
    'America/Los_Angeles',  
    'America/Chicago',      
    'Europe/London',       
    'Europe/Paris',      
    'Europe/Berlin',      
    'Asia/Dubai',        
    'Asia/Singapore',      
    'Asia/Tokyo',        
    'Australia/Sydney',   
    'Pacific/Auckland',
];


const time = document.querySelector(".time")
const date = document.querySelector(".date")
const timezone = document.querySelector(".timezone")
const timeSelect = document.getElementById("timezone-select")

let interval;

popularTimezones.forEach((e)=>{
    timeSelect.add(new Option(e))
})

function renderTime(){
    timezone.textContent = dayjs.tz.guess()
    date.textContent = dayjs().format('dddd D MMMM, YYYY')
    interval = setInterval(function () {time.textContent = dayjs().format('HH:mm:ss');}, 1000);
}

function showModal(){
    micromodal.show('modal-1')   
}


document.querySelector('.timezone-btn').addEventListener("click", ()=>{
    showModal()
})

timeSelect.onchange=()=>{
  clearInterval(interval)
  timezone.textContent = timeSelect.value
  date.textContent = dayjs().tz(timeSelect.value).format('dddd D MMMM, YYYY')
  interval = interval = setInterval(function () {time.textContent = dayjs().tz(timeSelect.value).format('HH:mm:ss');}, 1000);
  micromodal.close('modal-1')   

}

renderTime()