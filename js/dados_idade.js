function transforma_float(numero){
    let muda_virgula=numero.replace(',','.');
    let numero_decimal=parseInt(muda_virgula);
    return numero_decimal
}
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
        let Ativos=[]
        let Aposentados=[]
        let Pensionistas=[]
        for (let i = 0; i < myAnos.length; i++) {
            for (const objeto of data) {
                if (objeto.Ano === myAnos[i] && objeto.Grupo === 'Servidores' && objeto.Descricao==='Idade media (anos)' && objeto.Poder==='Executivo') {
                    //Trasforma em string o Ano
                    idade_ativos=transforma_float(objeto.Geral)
                    Ativos.push(idade_ativos);
                    condA=1;
                }
                else if (objeto.Ano === myAnos[i] && objeto.Grupo === 'Pensionistas' && objeto.Descricao==='Idade media (anos)' && objeto.Poder==='Executivo') {
                    idade_pensionistas=transforma_float(objeto.Geral)
                    Pensionistas.push(idade_pensionistas);
                    condB=1;
                }
                else if (objeto.Ano === myAnos[i] && objeto.Grupo === 'Aposentados' && objeto.Descricao==='Idade media (anos)' && objeto.Poder==='Executivo') {
                    idade_aposentados=transforma_float(objeto.Geral)
                    Aposentados.push(idade_aposentados);
                    condC=1;
                }
                else{
                    
                }
                
          }
        }
        array_geral.push(Ativos);
        array_geral.push(Aposentados);
        array_geral.push(Pensionistas);
        console.log(array_geral);
        cria_grafico_linha(myAnos, array_geral[0], array_geral[2], array_geral[1]);
}

