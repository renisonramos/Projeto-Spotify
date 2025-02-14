import React from "react"; // Importa a biblioteca React, essencial para criar componentes e interfaces de usuário.
import Player from "../assets/components/Player"; // Importa o componente Player do arquivo "../assets/components/Player.jsx".
import { Link, useParams } from "react-router-dom"; // Importa os componentes Link e useParams da biblioteca "react-router-dom".
import { songsArray } from "../assets/database/songs"; // Importa o array de músicas do arquivo "../assets/database/songs.js".
import { artistArray } from "../assets/database/artists"; // Importa o array de artistas do arquivo "../assets/database/artists.js".

const Song = () => {
  // Define um componente funcional chamado Song.
  const { id } = useParams(); // Obtém o parâmetro "id" da URL usando o hook useParams.

  const { image, name, duration, artist, audio } = songsArray.filter(
    // Filtra o array de músicas para encontrar a música com o ID correspondente.
    (currentSongObj) => currentSongObj.id === Number(id) // Converte o ID para número para garantir a comparação correta.
  )[0]; // Seleciona o primeiro elemento do array resultante (a música encontrada).
  // console.log(songObj);

  const artistObj = artistArray.filter(
    // Filtra o array de artistas para encontrar o artista com o nome correspondente.
    (currentArtistObj) => currentArtistObj.name === artist // Compara o nome do artista da música com o nome do artista no array de artistas.
  )[0]; // Seleciona o primeiro elemento do array resultante (o artista encontrado).

  const songsArrayFromArtist = songsArray.filter(
    // Filtra o array de músicas para encontrar as músicas do artista selecionado.
    (currentSongObj) => currentSongObj.artist === artist // Compara o nome do artista da música com o nome do artista selecionado.
  );
  // console.log(songsArrayFromArtist);

  const randomIdex = Math.floor(
    // Gera um índice aleatório para selecionar uma música do artista.
    Math.random() * (songsArrayFromArtist.length - 1) // Garante que o índice esteja dentro dos limites do array.
  );

  const randomIdex2 = Math.floor(
    // Gera outro índice aleatório para selecionar outra música do artista.
    Math.random() * (songsArrayFromArtist.length - 1) // Garante que o índice esteja dentro dos limites do array.
  );

  const randomIdFromArtist = songsArrayFromArtist[randomIdex].id; // Obtém o ID da primeira música aleatória do artista.
  const randomId2FromArtist = songsArrayFromArtist[randomIdex2].id; // Obtém o ID da segunda música aleatória do artista.

  return (
    <div className="song">
      {" "}
      {/* Elemento div com a classe "song" para estilização da página da música. */}
      <div className="song__container">
        {" "}
        {/* Elemento div com a classe "song__container" para estilização do container da página. */}
        <div className="song__image-container">
          {" "}
          {/* Elemento div com a classe "song__image-container" para estilização da imagem da música. */}
          <img src={image} alt={`Imagem da Música ${name}`} />{" "}
          {/* Elemento img que exibe a imagem da música. */}
        </div>
      </div>
      <div className="song__bar">
        {" "}
        {/* Elemento div com a classe "song__bar" para estilização da barra inferior da página. */}
        <Link to={`/artist/${artistObj.id}`} className="song__artist-image">
          {" "}
          {/* Componente Link que cria um link para a página do artista da música. */}
          <img // Elemento img que exibe a imagem do artista.
            width={75}
            height={75}
            src={artistObj.image}
            alt={`Imagem do Artista ${artist} `}
          />
        </Link>
        <Player // Renderiza o componente Player e passa os props "duration", "randomIdFromArtist" e "randomId2FromArtist".
          duration={duration}
          randomIdFromArtist={randomIdFromArtist}
          randomId2FromArtist={randomId2FromArtist}
        />
        <div>
          {" "}
          {/* Elemento div para agrupar o nome e o artista da música. */}
          <p className="song__name">{name}</p>{" "}
          {/* Elemento p que exibe o nome da música com a classe "song__name" para estilização. */}
          <p>{artist}</p>{" "}
          {/* Elemento p que exibe o nome do artista da música. */}
        </div>
      </div>
    </div>
  );
};

export default Song;
