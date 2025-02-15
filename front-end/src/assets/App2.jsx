import React from "react";

// Arrow Function
const App2 = () => {
  return <h1>Olá, Mundo!</h1>;
};

export default App2;

// rafce (React Arrow Function Component Export)
// const App2 = () => <h1>Olá, Mundo!</h1>

// Nomeação de Componentes
// Segue a nomeação PascalCase (Todas as palavras juntas começando cada palavra com maisculas)

// Nomeação de Variavel, Função...
// camelCase (Todas as palavras juntas sendo a primeira com minuscula e as demais maisculas)

// Export default, posso importar com qualquer nome e sem chaves
// Export "sem default" só posso importar entre chaves e com o nome exportado

// Selfing closing tag
// <Header></Header>
// <Header/>

// Nomeação de classe em CSS
// Metodologia BEM
// Blocks
// Elementes
// Modifiers
// bloco__elemento--modificador
// header
// header__link--small
// item-list__header
// Nomes compostos são separados por -
// ite

// Tag vazia em React se chama fragement  ou fragmento

// Componentes recebem "props"

// <Strict Mode> Serve para testar duas vezes o codigo a fim de prevenir erros. Se fizer uma merda pode passar batido, dificilmente passa batido se for testado duas vezes!


// Operador Ternario
// if (5 === "5") {
//     console.log ("É verdadeiro")
// } else {
//     console.log ("É falso")
// }
// VM1011:4 É falso
// undefined
// if (5 == "5") {
//     console.log ("É verdadeiro")
// } else {
//     console.log ("É falso")
// }
// VM1014:2 É verdadeiro
// undefined
// 5 === "5" ? console.log ("É verdadeiro") : console.log ("É falso")
// VM1036:1 É falso
// undefined
// 5 == "5" ? console.log ("É verdadeiro") : console.log ("É falso")
// VM1087:1 É verdadeiro

 {
   /* {items === 5 ? (
          <>
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
          </>
        ) : (
          <>
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
          </>
        )} */
 }