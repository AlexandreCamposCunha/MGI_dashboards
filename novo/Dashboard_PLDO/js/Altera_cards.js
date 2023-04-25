//pega os valores originais dos cards
var divOriginal_valor1 = document.getElementById("info_card1").innerHTML;
var divOriginal_valor2 = document.getElementById("info_card2").innerHTML;
var divOriginal_valor3 = document.getElementById("info_card3").innerHTML;
var divOriginal_valor4 = document.getElementById("info_card4").innerHTML;
var divOriginal_title1 = document.getElementById("title_card1").innerHTML;
var divOriginal_title2 = document.getElementById("title_card2").innerHTML;
var divOriginal_title3 = document.getElementById("title_card3").innerHTML;
var divOriginal_title4 = document.getElementById("title_card4").innerHTML;
function altera_cards(dados, dados_selecionado){

    // Cria o json filtrado para anos
    let novoObjeto={};
    if(dados_selecionado[0].length > 0){
      //Alterando array de strings para anos
      const arrayDeInteiros = dados_selecionado[0].map(str => parseInt(str, 10))
      console.log(arrayDeInteiros);
      //Indica a variavel de anos escolhidos
      const anosDesejados = arrayDeInteiros;
      //Filtra o json com os anos selecionados
      const chavesFiltradas = Object.keys(dados).filter(chave => anosDesejados.includes(dados[chave].Ano));
      //Cria um json filtrado com os dados escolhidos
      novoObjeto = Object.fromEntries(
        chavesFiltradas.map(chave => [chave, dados[chave]])
      );
      }
    
    else{
        novoObjeto = dados;
    }

    //Cria o filtro para o grupo
    if(dados_selecionado[1].length > 0){
        //Indica a variavel de anos escolhidos
        const Grupos_Desejados = dados_selecionado[1];
        //Filtra o json com os anos selecionados
        const chavesFiltradas = Object.keys(novoObjeto).filter(chave => Grupos_Desejados.includes(novoObjeto[chave].Grupo));
        //Cria um json filtrado com os dados escolhidos
        novoObjeto = Object.fromEntries(
          chavesFiltradas.map(chave => [chave, novoObjeto[chave]])
        );
        }
      
      else{
          novoObjeto = novoObjeto;
      }

    
      //Cria o filtro para os poderes
    if(dados_selecionado[2].length > 0){
        //Indica a variavel de anos escolhidos
        const Grupos_Desejados = dados_selecionado[2];
        //Filtra o json com os anos selecionados
        const chavesFiltradas = Object.keys(novoObjeto).filter(chave => Grupos_Desejados.includes(novoObjeto[chave].Poder));
        //Cria um json filtrado com os dados escolhidos
        novoObjeto = Object.fromEntries(
          chavesFiltradas.map(chave => [chave, novoObjeto[chave]])
        );
        }
      
      else{
          novoObjeto = novoObjeto;
      }


   console.log(novoObjeto);

      
    
        if(dados_selecionado.length === 0){
            
            document.getElementById("info_card1").innerHTML=divOriginal_valor1
            document.getElementById("info_card2").innerHTML=divOriginal_valor2
            document.getElementById("info_card3").innerHTML=divOriginal_valor3
            document.getElementById("info_card4").innerHTML=divOriginal_valor4
            document.getElementById("title_card1").innerHTML=divOriginal_title1
            document.getElementById("title_card2").innerHTML=divOriginal_title2
            document.getElementById("title_card3").innerHTML=divOriginal_title3
            document.getElementById("title_card4").innerHTML=divOriginal_title4
        }
        else{
            //Altera o titulo da Primeiro Card
            document.getElementById("info_card1").innerHTML="sei"
            document.getElementById("info_card2").innerHTML=divOriginal_valor2
            document.getElementById("info_card3").innerHTML=divOriginal_valor3
            document.getElementById("info_card4").innerHTML=divOriginal_valor4
            document.getElementById("title_card1").innerHTML=divOriginal_title1
            document.getElementById("title_card2").innerHTML=divOriginal_title2
            document.getElementById("title_card3").innerHTML=divOriginal_title3
            document.getElementById("title_card4").innerHTML=divOriginal_title4
        }
      
}