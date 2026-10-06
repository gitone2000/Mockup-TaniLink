const data = [
  {
    id: 1,
    gambarAlat: 2,
    namaAlat: "Mesin Pembersih Padi",
    hargaSewa: "Rp.250.000",
  },
  {
    id: 2,
    gambarAlat: 3,
    namaAlat: "Mesin Panen Padi",
    hargaSewa: "Rp.200.000",
  },
  {
    id: 3,
    gambarAlat: 4,
    namaAlat: "Alat Semprot Tanaman",
    hargaSewa: "Rp.50.000",
  },
  {
    id: 4,
    gambarAlat: 5,
    namaAlat: "Mesin Pemotong Rumput",
    hargaSewa: "Rp.130.000",
  },
  {
    id: 5,
    gambarAlat: 6,
    namaAlat: "Mesin Traktor Roda 2",
    hargaSewa: "Rp.300.000",
  },
  {
    id: 6,
    gambarAlat: 7,
    namaAlat: "Hand Traktor",
    hargaSewa: "Rp.280.000",
  },
  {
    id: 7,
    gambarAlat: 8,
    namaAlat: "Mesin Traktor Roda 4",
    hargaSewa: "Rp.300.000",
  },
  {
    id: 8,
    gambarAlat: 9,
    namaAlat: "Traktor Mini",
    hargaSewa: "Rp.250.000",
  },
];

const cards = document.getElementById("cards");

data.forEach((item) => {
  const card = document.createElement("li");
  card.className = "cardItem";
  card.classList.add(
    "h-full",
    "rounded",
    "border",
    "border-neutral-200",
    "p-3",
    "cursor-pointer",
    "overflow-hidden",
    "transition-all",
    "duration-300",
    "ease-out",
    "hover:shadow-lg",
    "hover:-translate-y-1",
    "hover:border-transparent"
  );
  card.setAttribute("id", `${item.id}`);

  card.innerHTML = `
        <img src="assets/img/Gambar Alat Sewa/${
          item.gambarAlat
        }.png" class="gambarAlat w-full h-36 object-cover rounded" id="" alt="">
        <div>
            <h2 class="namaAlat font-medium text-lg">${item.namaAlat}</h2>
            <h3 class="hargaAlat text-md">${item.hargaSewa}</h3>
        </div>
        <div class="w-full flex lg:justify-between lg:items-center gap-2 lg:gap-4 flex-col lg:flex-row">
            <div class="flex md:w-full gap-px">
                ${'<svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>'.repeat(
                  5
                )}
            </div>
            <button type="button" class="onClick self-end flex-1 w-full bg-lime-600 px-3 py-1 rounded text-white font-medium cursor-pointer">
                Sewa
            </button>
        </div>
    `;

  cards.append(card);
});


const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const modalGambar = document.getElementById("modalGambar");
const modalNama = document.getElementById("modalNama");
const modalHarga = document.getElementById("modalHarga");

cards.addEventListener("click", function (e) {
  const card = e.target.closest(".cardItem");
  if (!card) return;

  const id = parseInt(card.id);
  const item = data.find((x) => x.id === id);

  modalGambar.src = `assets/img/Gambar Alat Sewa/${item.gambarAlat}.png`;
  modalNama.textContent = item.namaAlat;
  modalHarga.textContent = item.hargaSewa;

  modal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

function finishPayment() {
  setTimeout(() => {
    alert("Mohon menunggu konfirmasi pembayaran!");

    setTimeout(() => {
      alert("Pembayaran berhasil, Alat siap disewa!");
    }, 1000);
    modal.classList.add("hidden");
  }, 2000);
}
