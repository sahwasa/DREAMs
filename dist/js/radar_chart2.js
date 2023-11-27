const data = {
  labels: ['활동공간 확보율', ['광역 도로망', '  접근 계수'],['지역도로망','접근 계수 ']],
  datasets: [{
    label: '포항시 북구',
    data: [80, 80, 80],
    fill: true,
    backgroundColor: '#16c87220',
    borderColor: '#16c872',
    pointBackgroundColor: '#16c872',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: '#16c872'
  }, {
    label: '포항시 남구',
    data: [28, 48, 96],
    fill: true,
    backgroundColor: '#fbc90020',
    borderColor: '#fbc900',
    pointBackgroundColor: '#fbc900',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: '#fbc900'
  }]
};
const ctx = document.getElementById('radarchart');
const options= {      
  elements: {
    line: {
      borderWidth: 1
    }
  },
  plugins: {
    legend:{
      position:'bottom',
      align:'end',
      labels:{boxWidth:10,boxHeight:10,padding:15,color:'#838383',font:{size:11}}
    },
    tooltip:{
      callbacks: {
        titleSpacing:10,
        labelColor: function(context) {
          console.log(context)
          return {
            borderColor: context.dataset.borderColor,
            backgroundColor: context.dataset.backgroundColor,
            borderWidth: 1,
            borderRadius: 2,
          };
        }          
      }
    }
  },
  scales: {
    r:{
      max: 100,min: 0,
      ticks: {stepSize: 20,color:'#000',font:{size:9}},
      grid:{color:'#e5e5e5'},
      angleLines:{color:'#c0c0c0'},
      pointLabels:{color:'#000',font:{size:11, weight:'bold'}}
    }
  }
};
const myChart = new Chart(ctx, {
  type: 'radar',
  data: data,
  options:options
});
const ctx2 = document.getElementById('p_radarchart');
const p_myChart = new Chart(ctx2, {
  type: 'radar',
  data: data,
  options:options
});