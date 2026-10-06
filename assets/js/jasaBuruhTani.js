const data = [
  {
    id: 1,
    gambarJasa: 11,
    namaJasa: "Penyiapan Lahan",
    hargaJasa: "Rp.250.000",
    deskripsi: "Menggarap sawah seperti mencangkul dan membajak",
  },
  {
    id: 2,
    gambarJasa: 12,
    namaJasa: "Penanaman",
    hargaJasa: "Rp.200.000",
    deskripsi: "Menanam bibit padi",
  },
  {
    id: 3,
    gambarJasa: 13,
    namaJasa: "Pemeliharaan Tanaman",
    hargaJasa: "Rp.50.000",
    deskripsi: "Melakukan penyiraman, penyemprotan, pemupukan dan penyulaman atau menyiangi gulma",
  },
  {
    id: 4,
    gambarJasa: 14,
    namaJasa: "Pemanenan",
    hargaJasa: "Rp.130.000",
    deskripsi: "Pemanenan hasil tanaman padi",
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
    "hover:border-transparent",
    "flex",
    "flex-col",
    "justify-between",
    "gap-2"
  );
  card.setAttribute("id", `${item.id}`);

  card.innerHTML = `
        <img src="assets/img/Gambar Jasa Buruh Tani/${
          item.gambarJasa
        }.png" class="gambarAlat w-full h-36 object-cover rounded" id="" alt="">
        <div class="h-full flex flex-col">
            <h2 class="namaJasa font-medium text-lg">${item.namaJasa}</h2>
            <h3 class="hargaJasa text-md font-medium text-lime-700">${item.hargaJasa}</h3>
            <h3 class="deskripsi text-md">${item.deskripsi}</h3>
        </div>
        <div class="w-full flex lg:justify-between lg:items-center gap-2 lg:gap-4 flex-col lg:flex-row">
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
const modalDeskripsi = document.getElementById("modalDeskripsi");

cards.addEventListener("click", function (e) {
  const card = e.target.closest(".cardItem");
  if (!card) return;

  const id = parseInt(card.id);
  const item = data.find((x) => x.id === id);

  modalGambar.src = `assets/img/Gambar Jasa Buruh Tani/${item.gambarJasa}.png`;
  modalNama.textContent = item.namaJasa;
  modalHarga.textContent = item.hargaJasa;
  modalDeskripsi.textContent = item.deskripsi;

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
      alert("Pembayaran berhasil, Jasa siap disewa!");
    }, 1000);
    modal.classList.add("hidden");
  }, 2000);
}
