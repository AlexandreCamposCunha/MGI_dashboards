//Cria a função valores unicos
function valores_unicos(data, nome_chave){
    //
    //Pegando os valores das chaves Ano
    const chave_escolhida = data.map(objeto => objeto[nome_chave]);

    //Unicos
    let valores_unicos = Array.from(new Set(chave_escolhida));
    return valores_unicos
}

//Cria a função ordenar
function ordenar(array_escolhido){
    // Classificar o Array
    array_escolhido.sort((a, b) => a - b);
    return array_escolhido
}
function funcoes_gerais(dadosAPI){
    //Trás os dados brutos para as funções
    var dados_brutos=dadosAPI;
    console.log(dados_brutos);

    
    //Separa os anos unicos
    let anos_unicos = valores_unicos(dados_brutos, "Ano");
    
    //Ordena os valores anos
    let anos_unicos_inter= ordenar(anos_unicos)
    

    // Trasformar o array em string
    const anos_unicos_f = anos_unicos_inter;
    console.log(anos_unicos_f);
    
    //Insere options no card Ano
    // seleciona o elemento "select" do HTML pelo seu ID
    const selectElement = document.getElementById("js-choice-ano");

    // cria um array de opções para adicionar ao "select"
    const options = anos_unicos_f;
    console.log(options);
    // loop "for" para criar e adicionar cada opção ao "select"
    for (let i = 0; i < options.length; i++) {
    const option = document.createElement("option"); // cria um elemento "option"
    option.text = options[i]; // define o texto da opção
    selectElement.add(option); // adiciona a opção ao "select"
    }

    // Passando a Função para o Choice.js
    const choices = new Choices("#js-choice-ano", {
    allowHTML: true,
    removeItems: true,
    removeItemButton: true
  });

  
  // usando select
  printarEscolhas(dados_brutos);

}

//pega os valores originais dos cards
var divOriginal1 = document.getElementById("info_card1").innerHTML;
var divOriginal2 = document.getElementById("info_card2").innerHTML;
var divOriginal3 = document.getElementById("info_card3").innerHTML;
var divOriginal4 = document.getElementById("info_card4").innerHTML;

//Função identifica as escolhas
function printarEscolhas(dados_brutos) {
    const selectElement = document.getElementById("js-choice-ano"); // Obtém o elemento select pelo ID
    const escolhasSelecionadas = Array.from(selectElement.selectedOptions).map(option => option.value); // Obtém os valores selecionados como um array
    console.log(escolhasSelecionadas);
  }
  
  