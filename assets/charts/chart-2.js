document.addEventListener("DOMContentLoaded", function () {
  Highcharts.chart("chart2", {
    chart: {
      type: "area",
      backgroundColor: false, // transparan
    },

    title: {
      text: "Titik Bahaya",
      style: {
        color: "#ffffff", // warna teks title
      },
    },

    subtitle: {
      text: "Daerah yang sedang menghadapi serangan hama",
      style: {
        color: "#e5e7eb", // subtitle putih-abu
      },
    },

    xAxis: {
      categories: [
        "Donorojo",
        "Punung",
        "Pringkuku",
        "Pacitan",
        "Kebonagung",
        "Arjosari",
        "Nawangan",
        "Bandar",
        "Tegalombo",
        "Tulakan",
        "Ngadirojo",
        "Sudimoro",
      ],
      labels: {
        style: {
          color: "#fff",
          fontSize: "12px",
        },
      },
      title: {
        text: "Kecamatan",
        style: { color: "#fff" },
      },
    },

    yAxis: {
      title: {
        useHTML: false,
        text: "",
        style: {
          color: "#ffffff", // warna teks title Y
        },
      },
      labels: {
        style: {
          color: "#ffffff", // warna angka Y
        },
      },
    },

    tooltip: {
      shared: true,
      headerFormat:
        '<span style="font-size:12px; color:#fff;"><b>{point.key}</b></span><br>',
      style: {
        color: "#000", // warna isi tooltip (hitam, karena box putih default)
      },
    },

    legend: {
      itemStyle: {
        color: "#ffffff", // warna teks legend (jika lebih dari 1 series)
      },
    },

    plotOptions: {
      area: {
        stacking: "normal",
        lineColor: "#ffffff", // warna garis border line
        lineWidth: 1,
        marker: {
          lineWidth: 1,
          lineColor: "#ffffff",
        },
      },
    },

    series: [
      {
        name: "Data",
        data: [
          13234, 12729, 11533, 17798, 10398, 12811, 15483, 16196, 15060, 13365,
          13301,
        ],
        color: "rgba(144, 238, 144, 0.45)", // warna area (putih transparan)
      },
    ],
  });
});
