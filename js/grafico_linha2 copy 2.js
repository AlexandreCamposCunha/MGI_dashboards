
// obtendo a referência ao canvas
const chartCanvas = document.getElementById('line_Chart');

// criando os dados do gráfico
const data = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
  datasets: [{
    label: 'Vendas',
    data: [100, 200, 300, 400, 500, 600],
    borderColor: 'blue',
    borderWidth: 1,
    fill: false
  },
  {
    label: 'Doações',
    data: [50, 200, 300, 400, 500, 700],
    borderColor: 'red',
    borderWidth: 1,
    fill: false
  }
]
};

// configurando o gráfico
const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      }
    }
  }
};

// criando o gráfico
const myChart = new Chart(chartCanvas, config);
