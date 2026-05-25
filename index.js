document.addEventListener("DOMContentLoaded", () => {

    /* ELEMENTS */
    const loader = document.getElementById("loader");
    const fill = document.querySelector(".loading-fill");
    const percent = document.getElementById("percentage");

    const hero = document.querySelector(".hero");
    const journey = document.getElementById("journeyPage");
    const memories = document.getElementById("memoriesPage");

    const heroBtn = document.querySelector(".hero-btn");
    const closeBtn = document.querySelector(".close-btn");
    const memoryBtn = document.querySelector(".memory-btn");
    const backBtn = document.querySelector(".back-btn");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");




    document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
        lightbox.classList.remove("hidden");
        lightboxImg.src = img.src;
    });
});

lightbox.addEventListener("click", () => {
    lightbox.classList.add("hidden");
    lightboxImg.src = "";
});

    /* AUDIO */
    const clickSound = new Audio("music/click.mp3");

    /* ================= LOADER ================= */

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
                }, 600);

            }, 300);
        }

    }, 20);

    /* ================= OPEN JOURNEY ================= */

    heroBtn.addEventListener("click", () => {

        clickSound.currentTime = 0;
        clickSound.play().catch(()=>{});

        hero.style.opacity = "0";

        setTimeout(() => {

            hero.style.display = "none";

            journey.classList.remove("hidden");

            journey.style.opacity = "0";
            journey.style.transform = "translateY(30px)";

            requestAnimationFrame(() => {

                journey.style.transition = "0.6s ease";
                journey.style.opacity = "1";
                journey.style.transform = "translateY(0)";

            });

        }, 500);

    });

    /* ================= CLOSE JOURNEY ================= */

    closeBtn.addEventListener("click", () => {

        journey.style.opacity = "0";
        journey.style.transform = "translateY(20px)";

        setTimeout(() => {

            journey.classList.add("hidden");

            hero.style.display = "flex";

            hero.style.opacity = "0";

            requestAnimationFrame(() => {

                hero.style.transition = "0.6s ease";
                hero.style.opacity = "1";

            });

        }, 400);

    });

    /* ================= OPEN MEMORIES ================= */

    memoryBtn.addEventListener("click", () => {

        journey.classList.add("hidden");

        memories.classList.remove("hidden");

        memories.style.opacity = "0";

        requestAnimationFrame(() => {

            memories.style.transition = "0.6s ease";
            memories.style.opacity = "1";

        });

    });

    /* ================= BACK TO JOURNEY ================= */

    backBtn.addEventListener("click", () => {

        memories.style.opacity = "0";

        setTimeout(() => {

            memories.classList.add("hidden");

            journey.classList.remove("hidden");

            journey.style.opacity = "0";

            requestAnimationFrame(() => {

                journey.style.transition = "0.6s ease";
                journey.style.opacity = "1";

            });

        }, 400);

    });

});
