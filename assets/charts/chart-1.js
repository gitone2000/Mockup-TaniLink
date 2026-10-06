document.addEventListener("DOMContentLoaded", function () {
  Highcharts.chart("mainChart", {
    chart: {
      type: "area",
      backgroundColor: false,
    },

    title: {
      text: "Prediksi Panen",
      style: {
        color: "#ffffff",
      },
    },

    subtitle: {
      text: "Berapa hektar sawah yang ditanam (per kecamatan)",
      style: {
        color: "#e5e7eb",
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
          color: "#ffffff",
        },
      },
      title: {
        text: "Kecamatan",
        style: { color: "#fff" },
      },
    },

    yAxis: {
      title: {
        text: "Luas Tanam (Ha)",
        style: {
          color: "#ffffff",
        },
      },
      labels: {
        style: {
          color: "#ffffff",
        },
      },
    },

    tooltip: {
      shared: true,
      headerFormat:
        '<span style="font-size:12px; color:#fff;"><b>{point.key}</b></span><br>',
      pointFormat:
        '<span style="color:#fff;">Prediksi: <b>{point.y} Ha</b></span><br>',
    },

    legend: {
      itemStyle: {
        color: "#ffffff",
      },
    },

    plotOptions: {
      area: {
        stacking: "normal",
        lineColor: "#ffffff",
        lineWidth: 1,
        marker: {
          lineWidth: 1,
          lineColor: "#ffffff",
        },
      },
    },

    series: [
      {
        name: "Prediksi Luas Tanam (Ha)",
        data: [
          520, 480, 450, 600, 750, 530, 410, 460, 490, 580, 540, 505,
        ],
        color: "rgba(144, 238, 144, 0.45)",
      },
    ],
  });
});
