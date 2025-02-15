import React from "react"; // Importa a biblioteca React, essencial para criar componentes e interfaces de usuário.
import { Link } from "react-router-dom"; // Importa o componente Link da biblioteca "react-router-dom".

const SongItem = ({ image, name, duration, artist, audio, _id, index }) => {
  // Define um componente funcional chamado SongItem que recebe vários props.
  return (
    <Link to={`/song/${_id}`} className="song-item">
      {" "}
      {/* Componente Link que cria um link para a página de detalhes da música. */}
      <div className="song-item__number-album">
        {" "}
        {/* Elemento div com a classe "song-item__number-album" para estilização do número e do álbum da música. */}
        <p>{index + 1}</p>{" "}
        {/* Elemento p que exibe o número da música na lista (índice + 1). */}
        <div className="song-item__album">
          {" "}
          {/* Elemento div com a classe "song-item__album" para estilização do álbum da música. */}
          <img
            className="song-item__image" // Aplica a classe "song-item__image" para estilização da imagem da música.
            src={image} // Define a URL da imagem da música com base no prop "image".
            alt={`Imagem da Música ${name}`} // Define o texto alternativo da imagem da música com base no nome da música.
          />
          <p className="song-item__name">{name}</p>{" "}
          {/* Elemento p que exibe o nome da música com a classe "song-item__name" para estilização. */}
        </div>
      </div>
      <p>{duration}</p>{" "}
      {/* Elemento p que exibe a duração da música com base no prop "duration". */}
    </Link>
  );
};

export default SongItem;
