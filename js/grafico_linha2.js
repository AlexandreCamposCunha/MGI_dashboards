google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart(array_geral) {
    var meuArray2 = [    ['Ano', 'Vendas', 'Lucros'],
    ['2020',  1000,      400],
    ['2021',  1170,      460],
    ['2022',  660,       1120],
    ['2023',  1030,      540]
        ];
    var meuArray = meuArray2;
    console.log(meuArray)
    var data = google.visualization.arrayToDataTable(meuArray);
  
    var options = {
      title: 'Vendas e lucros por ano',
      curveType: 'function',
      legend: { position: 'bottom' },
      chartArea: {width: '80%', height: '80%'},
      responsive: true
    };
  
    var chart = new google.visualization.LineChart(document.getElementById('line-chart'));
  
    chart.draw(data, options);
  }