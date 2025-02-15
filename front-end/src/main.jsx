import { StrictMode } from "react"; // Importa o componente StrictMode do React, que ajuda a identificar problemas potenciais na aplicação durante o desenvolvimento.

import { createRoot } from "react-dom/client"; // Importa a função createRoot da biblioteca react-dom/client, que é usada para criar a raiz da aplicação React.

import "./index.css"; // Importa o arquivo de estilos CSS (index.css) para aplicar estilos globais à aplicação.

import App from "./App.jsx"; // Importa o componente principal App do arquivo App.jsx, que é o componente raiz da aplicação.

// Cria uma raiz React para o elemento HTML com o ID 'root' e renderiza a aplicação dentro dessa raiz.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
