document.getElementById("btnAiSmart").addEventListener("click", function () {
  const outputTanaman = document.querySelector(".outputTanaman");
  const outputAlatSewa = document.querySelector(".outputAlatSewa");
  const cardTanaman = document.querySelectorAll(".cardTanaman");
  const cardAlatSewa = document.querySelectorAll(".cardAlat");
  const loading = document.querySelectorAll(".eventLoading")

  setTimeout(() => {
    outputTanaman.classList.replace("hidden", "block");
    outputAlatSewa.classList.replace("hidden", "block");

    cardTanaman.forEach((card) => {
        card.classList.add("animateOutput")
    })
    cardAlatSewa.forEach((card) => {
        card.classList.add("animateOutput")
    })
  }, 2000);
});
