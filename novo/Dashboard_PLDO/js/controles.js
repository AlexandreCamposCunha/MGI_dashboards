
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

//Função identifica as escolhas
async function printarEscolhas() {
    const dados = await carregarDados();
    const selectElement_ano = document.getElementById("js-choice-ano"); // Obtém o elemento select pelo ID
    const selectElement_grupo = document.getElementById("js-choice-grupo"); // Obtém o elemento select pelo ID
    const selectElement_poder = document.getElementById("js-choice-poder"); // Obtém o elemento select pelo ID
    const selectElement_genero = document.getElementById("js-choice-genero"); // Obtém o elemento select pelo ID

    const escolhasSelecionadas_ano = Array.from(selectElement_ano.selectedOptions).map(option => option.value); // Obtém os valores selecionados como um array
    const escolhasSelecionadas_grupo = Array.from(selectElement_grupo.selectedOptions).map(option => option.value); // Obtém os valores selecionados como um array
    const escolhasSelecionadas_poder = Array.from(selectElement_poder.selectedOptions).map(option => option.value); // Obtém os valores selecionados como um array
    const escolhasSelecionadas_genero = Array.from(selectElement_genero.selectedOptions).map(option => option.value); // Obtém os valores selecionados como um array
    
    let escolhas_finais=[];
    escolhas_finais.push(escolhasSelecionadas_ano);
    escolhas_finais.push(escolhasSelecionadas_grupo);
    escolhas_finais.push(escolhasSelecionadas_poder);
    escolhas_finais.push(escolhasSelecionadas_genero);
    console.log(escolhas_finais);
    altera_cards(dados, escolhas_finais);
}

async function carrega_controles() {
    const dados = await carregarDados();
    console.log(dados);
    //Separa os anos unicos
    let anos_unicos = valores_unicos(dados, "Ano");
    //Separa os grupos unicos
    let grupo_unicos = valores_unicos(dados, "Grupo");
    console.log(grupo_unicos);
    //Separa os Poderes unicos
    let poder_unicos = valores_unicos(dados, "Poder");
    
    //Ordena os valores anos
    let anos_unicos_inter= ordenar(anos_unicos);
    //Ordena os valores grupos
    let grupos_unicos_ordenados= ordenar(grupo_unicos);
    //Ordena os valores poderes
    let poderes_unicos_ordenados= ordenar(poder_unicos);
    // Masculino e feminino
    let generos_unicos_ordenados=['Feminino', 'Masculino'];
    //Insere options no card Ano

        // seleciona o elemento "select" do HTML pelo seu ID
        const selectElement_ano = document.getElementById("js-choice-ano");
        const selectElement_grupo = document.getElementById("js-choice-grupo");
        const selectElement_poder = document.getElementById("js-choice-poder");
        const selectElement_genero = document.getElementById("js-choice-genero");

        // cria um array de opções para adicionar ao "select Ano"
        const options = anos_unicos_inter;
            // loop "for" para criar e adicionar cada opção ao "select"
        for (let i = 0; i < options.length; i++) {
        const option = document.createElement("option"); // cria um elemento "option"
        option.text = options[i]; // define o texto da opção
        selectElement_ano.add(option); // adiciona a opção ao "select"
        }

        // Passando a Função para o Choice.js
            const choices = new Choices("#js-choice-ano", {
            allowHTML: true,
            removeItems: true,
            removeItemButton: true
        }); 

        // cria um array de opções para adicionar ao "select genero"
        const options_grupo = grupos_unicos_ordenados;
            // loop "for" para criar e adicionar cada opção ao "select"
        for (let i = 0; i < options_grupo.length; i++) {
            const option = document.createElement("option"); // cria um elemento "option"
            option.text = options_grupo[i]; // define o texto da opção
            selectElement_grupo.add(option); // adiciona a opção ao "select"
            }

        // Passando a Função para o Choice.js
            const choices2 = new Choices("#js-choice-grupo", {
            allowHTML: true,
            removeItems: true,
            removeItemButton: true
        }); 

        // cria um array de opções para adicionar ao "select Poderes"
        const options_poder = poderes_unicos_ordenados;
            // loop "for" para criar e adicionar cada opção ao "select"
        for (let i = 0; i < options_poder.length; i++) {
        const option = document.createElement("option"); // cria um elemento "option"
        option.text = options_poder[i]; // define o texto da opção
        selectElement_poder.add(option); // adiciona a opção ao "select"
        }

        // Passando a Função para o Choice.js
            const choices3 = new Choices("#js-choice-poder", {
            allowHTML: true,
            removeItems: true,
            removeItemButton: true
        }); 

        // cria um array de opções para adicionar ao "select Gênero"
        const options_genero = generos_unicos_ordenados;
            // loop "for" para criar e adicionar cada opção ao "select"
        for (let i = 0; i < options_genero.length; i++) {
            const option = document.createElement("option"); // cria um elemento "option"
            option.text = options_genero[i]; // define o texto da opção
            selectElement_genero.add(option); // adiciona a opção ao "select"
            }

        // Passando a Função para o Choice.js
            const choices4 = new Choices("#js-choice-genero", {
            allowHTML: true,
            removeItems: true,
            removeItemButton: true
        }); 

}

  


carrega_controles();