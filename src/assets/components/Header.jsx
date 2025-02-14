import React from "react"; // Importa a biblioteca React, essencial para criar componentes e interfaces de usuário.

import logoSpotify from "../logo/spotify-logo.png"; // Importa a imagem do logo do Spotify do diretório "../logo".

import { Link } from "react-router-dom"; // Importa o componente Link da biblioteca "react-router-dom", utilizado para criar links de navegação entre as rotas da aplicação.

const Header = () => {
  // Define um componente funcional chamado Header.
  return (
    <div className="header">
      {" "}
      {/* Elemento div com a classe "header" para estilização do cabeçalho. */}
      <Link to="/">
        {" "}
        {/* Componente Link que cria um link para a página inicial ("/") da aplicação. */}
        <img src={logoSpotify} alt="Logo do Spotify" />{" "}
        {/* Imagem do logo do Spotify com o texto alternativo "Logo do Spotify". */}
      </Link>{" "}
      {/* Fecha o componente Link. */}
      <Link to="/">
        {" "}
        {/* Componente Link que cria um link para a página inicial ("/") da aplicação. */}
        <h1>Spotify</h1>{" "}
        {/* Título "Spotify" que também funciona como link para a página inicial. */}
      </Link>{" "}
      {/* Fecha o componente Link. */}
    </div>
  );
};

export default Header; // Exporta o componente Header para que ele possa ser utilizado em outros arquivos.
