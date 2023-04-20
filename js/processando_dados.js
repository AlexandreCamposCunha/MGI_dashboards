function processamento_dados(data){
    
    // Acessando a propriedade length
    console.log('Número de propriedades:', Object.keys(data).length);
    
    // Acessando as chaves do objeto
    console.log('Chaves:', Object.keys(data));

    // Acessando os valores do objeto
    console.log('Valores:', Object.values(data));

    //Valor uma chave
    console.log(Object.values(data[0]));

    //Chaves unicas
    console.log(Object.keys(data[0]));

    console.log('Ano:', data[0]['Ano']);

    //Pegando os valores das chaves Ano
    const anos = data.map(objeto => objeto.Descricao);

    console.log(anos);

    //Unicos
    const anosUnicos = Array.from(new Set(anos));
    console.log(anosUnicos);

    //usando for em um Json

    for (const objeto of data) {
        if (objeto.Ano === 2023 && objeto.Grupo === 'Servidores' && objeto.Descricao==='Remuneracao media (R$)' && objeto.Poder==='Executivo') {
          console.log(`A remuneração média de 2023 é ${objeto.Geral}`);
        }
      }

      //Criando para grafico de linhas
      //preciso de um array com alguns arrays seguindo a quantidade de anos com tres itens dentro
      let todos=[]
      let array_geral=[];
      
      // Converter o Set em um Array
      const anos_calendario = data.map(objeto => objeto.Ano);
      //Unicos
      const anosUni = Array.from(new Set(anos_calendario));
    let myAnos = Array.from(anosUni);
    // Classificar o Array
    myAnos.sort((a, b) => a - b);
    console.log(myAnos);

        let condA=0;
        let condB=0;
        let condC=0;
        cont=0;
        for (let i = 0; i < myAnos.length; i++) {
            for (const objeto of data) {
                if (objeto.Ano === myAnos[i] && objeto.Grupo === 'Servidores' && objeto.Descricao==='Idade media (anos)' && objeto.Poder==='Executivo') {
                    todos.push(objeto.Geral);
                    condA=1;
                }
                else if (objeto.Ano === myAnos[i] && objeto.Grupo === 'Pensionistas' && objeto.Descricao==='Idade media (anos)' && objeto.Poder==='Executivo') {
                    todos.push(objeto.Geral);
                    condB=1;
                }
                else if (objeto.Ano === myAnos[i] && objeto.Grupo === 'Aposentados' && objeto.Descricao==='Idade media (anos)' && objeto.Poder==='Executivo') {
                    todos.push(objeto.Geral);
                    condC=1;
                }
                else{
                    
                }
                if(condA===1 && condB===1 && condC===1 && todos.length===3){
                    array_geral.push(todos);
                    condA=0;
                    condB=0;
                    condC=0;
                    cont=cont+1
                    console.log(cont);
                }
          }
        }
        console.log(array_geral);

       

}