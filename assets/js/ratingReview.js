const stars = document.querySelectorAll("#ratingStars span");
stars.forEach((star) => {
  star.addEventListener("mouseenter", () => {
    const val = star.dataset.value;
    stars.forEach((s) =>
      s.classList.toggle("text-yellow-400", s.dataset.value <= val)
    );
  });
  star.addEventListener("mouseleave", () => {
    stars.forEach((s) => s.classList.remove("text-yellow-400"));
  });
});


const filterButtons = document.querySelectorAll("#filterBtn button");
const reviews = document.querySelectorAll("[data-rating]");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filterValue = btn.dataset.filter;

    // Update style active
    filterButtons.forEach((b) => {
      b.classList.remove("bg-lime-600", "text-white");
    });
    btn.classList.add("bg-lime-600", "text-white");

    // Filter logic
    reviews.forEach((review) => {
      const reviewRating = review.dataset.rating;

      if (filterValue === "all" || filterValue === reviewRating) {
        review.style.display = "flex"; // tampilkan
      } else {
        review.style.display = "none"; // sembunyikan
      }
    });
  });
});
