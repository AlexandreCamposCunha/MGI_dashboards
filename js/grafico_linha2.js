
// obtendo a referência ao canvas
const chartCanvas = document.getElementById('line_Chart');

// criando os dados do gráfico
function cria_grafico_linha(anos, Ativos, Aposentados, Pensionistas){
const data = {
  labels: anos,
  datasets: [{
    label: 'Servidores Ativos',
    data: Ativos,
    borderColor: 'blue',
    borderWidth: 1,
    fill: false
  },
  {
    label: 'Aposentados',
    data: Aposentados,
    borderColor: 'red',
    borderWidth: 1,
    fill: false
  },
  {
    label: 'Pensionistas',
    data: Pensionistas,
    borderColor: 'green',
    borderWidth: 1,
    fill: false
  },
]
};


// configurando o gráfico
const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Média de Idade dos Servidores'
      },
      legend: {
        position: 'right',
      }
    },
    scales: {
      x:{
        grid: {
          display: false
      }
    },
      y:{
        grid: {
          display: false
      }

      }

    }
  }
}

// criando o gráfico
const myChart = new Chart(chartCanvas, config);
}
