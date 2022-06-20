const likes = document.querySelectorAll(".like");
let likeCounter = 0;
let likeIcon = "";

likes.forEach((like) => {
    like.addEventListener("click", () => {
    likeCounter = like.querySelector(".like__counter");
    likeIcon = like.querySelector(".like__icon");
    if (like.classList.contains("like_pressed")) {
        like.classList.remove("like_pressed");
        likeCounter.textContent = +likeCounter.textContent - 1;
        likeIcon.textContent = "favorite_border";
    } else {
        like.classList.add("like_pressed");
        likeCounter.textContent = +likeCounter.textContent + 1;
        likeIcon.textContent = "favorite";
    }
    });
});