
  async function carregarDados() {
    try {
      const response = await fetch('https://raw.githubusercontent.com/AlexandreCamposCunha/MGI_dashboards/master/dados_brutos/dados_brutos.json');
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error('Erro ao carregar dados: ', error);
    }
  }
  
  