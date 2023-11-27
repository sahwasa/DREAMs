const data = {
  labels: ['07시','08시','09시','10시','11시','12시','13시','14시','15시','16시','17시','18시','19시','20시','21시','22시','23시','0시',],
  datasets: [
    {
      // label: false,
      data:  [24,24,24,25,26,28,29,31,31,32,32,32,32,31,30,29,28,27],
      borderColor:'#d0d6de',
      // backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
    }
  ]
};
const chartTemp = document.getElementById('chart_temp');
const myChart = new Chart(chartTemp, {
  type: 'line',
  data: data,
  plugins: [ChartDataLabels],
  options: {
    responsive: true,
    maintainAspectRatio: false,
    layout:{
      padding:{left:22, right:22}
    },
    plugins: {
      legend: {
        display:false,
      },
      datalabels: {
        color: 'black',
        anchor: 'center',
        align: 'end',
        backgroundColor:'white',
        formatter: function(value, context) {
            return value+'˚'; // Display the actual data value
        }
      },
      tooltip: {
        enabled: false,
      }
    },
    scales: {
      x:{
        border:{display:false},
        ticks:{display: false},
      },
      y:{
        display:false,
      },
    }      
  }
});
