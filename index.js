document.addEventListener("DOMContentLoaded", () => {

const loader = document.getElementById("loader");
const fill = document.querySelector(".loading-fill");
const percent = document.getElementById("percentage");

const heroBtn = document.querySelector(".hero-btn");
const hero = document.querySelector(".hero");
const journey = document.getElementById("journeyPage");
const closeBtn = document.querySelector(".close-btn");

const clickSound = new Audio("music/click.mp3");

/* LOADER */
let p = 0;

const load = setInterval(() => {
    p++;
    fill.style.width = p + "%";
    percent.textContent = p + "%";

    if(p >= 100){
        clearInterval(load);

        setTimeout(() => {
            loader.style.opacity = "0";

            setTimeout(() => {
                loader.style.display = "none";
                document.body.style.overflow = "hidden";
            }, 600);

        }, 300);
    }

}, 20);

/* OPEN JOURNEY */
heroBtn.addEventListener("click", () => {

    clickSound.currentTime = 0;
    clickSound.play().catch(()=>{});

    hero.style.opacity = "0";

    setTimeout(() => {
        hero.style.display = "none";
        journey.classList.remove("hidden");
    }, 500);
});
heroBtn.addEventListener("click", () => {

    clickSound.currentTime = 0;
    clickSound.play().catch(()=>{});

    hero.style.opacity = "0";

    setTimeout(() => {

        hero.style.display = "none";

        journey.classList.remove("hidden");

        // CLEAN RESET ONLY (NO ANIMATION RESET MESS)
        journey.style.opacity = "0";
        journey.style.transform = "translateY(20px)";

        requestAnimationFrame(() => {
            journey.style.transition = "0.6s ease";
            journey.style.opacity = "1";
            journey.style.transform = "translateY(0)";
        });

    }, 400);
});
/* CLOSE JOURNEY */
closeBtn.addEventListener("click", () => {

    journey.style.opacity = "0";
    journey.style.transform = "translateY(20px)";

    setTimeout(() => {
        journey.classList.add("hidden");

        hero.style.display = "flex";

        hero.style.opacity = "0";
        hero.style.transform = "scale(1.05)";

        setTimeout(() => {
            hero.style.transition = "0.6s ease";
            hero.style.opacity = "1";
            hero.style.transform = "scale(1)";
        }, 50);

    }, 400);
});

});function showHero() {

    journey.style.opacity = "0";
    journey.style.transform = "translateY(20px)";

    setTimeout(() => {
        journey.classList.add("hidden");

        hero.style.display = "flex";

        // IMPORTANT RESET (fix blank bug)
        hero.style.opacity = "0";
        hero.style.transform = "scale(1.05)";

        setTimeout(() => {
            hero.style.transition = "0.6s ease";
            hero.style.opacity = "1";
            hero.style.transform = "scale(1)";
        }, 50);

    }, 400);
}

function showJourney() {

    hero.style.display = "none";

    journey.classList.remove("hidden");

    // IMPORTANT RESET (fix blank bug)
    journey.style.opacity = "0";
    journey.style.transform = "translateY(20px)";

    setTimeout(() => {
        journey.style.transition = "0.6s ease";
        journey.style.opacity = "1";
        journey.style.transform = "translateY(0)";
    }, 50);
}
function resetJourney() {
    journey.style.transition = "none";
    journey.style.opacity = "0";
    journey.style.transform = "translateY(20px)";

   
}