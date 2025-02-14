import React from "react"; // Importa a biblioteca React, essencial para criar componentes e interfaces de usuário.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importa o componente FontAwesomeIcon da biblioteca "@fortawesome/react-fontawesome".
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons"; // Importa o ícone de "play" da biblioteca "@fortawesome/free-solid-svg-icons".
import { Link, useParams } from "react-router-dom"; // Importa os componentes Link e useParams da biblioteca "react-router-dom".
import SongList from "../assets/components/SongList"; // Importa o componente SongList do arquivo "../assets/components/SongList.jsx".
import { artistArray } from "../assets/database/artists"; // Importa o array de artistas do arquivo "../assets/database/artists.js".
import { songsArray } from "../assets/database/songs"; // Importa o array de músicas do arquivo "../assets/database/songs.js".

const Artist = () => {
  // Define um componente funcional chamado Artist.
  const { id } = useParams(); // Obtém o parâmetro "id" da URL usando o hook useParams.

  const { name, banner } = artistArray.filter(
    // Filtra o array de artistas para encontrar o artista com o ID correspondente.
    (currentArtistObj) => currentArtistObj.id === Number(id) // Converte o ID para número para garantir a comparação correta.
  )[0]; // Seleciona o primeiro elemento do array resultante (o artista encontrado).

  const songsArrayFromArtist = songsArray.filter(
    // Filtra o array de músicas para encontrar as músicas do artista selecionado.
    (currentSongObj) => currentSongObj.artist === name // Compara o nome do artista da música com o nome do artista selecionado.
  );

  const randomIndex = Math.floor(
    // Gera um índice aleatório para selecionar uma música do artista.
    Math.random() * (songsArrayFromArtist.length - 1) // Garante que o índice esteja dentro dos limites do array.
  );

  const randomIdFromArtist = songsArrayFromArtist[randomIndex].id; // Obtém o ID da música aleatória do artista.
  console.log(randomIdFromArtist); // Imprime o ID da música aleatória no console (para fins de depuração).

  // console.log(songsArrayFromArtist);

  return (
    <div className="artist">
      {" "}
      {/* Elemento div com a classe "artist" para estilização da página do artista. */}
      <div // Elemento div com a classe "artist__header" para estilização do cabeçalho da página.
        className="artist__header"
        style={{
          // Define o estilo de fundo do cabeçalho com uma imagem de banner e um gradiente linear.
          backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)), url(${banner})`,
        }}
      >
        <h2 className="artist__title">{name}</h2>{" "}
        {/* Elemento h2 que exibe o nome do artista com a classe "artist__title" para estilização. */}
      </div>
      <div className="artist__body">
        {" "}
        {/* Elemento div com a classe "artist__body" para estilização do corpo da página. */}
        <h2>Populares</h2> {/* Elemento h2 que exibe o título "Populares". */}
        <SongList songsArray={songsArrayFromArtist} />{" "}
        {/* Renderiza o componente SongList para exibir as músicas do artista. */}
      </div>
      <Link to={`/song/${randomIdFromArtist}`}>
        {" "}
        {/* Componente Link que cria um link para a página da música aleatória do artista. */}
        <FontAwesomeIcon // Ícone de "play" usando o componente FontAwesomeIcon.
          className="single-item__icon single-item__icon--artist"
          icon={faCirclePlay}
        />
      </Link>
    </div>
  );
};

export default Artist;
