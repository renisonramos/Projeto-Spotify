import React from "react"; // Importa a biblioteca React, essencial para criar componentes e interfaces de usuário.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importa o componente FontAwesomeIcon da biblioteca "@fortawesome/react-fontawesome".
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons"; // Importa o ícone de "play" da biblioteca "@fortawesome/free-solid-svg-icons".
import { Link } from "react-router-dom"; // Importa o componente Link da biblioteca "react-router-dom".

const SingleItem = ({ id, name, image, banner, artist, idPath }) => {
  // Define um componente funcional chamado SingleItem que recebe vários props.
  return (
    <Link to={`${idPath}/${id}`} className="single-item">
      {" "}
      {/* Componente Link que cria um link para a página de detalhes do item (artista ou música). */}
      <div className="single-item__div-image-button">
        {" "}
        {/* Elemento div com a classe "single-item__div-image-button" para estilização da imagem e do botão. */}
        <div className="single-item__div-image">
          {" "}
          {/* Elemento div com a classe "single-item__div-image" para estilização da imagem. */}
          <img
            className="single-item__image" // Aplica a classe "single-item__image" para estilização da imagem.
            src={image} // Define a URL da imagem com base no prop "image".
            alt={`Imagem do Artista ${name}`} // Define o texto alternativo da imagem com base no nome do artista.
          />
        </div>
        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />{" "}
        {/* Ícone de "play" usando o componente FontAwesomeIcon. */}
      </div>
      <div className="single-item__texts">
        {" "}
        {/* Elemento div com a classe "single-item__texts" para estilização dos textos. */}
        <div className="single-item__2lines">
          {" "}
          {/* Elemento div com a classe "single-item__2lines" para limitar o número de linhas do título. */}
          <p className="single-item__title">{name}</p>{" "}
          {/* Título do item com a classe "single-item__title" para estilização. */}
        </div>
        <p className="single-item__type">
          {" "}
          {/* Elemento p que exibe o tipo do item (artista ou música). */}
          {artist ?? "Artista"}{" "}
          {/* Exibe o nome do artista se estiver disponível, caso contrário, exibe "Artista". */}
        </p>
      </div>
    </Link>
  );
};

export default SingleItem; // Exporta o componente SingleItem para que ele possa ser utilizado em outros arquivos.
