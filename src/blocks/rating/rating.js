const ratingSettings = {
    size: 5,
    half: false,
    icon: "star_border",
    startPosition: 0,
};
const ratingBox = document.querySelectorAll(".rating");

ratingBox.forEach((rating) => {
    createRating(rating);
});

function createRating(rating) {
    const star = document.createElement("div");
    star.classList.add("star", "material-icons");
    star.innerHTML = "star_border"; //star
    for (let i = 0; i < ratingSettings.size; i++) {
        const star = document.createElement("div");
        star.classList.add("star", "material-icons");
        star.innerHTML = "star_border"; //star
        rating.append(star);
    }
    listenStars(rating);
}
function listenStars(rating) {
    const stars = rating.querySelectorAll(".star");
    stars.forEach((star) => {
        star.addEventListener("mousemove", (event) => {
            if (!rating.classList.contains("fixed"))
                setRating(rating, [...rating.children].indexOf(event.target));
        });
        star.addEventListener("mouseleave", (event) => {
            if (!rating.classList.contains("fixed")) clearRating(rating);
        });
        star.addEventListener("click", (event) => {
            if (rating.classList.contains("fixed")) {
                rating.classList.remove("fixed");
            } else {
                rating.classList.add("fixed");
                setRating(rating, [...rating.children].indexOf(event.target));
            }
        });
    });
}

function setRating(rating, index) {
    let stars = rating.querySelectorAll(".star");
    for (let i = 0; i < stars.length; i++) {
        if (i < index + 1) {
            stars[i].innerHTML = "star";
        } else {
            stars[i].innerHTML = "star_border";
        }
    }
}

function clearRating(rating) {
    let stars = rating.querySelectorAll(".star");
    for (let i = 0; i < stars.length; i++) {
        stars[i].innerHTML = "star_border";
    }
}
