const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const age = document.getElementById('year');
const loading = document.getElementById('loading');
const currentYear = new Date().getFullYear() + 1;
const NadiaAge = 7;
const nadiaBirthday = new Date(`October 15 ${currentYear} 00:00:00`);

// set birthday Year
age.innerText = NadiaAge + 1 + "th ";

//update countdown time
function updateCountdown() {
    const currentTime = new Date();
    console.log(currentTime);
    const diff = nadiaBirthday - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}
//show spinner before countdown
setTimeout(() => {
    loading.remove();
    countdown.style.display = 'flex';
}, 1000)

//run every seconds
setInterval(updateCountdown, 1000);