let currentTab = "peminjaman";

// Fungsi untuk menampilkan halaman Laporan
function showLaporan(event) {
  event.preventDefault();
  document.getElementById("dataKategoriContent").classList.add("hidden");
  document.getElementById("laporanContent").classList.remove("hidden");

  // Update sidebar active state
  document.querySelectorAll("aside nav a").forEach((link) => {
    link.classList.remove("bg-blue-500", "text-white");
    link.classList.add("text-gray-600", "hover:bg-gray-100");
  });
  event.currentTarget.classList.remove("text-gray-600", "hover:bg-gray-100");
  event.currentTarget.classList.add("bg-blue-500", "text-white");
}

// Fungsi untuk switch tab
function switchTab(tabName) {
  currentTab = tabName;

  // Update button text
  const reportTypeText = {
    peminjaman: "Peminjaman Barang",
    pengembalian: "Pengembalian Barang",
    rusak: "Barang Rusak",
  };

  document.getElementById("reportType").textContent = reportTypeText[tabName];

  // Visual feedback
  const buttons = document.querySelectorAll(
    '#laporanContent button[onclick^="switchTab"]'
  );
  buttons.forEach((btn) => {
    btn.classList.remove("ring-4", "ring-opacity-50");
  });

  const activeBtn = document.getElementById(
    "tab" + tabName.charAt(0).toUpperCase() + tabName.slice(1)
  );
  activeBtn.classList.add("ring-4", "ring-opacity-50");

  // Add animation
  const tabContent = document.getElementById("tabContent");
  tabContent.style.opacity = "0";
  setTimeout(() => {
    tabContent.style.opacity = "1";
  }, 100);
}

// Fungsi untuk download laporan
function downloadReport() {
  const reportData = {
    peminjaman: {
      filename: "Laporan_Peminjaman_Barang.csv",
      headers: [
        "No",
        "Nama Peminjam",
        "Barang",
        "Kategori",
        "Tanggal Pinjam",
        "Status",
      ],
      data: [
        [
          "1",
          "Ahmad Rifai",
          "Traktor Roda 2",
          "Alat Pertanian",
          "2024-01-15",
          "Dipinjam",
        ],
        [
          "2",
          "Siti Nurjanah",
          "Mesin Panen Padi",
          "Alat Pertanian",
          "2024-01-16",
          "Dipinjam",
        ],
        [
          "3",
          "Budi Santoso",
          "Alat Semprot",
          "Alat Pertanian",
          "2024-01-17",
          "Dipinjam",
        ],
        [
          "4",
          "Dewi Lestari",
          "Mesin Pembersih Padi",
          "Alat Pertanian",
          "2024-01-18",
          "Dipinjam",
        ],
      ],
    },
    pengembalian: {
      filename: "Laporan_Pengembalian_Barang.csv",
      headers: [
        "No",
        "Nama Peminjam",
        "Barang",
        "Tanggal Pinjam",
        "Tanggal Kembali",
        "Kondisi",
      ],
      data: [
        [
          "1",
          "Eko Prasetyo",
          "Traktor Roda 2",
          "2024-01-10",
          "2024-01-14",
          "Baik",
        ],
        [
          "2",
          "Rina Safitri",
          "Mesin Panen Padi",
          "2024-01-11",
          "2024-01-15",
          "Baik",
        ],
        [
          "3",
          "Agus Setiawan",
          "Alat Semprot",
          "2024-01-12",
          "2024-01-16",
          "Baik",
        ],
      ],
    },
    rusak: {
      filename: "Laporan_Barang_Rusak.csv",
      headers: [
        "No",
        "Nama Barang",
        "Kategori",
        "Tanggal Rusak",
        "Kerusakan",
        "Status",
      ],
      data: [
        [
          "1",
          "Traktor Roda 2",
          "Alat Pertanian",
          "2024-01-20",
          "Mesin Mati",
          "Dalam Perbaikan",
        ],
        [
          "2",
          "Mesin Pembersih Padi",
          "Alat Pertanian",
          "2024-01-21",
          "Belt Putus",
          "Menunggu Sparepart",
        ],
        [
          "3",
          "Alat Semprot",
          "Alat Pertanian",
          "2024-01-22",
          "Selang Bocor",
          "Diperbaiki",
        ],
        [
          "4",
          "Mesin Panen Padi",
          "Alat Pertanian",
          "2024-01-23",
          "Roda Patah",
          "Dalam Perbaikan",
        ],
      ],
    },
  };

  const report = reportData[currentTab];
  let csvContent = report.headers.join(",") + "\n";
  report.data.forEach((row) => {
    csvContent += row.join(",") + "\n";
  });

  // Create blob and download
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", report.filename);
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Show success message
  const downloadBtn = document.getElementById("downloadBtn");
  const originalText = downloadBtn.innerHTML;
  downloadBtn.innerHTML =
    '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Download Berhasil!';
  downloadBtn.classList.remove("bg-blue-500", "hover:bg-blue-600");
  downloadBtn.classList.add("bg-green-500");

  setTimeout(() => {
    downloadBtn.innerHTML = originalText;
    downloadBtn.classList.remove("bg-green-500");
    downloadBtn.classList.add("bg-blue-500", "hover:bg-blue-600");
  }, 2000);
}

// Fungsi untuk tombol Hapus
document.addEventListener("DOMContentLoaded", function () {
  const deleteButtons = document.querySelectorAll('button:has-text("Hapus")');
  deleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
        console.log("Data dihapus");
      }
    });
  });
});
