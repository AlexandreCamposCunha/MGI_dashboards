// URL da API do GitHub que retorna o arquivo JSON
let dadosAPI; // declarando a variável global
fetch('https://raw.githubusercontent.com/AlexandreCamposCunha/MGI_dashboards/master/dados_brutos/dados_brutos.json')
  .then(response => response.json())
  .then(data => {
    dadosAPI = data;
    //levando os dados da API para a função processamento
    dados_graficos_teste(dadosAPI);
    processamento_dados(data);
    cards_operacoes(data);
    grafico_linha2(data);
  });
