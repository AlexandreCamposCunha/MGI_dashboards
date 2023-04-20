function cards_operacoes(data){
    //Numero de Servidores Total 2023
    soma=0;
    for (const objeto of data) {
        if (objeto.Ano === 2023 && objeto.Grupo === 'Servidores' && objeto.Descricao==='Quantidade') {
            let numeroInteiro = parseInt(objeto.Geral)
            soma=soma+numeroInteiro
        }
      }
      //Tras o numero de servidores ativos de 2023 no card 1
      document.getElementById('servidores').textContent = soma;

      //Remuneração Média 2023
      let valorMonetario = 0;
      for (const objeto of data) {
        if (objeto.Ano === 2023 && objeto.Grupo === 'Servidores' && objeto.Descricao==='Remuneracao media (R$)' && objeto.Poder==='Executivo') {
            remuneracao1=objeto.Geral.replace(",",".");
            let remuneracao = parseFloat(remuneracao1)
            valorMonetario = remuneracao.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
             console.log(valorMonetario);
        }
      }
      document.getElementById('remuneração').textContent = valorMonetario;

    //Média de Idade 2023 dos Servdidores do Executivo
    let idade_media = 0;
    for (const objeto of data) {
        if (objeto.Ano === 2023 && objeto.Grupo === 'Servidores' && objeto.Descricao==='Idade media (anos)' && objeto.Poder==='Executivo') {
            idade_media2=objeto.Geral.replace(",",".");
            let idade_media1=parseFloat(idade_media2);
            idade_media=Math.round(idade_media1);
        }
      }
      //Trazendo a média de idade arredondada
      document.getElementById('idade_media').textContent = idade_media;

    //Numero de Poderes
    //Pegando os valores das chaves Poderes
    const poderes = data.map(objeto => objeto.Poder);
    //Unicos
    const poderesUnicos = Array.from(new Set(poderes));
    //Trazendo o numero de poderes 
    document.getElementById('poderes').textContent = poderesUnicos.length;

}