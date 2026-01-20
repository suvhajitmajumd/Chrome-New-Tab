/**
 * Chrome New Tab Dashboard
 * A beautiful, feature-rich Chrome extension for personalized new tab experience
 * 
 * Features:
 * - Dynamic wallpapers (32 beautiful backgrounds)
 * - Real-time analog clock with smooth animations
 * - Live weather widget with geolocation
 * - Multi-engine search (DuckDuckGo, Google, Bing, YouTube)
 * - Interactive calendar with month navigation
 * - Daily inspirational quotes
 * - AI quick access (ChatGPT, Gemini)
 * - App dock with popular web services
 * - Keyboard shortcuts and responsive design
 * 
 * @author Suvhajit Majumder
 * @version 1.0
 * @license MIT
 */

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
} else if (typeof browser !== 'undefined' && browser.runtime) {
    // Firefox WebExtensions API
    const wallpaperUrl = browser.runtime.getURL(randomWallpaper);
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
const API_KEY = 'ecacbed1d03d3141ee4e914c06c847e8'; //This API key Belongs To Dev.... Please Change The API key with your key

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

/* 6. DOCK FUNCTIONALITY */
document.querySelectorAll(".dock img").forEach(img => {
    img.addEventListener("click", () => {
        window.open(img.dataset.url, "_blank");
    });
});

/* 7. KEYBOARD SHORTCUTS */
document.addEventListener("keydown", (e) => {
    // Focus search with Ctrl+K or Cmd+K
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        document.getElementById("query").focus();
    }
    
    // Quick search engines with Alt+1,2,3,4
    if (e.altKey && e.key >= "1" && e.key <= "4") {
        e.preventDefault();
        const engines = document.querySelectorAll(".engine");
        const index = parseInt(e.key) - 1;
        if (engines[index]) {
            engines[index].click();
        }
    }
});

/* 8. SMOOTH SCROLLING FOR MOBILE */
if (window.innerWidth <= 800) {
    document.documentElement.style.scrollBehavior = "smooth";
}

/* 9. DYNAMIC GREETING */
function updateGreeting() {
    const hour = new Date().getHours();
    const greeting = hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";
    const h1 = document.querySelector(".text-container h1");
    if (h1) {
        h1.textContent = `${greeting}, Suvhajit Majumder`;
    }
}
updateGreeting();

/* 10. INTERACTIVE CALENDAR */
let currentDate = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function generateCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const today = new Date();
    
    document.getElementById("monthYear").textContent = `${monthNames[month]} ${year}`;
    
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    
    let calendarHTML = "";
    
    // Weekday headers
    weekdays.forEach(day => {
        calendarHTML += `<div class="calendar-weekday">${day}</div>`;
    });
    
    // Previous month's trailing days
    for (let i = firstDay - 1; i >= 0; i--) {
        calendarHTML += `<div class="calendar-day other-month">${daysInPrevMonth - i}</div>`;
    }
    
    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
        const isToday = year === today.getFullYear() && month === today.getMonth() && day === today.getDate();
        calendarHTML += `<div class="calendar-day ${isToday ? 'today' : ''}">${day}</div>`;
    }
    
    // Next month's leading days
    const totalCells = 42; // 6 rows × 7 days
    const usedCells = weekdays.length + firstDay + daysInMonth;
    for (let day = 1; usedCells + day - 1 < totalCells; day++) {
        calendarHTML += `<div class="calendar-day other-month">${day}</div>`;
    }
    
    document.getElementById("calendar").innerHTML = calendarHTML;
}

document.getElementById("prevMonth").onclick = () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    generateCalendar(currentDate);
};

document.getElementById("nextMonth").onclick = () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    generateCalendar(currentDate);
};

generateCalendar(currentDate);

/* 11. DAILY QUOTES */
const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
    { text: "Life is what happens to you while you're busy making other plans.", author: "John Lennon" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" }
];

function displayDailyQuote() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
    const quoteIndex = dayOfYear % quotes.length;
    const dailyQuote = quotes[quoteIndex];
    
    document.getElementById("quote").textContent = `"${dailyQuote.text}"`;
    document.getElementById("author").textContent = `- ${dailyQuote.author}`;
}

displayDailyQuote();

/* 12. PERFORMANCE & POLISH */
// Preload next wallpaper for smoother transitions
const nextWallpaper = wallpapers[(wallpapers.indexOf(randomWallpaper.split('/')[1]) + 1) % wallpapers.length];
const img = new Image();
if (typeof chrome !== 'undefined' && chrome.runtime) {
    img.src = chrome.runtime.getURL(nextWallpaper);
} else if (typeof browser !== 'undefined' && browser.runtime) {
    img.src = browser.runtime.getURL(nextWallpaper);
} else {
    img.src = nextWallpaper;
}

// Add subtle loading animation
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});
