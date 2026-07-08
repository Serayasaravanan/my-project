// ===============================
// DevOps Dashboard Script
// ===============================

// Live Clock
function updateClock() {
    const now = new Date();

    const options = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric"
    };

    const date = now.toLocaleDateString("en-US", options);
    const time = now.toLocaleTimeString();

    const clock = document.getElementById("clock");

    if (clock) {
        clock.innerHTML = `${date}<br>${time}`;
    }
}

setInterval(updateClock, 1000);
updateClock();


// Animate Cards on Load
const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";

    setTimeout(() => {
        card.style.transition = "0.8s";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, index * 250);

});


// Animate Info Boxes
const boxes = document.querySelectorAll(".info-box");

boxes.forEach((box, index) => {

    box.style.opacity = "0";

    setTimeout(() => {

        box.style.transition = "0.8s";
        box.style.opacity = "1";

    }, 1200 + index * 200);

});


// Animate Statistics
const stats = document.querySelectorAll(".stat-card");

stats.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "scale(.8)";

    setTimeout(() => {

        card.style.transition = ".8s";
        card.style.opacity = "1";
        card.style.transform = "scale(1)";

    }, 1800 + index * 250);

});


// Pipeline Animation
const steps = document.querySelectorAll(".step");

let current = 0;

function highlightStep() {

    steps.forEach(step => {
        step.style.boxShadow = "";
    });

    steps[current].style.boxShadow = "0 0 20px lime";

    current++;

    if (current >= steps.length) {
        current = 0;
    }
}

setInterval(highlightStep, 1000);


// Status Text Animation
const status = document.querySelector(".status-right h3");

const messages = [
    "Application Running",
    "Docker Container Active",
    "Pipeline Successful",
    "Deployment Completed"
];

let msg = 0;

setInterval(() => {

    if (status) {
        status.innerHTML = messages[msg];
    }

    msg++;

    if (msg >= messages.length) {
        msg = 0;
    }

}, 3000);


// Smooth Scroll (Future Use)
document.querySelectorAll("a").forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        if (this.getAttribute("href").startsWith("#")) {

            e.preventDefault();

            document.querySelector(this.getAttribute("href"))
                .scrollIntoView({
                    behavior: "smooth"
                });

        }

    });

});

console.log("🚀 DevOps Dashboard Loaded Successfully");