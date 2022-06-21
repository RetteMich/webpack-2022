const ratingSettings = {
    size: 5,
    half: false,
    icon: "star_border",
    startPosition: 0,
};
const ratingBox = document.querySelectorAll(".rating");
const stars = rating.document.querySelectorAll(".star");

ratingBox.forEach((rating) => {
    // Перебирает все, вызывает функцию для каждого.
    createRating(rating);
});

function createRating(rating) {
    for (let i = 0; i < ratingSettings.size; i++) {
        const star = document.createElement("div");
        star.classList.add("star", "material-icons");
        star.innerHTML = "star_border"; //star
        rating.append(star);
    }

    //const stars = rating.document.querySelectorAll(".star");
    stars.addEventListener("click", (event) => {
        setRating(stars, [...rating.children].indexOf(event.target));
    });
}

// ratingBox.forEach((rating) => {
//     for (let i = 0; i < ratingSettings.size; i++) {
//         const star = document.createElement("div");
//         star.classList.add("star", "material-icons");
//         star.innerHTML = "star_border"; //star
//         rating.append(star);

//         rating.addEventListener("click", () => {
//             star.addEventListener("click", (event) => {
//                 setRating(rating, [...rating.children].indexOf(event.target));
//             });
//         });
//     }
// });

// ratingBox.forEach((rating) => {
//     createRating(rating);

//     // rating.addEventListener("click", (event) => {
//     //     if (event.target.classList.contains("star")) {
//     //         setRating(rating);
//     //     }
//     // });
// });

// function setRating(rating) {
//     let score = [...rating.children].indexOf(event.target);
//     let stars = document.querySelectorAll(".star");
//     for (let i = 0; i < score + 1; i++) {
//         stars[i].innerHTML = "star";
//     }
// }

function setRating(stars, index) {
    for (let i = 0; i < stars.length; i++) {
        if (i < index + 1) {
            stars[i].innerHTML = "star";
        } else {
            stars[i].innerHTML = "star_border";
        }
    }
}
