import React from "react"; // Importa a biblioteca React, essencial para criar componentes e interfaces de usuário.
import SingleItem from "./SingleItem"; // Importa o componente SingleItem do arquivo "./SingleItem.jsx".
import { Link, useLocation } from "react-router-dom"; // Importa os componentes Link e useLocation da biblioteca "react-router-dom".

const itemList = ({ title, items, itemsArray, path, idPath }) => {
  // Define um componente funcional chamado itemList que recebe vários props.
  const { pathname } = useLocation(); // Obtém o caminho da URL atual usando o hook useLocation.
  const isHome = pathname === "/"; // Verifica se o caminho da URL atual é a página inicial ("/").
  const finalItems = isHome ? items : Infinity; // Define o número final de itens a serem exibidos, dependendo se está na página inicial ou não.

  return (
    <div className="item-list">
      {" "}
      {/* Elemento div com a classe "item-list" para estilização da lista de itens. */}
      <div className="item-list__header">
        {" "}
        {/* Elemento div com a classe "item-list__header" para estilização do cabeçalho da lista. */}
        <h2>{title} populares</h2>{" "}
        {/* Título da lista com o texto "populares" concatenado. */}
        {isHome ? ( // Renderiza o link "Mostrar tudo" apenas se estiver na página inicial.
          <Link to={path} className="item-list__link">
            {" "}
            {/* Componente Link que cria um link para a página de listagem de itens. */}
            Mostrar tudo
          </Link>
        ) : (
          <></> // Se não estiver na página inicial, não renderiza nada.
        )}
      </div>
      <div className="item-list__container">
        {" "}
        {/* Elemento div com a classe "item-list__container" para estilização do container da lista. */}
        {itemsArray // Itera sobre o array de itens.
          .filter((currentValue, index) => index < finalItems) // Filtra os itens para exibir apenas os "finalItems" primeiros.
          .map(
            (
              currObj,
              index // Mapeia os itens filtrados para componentes SingleItem.
            ) => (
              <SingleItem
                idPath={idPath} // Passa o prop "idPath" para o componente SingleItem.
                {...currObj} // Passa todos os outros props do objeto atual para o componente SingleItem.
                key={`${title}-${index}`} // Define uma chave única para cada componente SingleItem.
              />
            )
          )}
      </div>
    </div>
  );
};

export default itemList; // Exporta o componente itemList para que ele possa ser utilizado em outros arquivos.
