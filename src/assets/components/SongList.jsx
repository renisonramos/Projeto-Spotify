import React from "react"; // Importa a biblioteca React, essencial para criar componentes e interfaces de usuário.
import SongItem from "./SongItem"; // Importa o componente SongItem do arquivo "./SongItem.jsx".
import { useState } from "react"; // Importa o hook useState do React para gerenciar o estado do componente.

const SongList = ({ songsArray }) => {
  // Define um componente funcional chamado SongList que recebe o prop "songsArray".
  // let items = 5; // Variável "items" comentada (inicialmente definida como 5).
  const [items, setItems] = useState(5); // Define o estado "items" com valor inicial de 5 e a função "setItems" para atualizá-lo usando o hook useState.

  return (
    <div className="song-list">
      {" "}
      {/* Elemento div com a classe "song-list" para estilização da lista de músicas. */}
      {songsArray // Itera sobre o array de músicas.
        .filter((currentValue, index) => index < items) // Filtra o array para exibir apenas os "items" primeiros elementos.
        .map(
          (
            currentSongObj,
            index // Mapeia os elementos filtrados para componentes SongItem.
          ) => (
            <SongItem {...currentSongObj} index={index} key={index} /> // Renderiza o componente SongItem para cada música, passando as propriedades da música como props e definindo uma chave única.
          )
        )}
      <div // Elemento div com a classe "song-list__see-more" para estilização do botão "Ver mais".
        className="song-list__see-more"
        onClick={() => {
          // Define a função a ser executada quando o botão "Ver mais" for clicado.
          // items += 5; // Incrementa a variável "items" (comentada).
          setItems(items + 5); // Atualiza o estado "items" incrementando-o em 5, o que fará com que mais músicas sejam exibidas.
        }}
      >
        Ver mais
      </div>
    </div>
  );
};

export default SongList; // Exporta o componente SongList para que ele possa ser utilizado em outros arquivos.
