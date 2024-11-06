const chart_compare = {
  labels: ['1h','2h','3h','4h','5h','6h'],
  datasets: [
    {
      label: '수위',
      data: [3,10,70,78,35,78,20],
      type: 'line',
      // order: 1,
      borderColor:'#34a6e7',
      backgroundColor:'#34a6e795',
      fill: true
    }
  ]
};
const chartFlood = document.getElementById('chart_compare');
const floodChart = new Chart(chartFlood, {
  type: 'line',
  data: chart_compare,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    layout:{
      padding:{top:30}
    },
    plugins: {   
      legend:{display:false},
    },
    elements:{
      line:{borderColor:'#D0ECFC',borderWidth:1},
      bar:{backgroundColor:'#cd49c0'},
    },
    scales: {
      x:{
      },
      y:{
        stacked:true,
        border:{color:'#6ca0fa'},
      },
    }      
  }
});