function dados_graficos_teste(data){
    // Acessando a propriedade length
    console.log('Número de propriedades:', Object.keys(data).length);
    //Criando para grafico de linhas
      //preciso de um array com alguns arrays seguindo a quantidade de anos com tres itens dentro
      // Converter o Set em um Array
      const anos_calendario = data.map(objeto => objeto.Ano);
      //Unicos
      const anosUni = Array.from(new Set(anos_calendario));
    let myAnos = Array.from(anosUni);
    // Classificar o Array
    myAnos.sort((a, b) => a - b);

        let condA=0;
        let condB=0;
        let condC=0;
        cont=0;
        let array_geral=[];
        for (let i = 0; i < myAnos.length; i++) {
            let todos=[]
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
                }
          }
        }
        console.log(array_geral);

        drawChart(array_geral);
}

