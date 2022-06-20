const ratingSettings = {
    size: 5,
    half: false,
    icon: "star",
};
const ratingBox = document.querySelectorAll(".rating");

function createRating(rating) {
    for (let i = 0; i < ratingSettings.size; i++) {
        let star = document.createElement("div");
        star.classList.add("star", "material-icons");
        star.innerHTML = "star_border"; //star
        rating.append(star);
    }
}

ratingBox.forEach((rating) => {
    createRating(rating);
    like.addEventListener("click", () => {
        
    }
});
