google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

var data = google.visualization.arrayToDataTable([
['Ano', 'Vendas', 'Despesas'],
['2010',  1000,      400],
['2011',  1170,      460],
['2012',  660,       1120],
['2013',  1030,      540]
]);

var options = {
title: 'Vendas e Despesas por Ano',
chartArea: {width: '50%'},
hAxis: {
  title: 'Total',
  minValue: 0
},
vAxis: {
  title: 'Ano'
},
chartArea: {width: '60%', height: '80%'},
responsive: true
};

var chart = new google.visualization.BarChart(document.getElementById('barchart'));

chart.draw(data, options);
}
