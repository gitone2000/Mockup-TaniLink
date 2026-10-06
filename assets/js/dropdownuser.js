const btn = document.getElementById("adminMenuBtn");
const menu = document.getElementById("adminDropdown");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// klik luar dropdown → close
document.addEventListener("click", function (e) {
  if (!btn.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.add("hidden");
  }
});
