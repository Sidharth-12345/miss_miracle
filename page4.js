/* =========================================================
   PAGE 4 — GAME LOGIC
   ========================================================= */


/* =========================================================
   EDIT YOUR MORAL HERE
   ========================================================= */

const YOUR_MORAL = `
Life is also a gamble Madam! I Am really liking you and i am willing and ready to gamble on you.
Just waiting for you. I Dont think this much is enough to win your trust. But yes i think a man like me 
is worth trusting.  You can gamble on me too. HOPE YOU LIKE IT.
`;


/* =========================================================
   LOADING SCREEN
   ========================================================= */

const loadingPercent =
    document.getElementById("loadingPercent");

const loadingFill =
    document.getElementById("loadingFill");

const loadingMessage =
    document.getElementById("loadingMessage");

const loadingScreen =
    document.getElementById("loadingScreen");

const game =
    document.getElementById("game");


const loadingMessages = [

    "Initializing game engine...",
    "Loading virtual vault...",
    "Shuffling dragon cards...",
    "Preparing royal deck...",
    "Calculating probability...",
    "Encrypting game session...",
    "Synchronizing player...",
    "Finalizing experience..."

];


let loadingValue = 1;

const loadingInterval =
    setInterval(() => {

        loadingValue++;

        loadingPercent.textContent =
            loadingValue;

        loadingFill.style.width =
            loadingValue + "%";


        if (
            loadingValue %
            Math.floor(100 / loadingMessages.length)
            === 0
        ) {

            const index =
                Math.floor(
                    (loadingValue / 100) *
                    loadingMessages.length
                );

            loadingMessage.textContent =
                loadingMessages[
                    Math.min(
                        index,
                        loadingMessages.length - 1
                    )
                ];

        }


        if (loadingValue >= 100) {

            clearInterval(loadingInterval);

            setTimeout(() => {

                loadingScreen.classList.add("hide");

                game.classList.add("show");

            }, 300);

        }

    }, 40);


/* =========================================================
   ELEMENTS
   ========================================================= */

const gambleButton =
    document.getElementById("gambleButton");

const revealButton =
    document.getElementById("revealButton");

const coinAmount =
    document.getElementById("coinAmount");

const movingCoins =
    document.getElementById("movingCoins");

const kingCard =
    document.getElementById("kingCardContainer");

const queenCard =
    document.getElementById("queenCardContainer");

const moralBox =
    document.getElementById("moralBox");

const moralText =
    document.getElementById("moralText");

const nextButton =
    document.getElementById("nextButton");

const instruction =
    document.getElementById("instruction");


/* =========================================================
   GAME VARIABLES
   ========================================================= */

let coins = 500;

let gameStarted = false;


/* =========================================================
   GAMBLE BUTTON
   ========================================================= */

gambleButton.addEventListener(
    "click",
    startGame
);


function startGame() {

    if (gameStarted) return;

    gameStarted = true;

    gambleButton.disabled = true;

    instruction.textContent =
        "TRANSFERRING STAKE...";


    /* ---------------------------------------------
       COINS → BOTTOM LEFT
       --------------------------------------------- */

    movingCoins.classList.remove("animate");

    void movingCoins.offsetWidth;

    movingCoins.classList.add("animate");


    /* Remove virtual stake */

    coins = 0;

    coinAmount.textContent = coins;


    /* ---------------------------------------------
       AFTER COIN ANIMATION
       --------------------------------------------- */

    setTimeout(() => {

        instruction.textContent =
            "SELECTING TWO CARDS...";


        /* Top card enters */

        kingCard.classList.add("active");


        /* Bottom card enters slightly later */

        setTimeout(() => {

            queenCard.classList.add("active");

        }, 350);


    }, 900);


    /* ---------------------------------------------
       SHOW REVEAL BUTTON
       --------------------------------------------- */

    setTimeout(() => {

        instruction.textContent =
            "TWO CARDS HAVE BEEN CHOSEN.";

        revealButton.classList.add("show");

    }, 1900);

}


/* =========================================================
   REVEAL
   ========================================================= */

revealButton.addEventListener(
    "click",
    revealCards
);


function revealCards() {

    revealButton.style.display =
        "none";


    instruction.textContent =
        "REVEALING ROYAL PAIR...";


    /* Flip cards */

    setTimeout(() => {

        const kingInner =
            kingCard.querySelector(".card-inner");

        const queenInner =
            queenCard.querySelector(".card-inner");


        kingInner.style.transform =
            "rotateY(180deg)";

        queenInner.style.transform =
            "rotateY(180deg)";


    }, 300);


    /* ---------------------------------------------
       WIN MESSAGE
       --------------------------------------------- */

    setTimeout(() => {

        instruction.textContent =
            "KING + QUEEN — PERFECT PAIR";


        createWinText();


    }, 1100);


    /* ---------------------------------------------
       1000 COINS RETURN
       --------------------------------------------- */

    setTimeout(() => {

        movingCoins.classList.remove("animate");

        void movingCoins.offsetWidth;

        movingCoins.style.top =
            "68vh";

        movingCoins.style.right =
            "50%";

        movingCoins.classList.add(
            "return-coins"
        );


        setTimeout(() => {

            movingCoins.classList.remove(
                "return-coins"
            );

            movingCoins.style.top =
                "105px";

            movingCoins.style.right =
                "105px";

            coins = 1000;

            coinAmount.textContent =
                coins;

            coinAmount.classList.add(
                "coin-win"
            );


            setTimeout(() => {

                coinAmount.classList.remove(
                    "coin-win"
                );

                showMoral();

            }, 700);

        }, 1400);

    }, 1500);

}


/* =========================================================
   1000 COIN FLOATING TEXT
   ========================================================= */

function createWinText() {

    const winText =
        document.createElement("div");

    winText.textContent =
        "+1000 COINS";

    winText.style.position =
        "fixed";

    winText.style.left =
        "50%";

    winText.style.top =
        "55%";

    winText.style.transform =
        "translate(-50%, -50%)";

    winText.style.zIndex =
        "500";

    winText.style.color =
        "#d7ad62";

    winText.style.fontFamily =
        "Consolas, monospace";

    winText.style.fontWeight =
        "700";

    winText.style.fontSize =
        "22px";

    winText.style.letterSpacing =
        "3px";

    winText.style.pointerEvents =
        "none";

    document.body.appendChild(
        winText
    );


    winText.animate(

        [
            {
                opacity: 0,
                transform:
                    "translate(-50%, 20px) scale(.7)"
            },

            {
                opacity: 1,
                transform:
                    "translate(-50%, -20px) scale(1.1)"
            },

            {
                opacity: 0,
                transform:
                    "translate(-50%, -100px) scale(1)"
            }
        ],

        {
            duration: 1800,
            easing: "cubic-bezier(.2,.8,.2,1)"
        }

    ).onfinish = () => {

        winText.remove();

    };

}


/* =========================================================
   RETURN COINS ANIMATION
   ========================================================= */

const coinStyle =
document.createElement("style");

coinStyle.textContent = `

.return-coins {

    opacity: 1 !important;

    animation:
        returnCoins
        1.4s
        cubic-bezier(.2,.8,.2,1)
        forwards !important;
}

@keyframes returnCoins {

    0% {

        opacity: 1;

        transform:
            translate(0,0)
            scale(1.4);

    }

    100% {

        opacity: 0;

        transform:
            translate(
                43vw,
                -65vh
            )
            scale(.5);

    }

}

.coin-win {

    animation:
        coinPulse
        .7s
        ease;
}

@keyframes coinPulse {

    0% {
        transform: scale(1);
    }

    40% {
        transform: scale(1.35);
    }

    100% {
        transform: scale(1);
    }

}

`;

document.head.appendChild(
    coinStyle
);


/* =========================================================
   MORAL MESSAGE
   ========================================================= */

function showMoral() {

    moralText.textContent =
        YOUR_MORAL.trim();


    setTimeout(() => {

        moralBox.classList.add(
            "show"
        );


        setTimeout(() => {

            nextButton.classList.add(
                "show"
            );

        }, 1000);

    }, 500);

}


/* =========================================================
   NEXT PAGE
   ========================================================= */

nextButton.addEventListener(
    "click",
    () => {

        /*
           CHANGE THIS FILE NAME
           TO YOUR ACTUAL PAGE 5 FILE.

           Example:
           page5.html
        */

        window.location.href =
            "final.html";

    }
);