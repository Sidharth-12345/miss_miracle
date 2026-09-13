// ==========================================
// FINAL PAGE - REVIEW SYSTEM
// ==========================================

let selectedRating = 0;


// ------------------------------------------
// STAR RATING
// ------------------------------------------

const stars = document.querySelectorAll(".star");
const ratingText = document.getElementById("ratingText");

const ratingMessages = {
    1: "1/5 — DAMN! ME!",
    2: "2/5 — no Way",
    3: "3/5 — Expected More ❤️",
    4: "4/5 — Expected!",
    5: "5/5 — Just As I Accepted ❤️"
};


stars.forEach(star => {

    star.addEventListener("click", () => {

        selectedRating = Number(star.dataset.value);

        stars.forEach(s => {

            const value = Number(s.dataset.value);

            if (value <= selectedRating) {
                s.classList.add("active");
            } else {
                s.classList.remove("active");
            }

        });

        ratingText.textContent = ratingMessages[selectedRating];

    });

});


// ------------------------------------------
// CHARACTER COUNTER
// ------------------------------------------

const reviewBox = document.getElementById("review");
const charCount = document.getElementById("charCount");

reviewBox.addEventListener("input", () => {

    charCount.textContent = reviewBox.value.length;

});


// ------------------------------------------
// SUBMIT REVIEW
// ------------------------------------------

const submitBtn = document.getElementById("submitBtn");
const statusMessage = document.getElementById("statusMessage");

submitBtn.addEventListener("click", () => {

    const reviewText = reviewBox.value.trim();

    // Check rating
    if (selectedRating === 0) {

        statusMessage.textContent =
            "ERROR: Please select a star rating.";

        statusMessage.style.color = "#ff5555";

        return;
    }


    // Check description
    if (reviewText === "") {

        statusMessage.textContent =
            "ERROR: Please write a small review.";

        statusMessage.style.color = "#ff5555";

        return;
    }


    // --------------------------------------
    // CREATE REVIEW OBJECT
    // --------------------------------------

    const reviewData = {

        rating: selectedRating,

        description: reviewText,

        date: new Date().toLocaleString(),

        timestamp: Date.now()

    };


    // --------------------------------------
    // SAVE TO BROWSER LOCAL STORAGE
    // --------------------------------------

    let previousReviews =
        JSON.parse(localStorage.getItem("websiteReviews")) || [];

    previousReviews.push(reviewData);

    localStorage.setItem(
        "websiteReviews",
        JSON.stringify(previousReviews)
    );


    // --------------------------------------
    // SUCCESS MESSAGE
    // --------------------------------------

    statusMessage.textContent =
        "✓ REVIEW SAVED SUCCESSFULLY";

    statusMessage.style.color = "#00ff88";


    // Disable button after submission
    submitBtn.disabled = true;

    submitBtn.style.opacity = "0.5";

    submitBtn.querySelector("span").textContent =
        "REVIEW_SUBMITTED";


    // Optional: clear input
    reviewBox.value = "";

    charCount.textContent = "0";

});


// ------------------------------------------
// DEBUG FUNCTION
// ------------------------------------------
// You can open browser console (F12)
// and type:
//
// getReviews()
//
// to see saved reviews.
//
// ------------------------------------------

function getReviews() {

    return JSON.parse(
        localStorage.getItem("websiteReviews")
    ) || [];

}