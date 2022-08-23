import dataJson from  "./data.json" assert {type: "json"};

let daily = document.querySelector(".daily");
let weekly = document.querySelector(".weekly");
let monthly = document.querySelector(".monthly");

let toggleLinkDaily = document.getElementById("daily");
let toggleLinkWeekly = document.getElementById("weekly");
let toggleLinkMonthly = document.getElementById("monthly");

let hrs = document.querySelectorAll(".grid__card--hrs");
let previous = document.querySelectorAll(".grid__card--previous");


daily.addEventListener("click", () => {
    
    toggleLinkDaily.classList.add("active");
    toggleLinkWeekly.classList.remove("active");
    toggleLinkMonthly.classList.remove("active");

    for (let i = 0; i < 6; i++) {
        hrs[i].innerHTML = dataJson[i].timeframes.daily.current + "hrs";
        previous[i].innerHTML = "Yesterday - " + dataJson[i].timeframes.daily.previous + "hrs";
    }
});

weekly.addEventListener("click", () => {

    toggleLinkDaily.classList.remove("active");
    toggleLinkWeekly.classList.add("active");
    toggleLinkMonthly.classList.remove("active");

    for (let i = 0; i < 6; i++) {
        hrs[i].innerHTML = dataJson[i].timeframes.weekly.current + "hrs";
        previous[i].innerHTML = "Last Week - " + dataJson[i].timeframes.weekly.previous + "hrs";
    }
});

monthly.addEventListener("click", () => {

    toggleLinkDaily.classList.remove("active");
    toggleLinkWeekly.classList.remove("active");
    toggleLinkMonthly.classList.add("active");

    for (let i = 0; i < 6; i++) {
        hrs[i].innerHTML = dataJson[i].timeframes.monthly.current + "hrs";
        previous[i].innerHTML = "Last Month - " + dataJson[i].timeframes.monthly.previous + "hrs";
    }
});

