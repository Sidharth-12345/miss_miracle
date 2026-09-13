```javascript
/* =====================================================
   PAGE 2 — PROPOSAL
===================================================== */


/* ==============================
   SETTINGS
============================== */

const CONFIG = {
    doorBuildTime: 8000,
    page3: "page3.html"
};


/* ==============================
   YOUR 10 IMAGES
============================== */

const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg",
    "images/image6.jpg",
    "images/image7.jpg",
    "images/image8.jpg",
    "images/image9.jpg",
    "images/image10.jpg"
];


/* ==============================
   WHAT I LIKE ABOUT HER

   Change these messages.
   One message belongs to each image.
============================== */

const messages = [

    "I love the way your smile can make an ordinary moment feel special.",

    "I love how naturally beautiful you are, without even trying.",

    "I love the way you carry yourself with so much confidence and grace.",

    "I love your eyes — there is something about them that I can never ignore.",

    "I love your kindness and the way you make people around you feel comfortable.",

    "I love the little things about you that you probably don't even notice.",

    "I love how you can make me smile just by being yourself.",

    "I love your personality — there is something genuinely special about you.",

    "I love every small memory connected with you.",

    "And most of all... I love you for being exactly who you are."

];


/* ==============================
   ELEMENTS
============================== */

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


/* ==============================
   CREATE TEXT ELEMENT
============================== */

const memoryText =
    document.createElement("div");

memoryText.className =
    "memory-text";

memoryViewer.appendChild(memoryText);


/* ==============================
   CREATE NEXT ARROW
============================== */

const nextArrow =
    document.createElement("button");

nextArrow.className =
    "next-arrow";

nextArrow.innerHTML =
    "→";

nextArrow.setAttribute(
    "aria-label",
    "Next memory"
);

memoryViewer.appendChild(nextArrow);


/* ==============================
   STATE
============================== */

let doorBuilding = false;

let doorUnlocked = false;

let currentImage = 0;

let isChangingImage = false;


/* ==============================
   START DOOR
============================== */

constructionBox.addEventListener(
    "click",
    startDoorConstruction
);


function startDoorConstruction() {

    if (doorBuilding) {
        return;
    }

    doorBuilding = true;

    constructionBox.style.pointerEvents =
        "none";

    constructionBox.style.animation =
        "constructBox 8s ease forwards";


    setTimeout(() => {

        constructionBox.style.display =
            "none";

        doorScene.classList.add("show");


        setTimeout(() => {

            lockMessage.classList.add("show");

        }, 1200);

    }, CONFIG.doorBuildTime);
}


/* ==============================
   OPEN DOOR
============================== */

lock.addEventListener(
    "click",
    unlockDoor
);


function unlockDoor() {

    if (doorUnlocked) {
        return;
    }

    doorUnlocked = true;

    lockMessage.classList.remove(
        "show"
    );

    door.classList.add("open");


    setTimeout(() => {

        startMemories();

    }, 1800);
}


/* ==============================
   START MEMORIES
============================== */

function startMemories() {

    doorScene.style.display =
        "none";

    memoryViewer.classList.add(
        "active"
    );

    currentImage = 0;

    showImage(currentImage);
}


/* ==============================
   SHOW IMAGE
============================== */

function showImage(index) {

    if (index >= images.length) {

        goToPage3();

        return;
    }

    isChangingImage = false;


    /* Counter */

    memoryNumber.textContent =
        `MEMORY ${String(index + 1).padStart(2, "0")} / 10`;


    /* Reset */

    memoryImage.classList.remove(
        "show"
    );

    memoryImage.classList.remove(
        "break"
    );

    memoryText.classList.remove(
        "show"
    );


    /* Change image */

    memoryImage.src =
        images[index];


    /* Change text */

    memoryText.textContent =
        messages[index];


    /* Wait for image */

    memoryImage.onload = () => {

        setTimeout(() => {

            memoryImage.classList.add(
                "show"
            );

            memoryText.classList.add(
                "show"
            );

        }, 100);
    };


    /* Missing image */

    memoryImage.onerror = () => {

        console.warn(
            "Could not load:",
            images[index]
        );

        memoryText.textContent =
            messages[index];

        memoryImage.classList.add(
            "show"
        );

        memoryText.classList.add(
            "show"
        );
    };
}


/* ==============================
   NEXT ARROW
============================== */

nextArrow.addEventListener(
    "click",
    nextMemory
);


function nextMemory() {

    if (isChangingImage) {
        return;
    }

    isChangingImage = true;


    /*
       First image breaks apart.
    */

    memoryImage.classList.remove(
        "show"
    );

    memoryImage.classList.add(
        "break"
    );

    memoryText.classList.remove(
        "show"
    );


    /*
       Wait for breaking animation.
    */

    setTimeout(() => {

        currentImage++;

        if (
            currentImage >=
            images.length
        ) {

            goToPage3();

            return;
        }

        showImage(currentImage);

    }, 1000);
}


/* ==============================
   KEYBOARD SUPPORT
============================== */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "ArrowRight" &&
            memoryViewer.classList.contains("active")
        ) {

            nextMemory();
        }

    }
);


/* ==============================
   GO TO PAGE 3
============================== */

function goToPage3() {

    memoryText.classList.remove(
        "show"
    );

    nextArrow.style.display =
        "none";


    setTimeout(() => {

        window.location.href =
            CONFIG.page3;

    }, 500);
}
```
