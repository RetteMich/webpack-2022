const likes = document.querySelectorAll(".like");
let likeCounter = 0;

likes.forEach((like) => {
  like.addEventListener("click", () => {
    likeCounter = like.querySelector(".like__counter");
    if (like.classList.contains("like-pressed")) {
      like.classList.remove("like-pressed");
      likeCounter.textContent = +likeCounter.textContent - 1;
    } else {
      like.classList.add("like-pressed");
      likeCounter.textContent = +likeCounter.textContent + 1;
    }
  });
});
