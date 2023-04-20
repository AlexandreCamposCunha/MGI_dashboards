google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    /* Gráfico de linha com duas linhas para cada grupo de poder, 
    uma mostrando a média de idade dos servidores e outra mostrando a média de idade dos aposentados. */
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Ano', 'Vendas', 'Lucros'],
        ['2020',  1000,      400],
        ['2021',  1170,      460],
        ['2022',  660,       1120],
        ['2023',  1030,      540]
      ]);
  
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