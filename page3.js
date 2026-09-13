/* =====================================
   PAGE 3 - ROYAL LETTERS
===================================== */


/* -------------------------------------
   OPEN / CLOSE LETTER
------------------------------------- */

function openLetter(letter) {

    // If another letter is open, close it
    document.querySelectorAll(".royal-letter").forEach(function(otherLetter) {

        if (otherLetter !== letter) {
            otherLetter.classList.remove("open");
        }

    });

    // Toggle selected letter
    letter.classList.toggle("open");
}


/* -------------------------------------
   NEXT PAGE
------------------------------------- */

function goNext() {

    // Change this to your actual Page 4 filename
    window.location.href = "page2.html";

}


/* -------------------------------------
   BACKGROUND PARTICLES
------------------------------------- */

const particleContainer =
    document.querySelector(".particles");

function createParticle() {

    const particle =
        document.createElement("span");

    particle.innerHTML =
        Math.random() > 0.5 ? "✦" : "·";

    particle.style.position = "fixed";

    particle.style.left =
        Math.random() * 100 + "vw";

    particle.style.bottom = "-20px";

    particle.style.color =
        "rgba(255,255,255,0.15)";

    particle.style.fontSize =
        (Math.random() * 8 + 6) + "px";

    particle.style.pointerEvents = "none";

    particle.style.zIndex = "-1";

    particleContainer.appendChild(particle);


    const duration =
        Math.random() * 6000 + 5000;


    particle.animate(

        [
            {
                transform: "translateY(0) rotate(0deg)",
                opacity: 0
            },

            {
                opacity: 1
            },

            {
                transform:
                    `translateY(-110vh) rotate(180deg)`,
                opacity: 0
            }
        ],

        {
            duration: duration,
            easing: "linear"
        }

    );


    setTimeout(function() {

        particle.remove();

    }, duration);

}


/* Create particles continuously */

setInterval(createParticle, 700);


/* Initial particles */

for (let i = 0; i < 8; i++) {

    setTimeout(
        createParticle,
        i * 300
    );

}