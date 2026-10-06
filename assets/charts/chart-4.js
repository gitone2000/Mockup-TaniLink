document.addEventListener("DOMContentLoaded", function () {
  Highcharts.chart("chart4", {
    chart: {
      type: "area",
      backgroundColor: false,
    },

    title: {
      text: "Grafik Dompet Digital",
      style: {
        color: "#000000", // Hitam karena header section kamu bg putih
      },
    },

    subtitle: {
      text: "Data transaksi berdasarkan dompet digital",
      style: {
        color: "#6b7280", // abu-abu halus
      },
    },

    xAxis: {
      categories: ["Dana", "OVO", "Gopay", "ShopeePay", "LinkAja"],
      labels: {
        style: {
          color: "#000", // hitam karena background putih
        },
      },
      title: {
        text: "Dompet Digital",
        style: { color: "#000" },
      },
    },

    yAxis: {
      title: {
        text: "Jumlah Transaksi",
        style: {
          color: "#000",
        },
      },
      labels: {
        style: {
          color: "#000",
        },
      },
    },

    tooltip: {
      shared: true,
      backgroundColor: "#333",
      borderColor: "#fff",
      style: { color: "#fff" },
      headerFormat:
        '<span style="font-size:12px; color:#fff;"><b>{point.key}</b></span><br>',
      pointFormat:
        '<span style="color:#fff;">Total Transaksi: <b>{point.y}</b></span><br>',
    },

    legend: {
      itemStyle: {
        color: "#000",
      },
    },

    plotOptions: {
      area: {
        stacking: "normal",
        lineColor: "#000000",
        lineWidth: 1,
        marker: {
          lineWidth: 1,
          lineColor: "#000000",
        },
      },
    },

    series: [
      {
        name: "Jumlah Transaksi",
        data: [120, 98, 135, 150, 70],
        color: "rgba(255, 193, 7, 0.45)",
      },
    ],
  });
});
