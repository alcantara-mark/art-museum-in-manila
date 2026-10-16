const guideName = "Art Museum in Manila";
const currentYear = 2026;
let reviewCount = 3;

const footerCopyrightElement = document.getElementById("copyright-text");
if (footerCopyrightElement) {
    footerCopyrightElement.textContent = `© ${currentYear} ${guideName}. All rights reserved.`;
}

// Museum Ratings (Art in Island, National Museum of Fine Arts, GSIS Museo ng Sining)
const ratingArtInIsland = 4.6;
const ratingFineArts = 4.8;
const ratingGsis = 4.3;

const totalScore = ratingArtInIsland + ratingFineArts + ratingGsis;
const averageRating = (totalScore / reviewCount).toFixed(1);

const calculatedStatsElement = document.getElementById("guide-stats");
if (calculatedStatsElement) {
    calculatedStatsElement.textContent = `Featured Places: ${reviewCount} | Average Rating: ${averageRating} / 5.0`;
}

console.log("Guide Name:", guideName);
console.log("Current Year:", currentYear);
console.log("Total Reviews Count:", reviewCount);

const placeRatingElement = document.getElementById("place-rating-value");

if (placeRatingElement) {
    const numericRating = Number(placeRatingElement.dataset.rating || 4.8);

    let ratingLabel = "";
    if (numericRating >= 4.0) {
        ratingLabel = "Highly recommended";
    } else if (numericRating >= 2.5) {
        ratingLabel = "Worth a visit";
    } else {
        ratingLabel = "Only if you're nearby";
    }

    const ratingLabelElement = document.getElementById("rating-label");
    if (ratingLabelElement) {
        ratingLabelElement.textContent = `Recommendation: ${ratingLabel}`;
    }

    const priceLevel = 2;
    const isOpenNow = true;
    const isGoodOption = (priceLevel <= 2) && (isOpenNow === true);
    const budgetStatus = isGoodOption ? "Good option right now" : "Maybe another time";

    const budgetStatusElement = document.getElementById("budget-status");
    if (budgetStatusElement) {
        budgetStatusElement.textContent = `Visit Status: ${budgetStatus}`;
    }

    const isCloseBy = numericRating >= 4.0; 
    const distanceNote = isCloseBy ? "Walking distance" : "Better to commute";

    const distanceNoteElement = document.getElementById("distance-note");
    if (distanceNoteElement) {
        distanceNoteElement.textContent = `Accessibility: ${distanceNote}`;
    }

    console.log("Active Page Rating:", numericRating);
}