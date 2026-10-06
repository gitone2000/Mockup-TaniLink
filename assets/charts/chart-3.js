document.addEventListener("DOMContentLoaded", function () {
  Highcharts.chart("chart3", {
    chart: {
      type: "area",
      backgroundColor: false,
    },

    title: {
      text: "Kebutuhan Subsidi",
      style: {
        color: "#ffffff",
      },
    },

    subtitle: {
      text: "Daerah yang paling banyak menanam",
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
        text: "Kebutuhan Subsidi (Unit / Ton)",
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
        '<span style="color:#fff;">Kebutuhan Subsidi: <b>{point.y}</b></span><br>',
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
        name: "Kebutuhan Subsidi",
        data: [
          310, 280, 260, 400, 520, 350, 240, 260, 300, 380, 330, 295
        ],
        color: "rgba(144, 238, 144, 0.45)", // hijau subsidi (transparan)
      },
    ],
  });
});
