fetch('../dados_brutos/dados_brutos.json')
  .then(response => response.json())
  .then(data => console.log(data));