const flood_data = {
  labels: ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'],
  datasets: [
    {
      label: '강우',
      data: [0,0,0,0,10, 20, 30, 40],
      order: 2,      
    }, {
      label: '수위',
      data: [20,20,20,20, 25, 28, 50, 40, 35],
      type: 'line',
      order: 1,
      backgroundColor:'#6CA1FA' 
    }
  ]
};
const chartFlood = document.getElementById('chart_flood');
const floodChart = new Chart(chartFlood, {
  type: 'bar',
  data: flood_data,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    layout:{
      padding:{top:20}
    },
    plugins: {
      legend:{
        position:'right',
        align:'start',
        labels:{
          boxWidth:15,boxHeight:6,
        }
      },
    },
    elements:{
      line:{borderColor:'#D0ECFC',borderWidth:1},
      bar:{backgroundColor:'#cd49c0'},
    },
    scales: {
      x:{
        grid:{display:false},
      },
      y:{
        border:{color:'#6ca0fa'},
        ticks:{stepSize:10,color:'#000',font:{size:9}},
      },
    }      
  }
});