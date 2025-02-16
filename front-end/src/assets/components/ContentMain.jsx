import React from "react"; // Importa a biblioteca React, essencial para criar componentes e interfaces de usuário.

import ItemList from "./ItemList"; // Importa o componente ItemList do arquivo "./ItemList.jsx".

import { artistArray } from "../database/artists"; // Importa o array de artistas do arquivo "../database/artists.js".

import { songsArray } from "../database/songs"; // Importa o array de músicas do arquivo "../database/songs.js".

const Main = ({ type }) => {
  // Define um componente funcional chamado Main que recebe um prop chamado "type".
  return (
    <div className="main">
      {" "}
      {/* Elemento div com a classe "main" para estilização do conteúdo principal. */}
      {/* ItemList de Artistas */}
      {type === "artists" || type === undefined ? ( // Renderiza o componente ItemList de artistas se o prop "type" for "artists" ou undefined.
        <ItemList
          title="Artistas" // Define o título da lista como "Artistas".
          items={5} // Define o número máximo de itens a serem exibidos como 5.
          itemsArray={artistArray} // Define o array de itens como o array de artistas.
          path="/artists" // Define o caminho da rota para a página de listagem de artistas como "/artists".
          idPath="artist" // Define o prefixo para o parâmetro de ID na URL como "artist".
        />
      ) : (
        <></> // Se o prop "type" não for "artists" nem undefined, não renderiza nada.
      )}
      {/* ItemList de Músicas */}
      {type === "songs" || type === undefined ? ( // Renderiza o componente ItemList de músicas se o prop "type" for "songs" ou undefined.
        <ItemList
          title="Músicas" // Define o título da lista como "Músicas".
          items={14} // Define o número máximo de itens a serem exibidos como 14.
          itemsArray={songsArray} // Define o array de itens como o array de músicas.
          path="/songs" // Define o caminho da rota para a página de listagem de músicas como "/songs".
          idPath="song" // Define o prefixo para o parâmetro de ID na URL como "song".
        />
      ) : (
        <></> // Se o prop "type" não for "songs" nem undefined, não renderiza nada.
      )}
    </div>
  );
};

export default Main; // Exporta o componente Main para que ele possa ser utilizado em outros arquivos.
