// URL da API do GitHub que retorna o arquivo JSON
let dadosAPI; // declarando a variável global
fetch('https://raw.githubusercontent.com/AlexandreCamposCunha/MGI_dashboards/master/dados_brutos/dados_brutos.json')
  .then(response => response.json())
  .then(data => {
    dadosAPI = data;
    //levando os dados da API para a função processamento
    funcoes_gerais(dadosAPI);
  });


  function outraFuncao(dadosAPI) {
    // Use os dados do arquivo JSON aqui
    console.log(dadosAPI);
  }

  outraFuncao();