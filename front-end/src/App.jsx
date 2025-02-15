import React from "react"; // Importa a biblioteca React, essencial para criar componentes e interfaces de usuário.

import Header from "./assets/components/Header"; // Importa o componente Header, que representa o cabeçalho da aplicação.

import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importa componentes do react-router-dom para configurar a navegação da aplicação.

import Home from "./pages/Home"; // Importa o componente Home, que representa a página inicial da aplicação.

import Artists from "./pages/Artists"; // Importa o componente Artists, que representa a página de listagem de artistas.

import Artist from "./pages/Artist"; // Importa o componente Artist, que representa a página de detalhes de um artista específico.

import Songs from "./pages/Songs"; // Importa o componente Songs, que representa a página de listagem de músicas.

import Song from "./pages/Song"; // Importa o componente Song, que representa a página de detalhes de uma música específica.

const App = () => {
  return (
    <BrowserRouter>
      {" "}
      {/* Envolve a aplicação com o BrowserRouter, habilitando a navegação através de rotas. */}
      <Header />{" "}

      {/* Renderiza o componente Header na parte superior da aplicação. */}
      <Routes>
        {" "}
        {/* Define as rotas da aplicação. */}
        <Route path="/" element={<Home />} />{" "}

        {/* Define a rota para a página inicial, renderizando o componente Home. */}
        <Route path="/artists" element={<Artists />} />{" "}

        {/* Define a rota para a página de listagem de artistas, renderizando o componente Artists. */}
        <Route path="/artist/:id" element={<Artist />} />{" "}

        {/* Define a rota para a página de detalhes de um artista específico, renderizando o componente Artist e passando o ID do artista como um parâmetro na URL. */}
        <Route path="/songs" element={<Songs />} />{" "}

        {/* Define a rota para a página de listagem de músicas, renderizando o componente Songs. */}
        <Route path="/song/:id" element={<Song />} />{" "}
        
        {/* Define a rota para a página de detalhes de uma música específica, renderizando o componente Song e passando o ID da música como um parâmetro na URL. */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
