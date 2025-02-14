import React from "react"; // Importa a biblioteca React, essencial para criar componentes e interfaces de usuário.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importa o componente FontAwesomeIcon da biblioteca "@fortawesome/react-fontawesome".

import {
  faCirclePlay,
  faBackwardStep,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons"; // Importa ícones específicos da biblioteca "@fortawesome/free-solid-svg-icons".

import { Link } from "react-router-dom"; // Importa o componente Link da biblioteca "react-router-dom".

const Player = ({ duration, randomIdFromArtist, randomId2FromArtist }) => {
  // Define um componente funcional chamado Player que recebe os props "duration", "randomIdFromArtist" e "randomId2FromArtist".
  
  return (
    <div className="player">
      {" "}
      {/* Elemento div com a classe "player" para estilização do player. */}
      <div className="player__controllers">
        {" "}
        {/* Elemento div com a classe "player__controllers" para estilização dos controles do player. */}
        <Link to={`/song/${randomIdFromArtist}`}>
          {" "}
          {/* Componente Link que cria um link para a página da música anterior. */}
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />{" "}
          {/* Ícone de "voltar" usando o componente FontAwesomeIcon. */}
        </Link>
        <FontAwesomeIcon // Ícone de "play" usando o componente FontAwesomeIcon.
          className="player__icon player__icon--play"
          icon={faCirclePlay}
        />
        <Link to={`/song/${randomId2FromArtist}`}>
          {" "}
          {/* Componente Link que cria um link para a página da próxima música. */}
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />{" "}
          {/* Ícone de "avançar" usando o componente FontAwesomeIcon. */}
        </Link>
      </div>
      <div className="player__progress">
        {" "}
        {/* Elemento div com a classe "player__progress" para estilização da barra de progresso. */}
        <p>00:00</p>{" "}
        {/* Elemento p que exibe o tempo atual da música (fixo em "00:00"). */}
        <div className="player__bar">
          {" "}
          {/* Elemento div com a classe "player__bar" para estilização da barra de progresso. */}
          <div className="player__bar-progress"></div>{" "}
          {/* Elemento div com a classe "player__bar-progress" para estilização da parte preenchida da barra de progresso. */}
        </div>
        <p>{duration}</p>{" "}
        {/* Elemento p que exibe a duração total da música (recebida como prop). */}
      </div>
    </div>
  );
};

export default Player; // Exporta o componente Player para que ele possa ser utilizado em outros arquivos.
