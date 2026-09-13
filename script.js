/* =====================================================
   PROPOSAL PAGE 1
   Developer Heart Experience
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    // -----------------------------
    // ELEMENTS
    // -----------------------------

    const loadingScreen = document.getElementById("loadingScreen");
    const heartScreen = document.getElementById("heartScreen");

    const progressBar = document.getElementById("progressBar");
    const loadingPercentage = document.getElementById("loadingPercentage");
    const loadingMessage = document.getElementById("loadingMessage");
    const loadingStatus = document.getElementById("loadingStatus");

    const developerMessage =
        document.getElementById("developerMessage");

    const heartStage =
        document.getElementById("heartStage");

    const ladyMessage =
        document.getElementById("ladyMessage");

    const nextButton =
        document.getElementById("nextButton");

    const particleContainer =
        document.getElementById("particleContainer");


    // -----------------------------
    // LOADING MESSAGES
    // EDIT THESE
    // -----------------------------

    const loadingMessages = [
        "Loading developer...",
        "Importing feelings...",
        "Compiling memories...",
        "Initializing emotions...",
        "Processing beautiful thoughts...",
        "Encrypting developer feelings...",
        "Deploying something special...",
        "Finalizing the message..."
    ];


    const loadingStatuses = [
        "Preparing something special...",
        "Searching through countless feelings...",
        "Compiling beautiful memories...",
        "No bugs found in this heart...",
        "Checking compatibility...",
        "Heart connection established...",
        "Hold on tighr...",
        "One final initialization..."
    ];


    // -----------------------------
    // LOADING TIME
    // 10 SECONDS
    // -----------------------------

    const loadingDuration = 8000;

    let startTime = performance.now();


    // -----------------------------
    // LOADING FUNCTION
    // -----------------------------

    function updateLoading(currentTime) {

        const elapsed = currentTime - startTime;

        let progress =
            Math.floor(
                (elapsed / loadingDuration) * 100
            );

        progress = Math.max(0, Math.min(100, progress));


        // Percentage

        loadingPercentage.textContent = progress;


        // Progress bar

        progressBar.style.width = progress + "%";


        // Loading message

        const messageIndex = Math.min(
            Math.floor(
                progress / (100 / loadingMessages.length)
            ),
            loadingMessages.length - 1
        );

        loadingMessage.textContent =
            loadingMessages[messageIndex];


        // Loading status

        const statusIndex = Math.min(
            Math.floor(
                progress / (100 / loadingStatuses.length)
            ),
            loadingStatuses.length - 1
        );

        loadingStatus.textContent =
            loadingStatuses[statusIndex];


        // Continue

        if (progress < 100) {

            requestAnimationFrame(updateLoading);

        } else {

            loadingPercentage.textContent = "100";

            progressBar.style.width = "100%";

            loadingMessage.textContent =
                "Developer initialization complete.";

            loadingStatus.textContent =
                "Launching something from the heart...";


            setTimeout(() => {
                startHeartScreen();
            }, 700);
        }
    }


    // -----------------------------
    // SWITCH TO HEART SCREEN
    // -----------------------------

    function startHeartScreen() {

        loadingScreen.classList.remove("active");

        setTimeout(() => {

            heartScreen.classList.add("active");

            startHeartAnimation();

        }, 500);
    }


    // -----------------------------
    // HEART EXPERIENCE
    // -----------------------------

    function startHeartAnimation() {

        // Title appears

        setTimeout(() => {

            developerMessage.classList.add("show");

        }, 500);


        // Start heart drawing

        setTimeout(() => {

            heartStage.classList.add("draw");

        }, 1200);


        // Heart has completed drawing
        // Start pumping

        setTimeout(() => {

            heartStage.classList.add("pump");

            startParticleSystem();

        }, 7200);


        // Show final message

        setTimeout(() => {

            ladyMessage.classList.add("show");

        }, 8500);


        // Activate button

        setTimeout(() => {

            nextButton.disabled = false;

            nextButton.classList.add("active");

        }, 9500);
    }


    // -----------------------------
    // PARTICLES
    // -----------------------------

    const particles = [
        "♥",
        "❤",
        "💗",
        "💕",
        "💖",
        "🌸",
        "🌹",
        "🌷",
        "✿"
    ];


    function createParticle() {

        const particle =
            document.createElement("div");

        particle.className = "particle";


        // Random emoji

        const emoji =
            particles[
                Math.floor(
                    Math.random() * particles.length
                )
            ];

        particle.textContent = emoji;


        // Random direction

        const x =
            Math.random() * 180 - 90;

        const y =
            -(Math.random() * 180 + 100);


        particle.style.setProperty(
            "--x",
            x + "px"
        );

        particle.style.setProperty(
            "--y",
            y + "px"
        );


        // Random size

        particle.style.fontSize =
            (14 + Math.random() * 14) + "px";


        particleContainer.appendChild(
            particle
        );


        // Remove after animation

        setTimeout(() => {

            particle.remove();

        }, 1000);
    }


    // -----------------------------
    // PARTICLE SYSTEM
    // -----------------------------

    let particleInterval = null;


    function startParticleSystem() {

        // First burst

        createParticle();
        createParticle();
        createParticle();


        // Then every second

        particleInterval =
            setInterval(() => {

                createParticle();
                createParticle();

                if (Math.random() > 0.4) {
                    createParticle();
                }

            }, 1000);
    }


    // -----------------------------
    // NEXT BUTTON
    // -----------------------------

    nextButton.addEventListener("click", () => {

        console.log(
            "Page 1 complete. Ready for Page 2."
        );


    

        window.location.href = "page3.html";



        nextButton.querySelector(
            ".button-text"
        ).textContent = "PAGE 2 READY";

    });


    // -----------------------------
    // START LOADING
    // -----------------------------

    requestAnimationFrame(updateLoading);

});