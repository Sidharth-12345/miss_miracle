/* =====================================================
   PAGE 2 — COMPLETE JAVASCRIPT
===================================================== */


/* ==============================
   SETTINGS
============================== */

const CONFIG = {
    doorBuildTime: 8000,
    page3: "page3.html"
};


/* ==============================
   YOUR 09 IMAGES
============================== */

const images = [
    "WhatsApp Unknown 2026-09-12 at 3.29.45 AM/first.jpeg",
    "WhatsApp Unknown 2026-09-12 at 3.29.45 AM/second.jpeg",
    "WhatsApp Unknown 2026-09-12 at 3.29.45 AM/third.jpeg",
    "WhatsApp Unknown 2026-09-12 at 3.29.45 AM/fourth.jpeg",
    "WhatsApp Unknown 2026-09-12 at 3.29.45 AM/fifth.jpeg",
    //"WhatsApp Unknown 2026-09-12 at 3.29.45 AM/Sixth.jpeg",
    "WhatsApp Unknown 2026-09-12 at 3.29.45 AM/Seventh.jpeg",
    "WhatsApp Unknown 2026-09-12 at 3.29.45 AM/Eighth.jpeg",
    "WhatsApp Unknown 2026-09-12 at 3.29.45 AM/Ninth.jpeg",
    "WhatsApp Unknown 2026-09-12 at 3.29.45 AM/tenth.jpeg"
];


/* =====================================================
   WHAT I LIKE ABOUT HER
   Change these whenever you want
===================================================== */

const messages = [

    "The Smile Which Shines The Morning.",

    "The Face Which Outshines The Night.",

    "The Beauty Which Turns The World To Heaven.",

    "The Potential Eyes Lanterns The Darkness.",

    "Graphite Blooms Into Quiet Elegance.",

    "Mirror Too Shy To Admit Your Beauty",

    "Moons Beneath Lashes",

    "Beauty Slays From Every Thread.",

    "You are the poem for which the poetry invented."

];


/* =====================================================
   GET HTML ELEMENTS
===================================================== */

const constructionBox =
    document.getElementById("constructionBox");

const doorScene =
    document.getElementById("doorScene");

const door =
    document.getElementById("door");

const lock =
    document.getElementById("lock");

const lockMessage =
    document.getElementById("lockMessage");

const memoryViewer =
    document.getElementById("memoryViewer");

const memoryImage =
    document.getElementById("memoryImage");

const memoryNumber =
    document.getElementById("memoryNumber");


/* =====================================================
   CHECK ELEMENTS
===================================================== */

console.log("Page 2 JavaScript loaded");

console.log("Construction box:", constructionBox);
console.log("Door:", door);
console.log("Lock:", lock);


/* =====================================================
   CREATE MEMORY TEXT
===================================================== */

const memoryText =
    document.createElement("div");

memoryText.className =
    "memory-text";

memoryViewer.appendChild(memoryText);


/* =====================================================
   CREATE NEXT ARROW
===================================================== */

const nextArrow =
    document.createElement("button");

nextArrow.className =
    "next-arrow";

nextArrow.innerHTML = "→";

nextArrow.setAttribute(
    "aria-label",
    "Next memory"
);

memoryViewer.appendChild(nextArrow);


/* =====================================================
   VARIABLES
===================================================== */

let doorBuilding = false;

let doorUnlocked = false;

let currentImage = 0;

let isChangingImage = false;


/* =====================================================
   CLICK THE SECRET ACCESS BOX
===================================================== */

constructionBox.addEventListener(
    "click",
    function () {

        console.log("SECRET ACCESS CLICKED");

        if (doorBuilding) {
            return;
        }

        doorBuilding = true;


        /* Disable clicking again */

        constructionBox.style.pointerEvents =
            "none";


        /* Start 8 second animation */

        constructionBox.style.animation =
            "constructBox 8s ease forwards";


        /* Wait 8 seconds */

        setTimeout(function () {

            console.log("8 seconds complete");


            /* Hide construction box */

            constructionBox.style.display =
                "none";


            /* Show wooden door */

            doorScene.classList.add("show");


            /*
                Show lock message after
                door has appeared.
            */

            setTimeout(function () {

                lockMessage.classList.add("show");

            }, 1200);


        }, 4000);

    }
);


/* =====================================================
   CLICK LOCK
===================================================== */

lock.addEventListener(
    "click",
    function () {

        console.log("LOCK CLICKED");

        if (doorUnlocked) {
            return;
        }

        doorUnlocked = true;


        /* Hide instruction */

        lockMessage.classList.remove(
            "show"
        );


        /* Open door */

        door.classList.add("open");


        /*
            Wait for door opening
            animation.
        */

        setTimeout(function () {

            startMemories();

        }, 1800);

    }
);


/* =====================================================
   START IMAGE SECTION
===================================================== */

function startMemories() {

    console.log("Starting memories");

    /*
        Hide door completely
    */

    doorScene.style.display =
        "none";


    /*
        Show image viewer
    */

    memoryViewer.classList.add(
        "active"
    );


    /*
        Start from image 1
    */

    currentImage = 0;


    /*
        Show first image
    */

    showImage(currentImage);
}


/* =====================================================
   SHOW IMAGE
===================================================== */

function showImage(index) {

    console.log(
        "Showing image:",
        index + 1
    );


    if (index >= images.length) {

        goToPage3();

        return;
    }


    isChangingImage = false;


    /* ==============================
       COUNTER
    ============================== */


    /* ==============================
       RESET IMAGE
    ============================== */

    memoryImage.classList.remove(
        "show"
    );

    memoryImage.classList.remove(
        "break"
    );


    /* ==============================
       RESET TEXT
    ============================== */

    memoryText.classList.remove(
        "show"
    );


    /* ==============================
       SET IMAGE
    ============================== */

    memoryImage.src =
        images[index];


    /* ==============================
       SET MESSAGE
    ============================== */

    memoryText.textContent =
        messages[index];


    /* ==============================
       WHEN IMAGE LOADS
    ============================== */

    memoryImage.onload = function () {

        console.log(
            "Loaded:",
            images[index]
        );


        setTimeout(function () {

            memoryImage.classList.add(
                "show"
            );

            memoryText.classList.add(
                "show"
            );

        }, 100);

    };


    /* ==============================
       IF IMAGE DOESN'T LOAD
    ============================== */

    memoryImage.onerror = function () {

        console.error(
            "Could not load:",
            images[index]
        );


        /*
            Still show message
            so the sequence doesn't break.
        */

        memoryText.classList.add(
            "show"
        );

    };
}


/* =====================================================
   NEXT ARROW
===================================================== */

nextArrow.addEventListener(
    "click",
    function () {

        console.log("NEXT CLICKED");

        nextMemory();

    }
);


/* =====================================================
   NEXT MEMORY
===================================================== */

function nextMemory() {

    if (isChangingImage) {
        return;
    }

    isChangingImage = true;


    /*
        Break current image
    */

    memoryImage.classList.remove(
        "show"
    );

    memoryImage.classList.add(
        "break"
    );


    /*
        Hide current text
    */

    memoryText.classList.remove(
        "show"
    );


    /*
        Wait for breaking effect
    */

    setTimeout(function () {

        currentImage++;


        /*
            After image 10
        */

        if (
            currentImage >=
            images.length
        ) {

            goToPage3();

            return;
        }


        /*
            Show next image
        */

        showImage(currentImage);

    }, 1000);
}


/* =====================================================
   KEYBOARD ARROW SUPPORT
===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "ArrowRight" &&
            memoryViewer.classList.contains("active")
        ) {

            nextMemory();

        }

    }
);


/* =====================================================
   GO TO PAGE 3
===================================================== */

function goToPage3() {

    console.log(
        "All 10 memories completed"
    );


    memoryText.classList.remove(
        "show"
    );


    nextArrow.style.display =
        "none";


    setTimeout(function () {

        window.location.href =
            "page4.html";

    }, 500);
}