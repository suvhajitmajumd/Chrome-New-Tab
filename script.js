/* 1. RANDOM WALLPAPER FROM LOCAL FOLDER */
const wallpapers = [
    'wallpapers/504458397_17889939891291569_4717418635984946107_n.jpg',
    'wallpapers/505118826_17890181190291569_6663745639440961458_n.jpg',
    'wallpapers/505788603_17889939783291569_3561812959331288301_n.jpg',
    'wallpapers/506370773_17889939792291569_4912634365500069314_n.jpg',
    'wallpapers/513973293_17890181130291569_8858756441915011664_n.jpg',
    'wallpapers/514462063_17889291681291569_7135212358806283329_n.jpg',
    'wallpapers/514473412_17889291723291569_8064567027805872822_n.jpg',
    'wallpapers/515721922_17889291663291569_8520236038577424393_n.jpg',
    'wallpapers/516251740_17889291654291569_6529768292202602152_n.jpg',
    'wallpapers/516714107_17889291690291569_1982679487014646553_n.jpg',
    'wallpapers/517398104_17889291753291569_3340517761773471805_n.jpg',
    'wallpapers/517402213_17889291738291569_8781764880854636126_n.jpg',
    'wallpapers/517985323_17889939876291569_3756432118917458910_n.jpg',
    'wallpapers/518275779_17889939942291569_3467721037647819077_n.jpg',
    'wallpapers/518453371_17889291645291569_8675162065539112170_n.jpg',
    'wallpapers/518637888_17890181214291569_3620170014605667577_n.jpg',
    'wallpapers/519441809_17889939846291569_6139989081808537065_n.jpg',
    'wallpapers/519679263_17890181148291569_5055630157446122572_n.jpg',
    'wallpapers/519801905_17890181160291569_2273089235662693487_n.jpg',
    'wallpapers/520176004_17889939963291569_3039861627625471660_n.jpg',
    'wallpapers/520293963_17890181100291569_6102644383338296606_n.jpg',
    'wallpapers/520418071_17889939828291569_5787583428191450985_n.jpg',
    'wallpapers/520429170_17889939762291569_7206599340169207406_n.jpg',
    'wallpapers/520515517_17889939909291569_717830191958627170_n.jpg',
    'wallpapers/521275649_17890181058291569_2185036782398368188_n.jpg',
    'wallpapers/522391371_17890181244291569_3717968443981585879_n.jpg',
    'wallpapers/dandadan-evil-eye-3840x2160-22717.jpg',
    'wallpapers/november-5k-outer-3840x2160-19789.jpg',
    'wallpapers/windows-11-dark-mode-abstract-background-black-background-3840x2160-8710.jpg',
    'wallpapers/wp1.jpg',
    'wallpapers/wp2.jpg',
    'wallpapers/wp3.jpg'
];

const randomWallpaper = wallpapers[Math.floor(Math.random() * wallpapers.length)];

// Try Chrome extension URL first, fallback to direct path
if (typeof chrome !== 'undefined' && chrome.runtime) {
    const wallpaperUrl = chrome.runtime.getURL(randomWallpaper);
    document.body.style.backgroundImage = `url("${wallpaperUrl}")`;
} else {
    // Fallback for testing outside extension
    document.body.style.backgroundImage = `url("${randomWallpaper}")`;
}

// Fallback background color if image fails
document.body.style.backgroundColor = '#2c3e50';
/* 2. DATE */
document.getElementById("date").textContent = new Date().toDateString();

/* 3. ANALOG CLOCK */
function updateClock() {
    const now = new Date();
    const hr = now.getHours();
    const min = now.getMinutes();

    // Math: (360 / 12) = 30 deg per hour | (360 / 60) = 6 deg per min
    document.getElementById("hour").style.transform = `translateX(-50%) rotate(${hr * 30 + min / 2}deg)`;
    document.getElementById("minute").style.transform = `translateX(-50%) rotate(${min * 6}deg)`;
}
setInterval(updateClock, 1000);
updateClock();

/* 4. SEARCH ENGINE LOGIC */
let engineURL = "https://duckduckgo.com/?q="; // Default

document.querySelectorAll(".engine").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".engine.active").classList.remove("active");
        btn.classList.add("active");
        engineURL = btn.dataset.url;
    });
});

document.getElementById("go").onclick = () => {
    const q = document.getElementById("query").value;
    if (q) window.location.href = engineURL + encodeURIComponent(q);
};

// Enter key support
document.getElementById("query").addEventListener("keypress", (e) => {
    if (e.key === "Enter") document.getElementById("go").click();
});

/* 5. WEATHER (OpenWeatherMap) */
// Note: Replace 'YOUR_API_KEY' with a real one from openweathermap.org
const API_KEY = 'ecacbed1d03d3141ee4e914c06c847e8'; 

navigator.geolocation.getCurrentPosition(pos => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&units=metric&appid=${API_KEY}`)
    .then(r => r.json())
    .then(d => {
        if(d.cod !== 200) return;
        document.getElementById("weather-desc").textContent = d.weather[0].description;
        document.getElementById("temp").textContent = Math.round(d.main.temp) + "°";
        document.getElementById("humidity").textContent = `Humidity ${d.main.humidity}%`;
        document.getElementById("humidity-fill").style.width = d.main.humidity + "%";
        document.getElementById("feels").textContent = `Feels ${Math.round(d.main.feels_like)}°C`;
        document.getElementById("location").textContent = d.name;
    }).catch(err => console.log("Weather error or missing API Key"));
});