var dom = document.getElementById('chart-container');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};


var option;

option = {
    
  title: {
    text: 'Crecimiento Verde Equilibrado',
    textStyle: {
      color: '#fff'
    }
  },

   

    
  tooltip: {
    trigger: 'axis',
    
  },
  legend: {
    
    data: ['Energias Renovables', 'Tasa de incidencia en la pobreza', 'PIB PPA'],
    textStyle: {
        color: '#fff'
      },
    
    left: 'right',
    orient: 'vertical',
    
    
    itemGap: 5,
    
    
   

    
    
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    
    type: 'category',
    boundaryGap: false,
    data: ['2023', '2050', '2063',],
    
    axisLabel: {
        textStyle: {
            color: '#fff'
        }
        },
  },
  yAxis: {
    type: 'value',
    axisLabel: {
        textStyle: {
            color: '#fff'
        }
        },
    
  },
  series: [
    {
      name: 'Energias Renovables',
      type: 'line',
        lineStyle: {
            color: '#93D250',
            width: 2
        },
        
        itemStyle: {
            color: '#93D250'
        },
        
      
     
      data: [2.02, 17.43, 54.41]
    },
    {
      name: 'Tasa de incidencia en la pobreza',
      type: 'line',
      
      lineStyle: {
        color: '#fecc00',
        width: 2
    },
    
    itemStyle: {
        color: '#fecc00'
    },
  
      data: [122.4, 0.63, -0]
    },
    {
        lineStyle: {
            color: '#c7042c',
            width: 2
        },
        
        itemStyle: {
            color: '#c7042c'
        },
        name: 'PIB PPA',
        type: 'line',
        
        data: [3.9, 10.58, 22.15]
      },
    
  ]
};

if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);