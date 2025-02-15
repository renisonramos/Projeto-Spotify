import React from "react"; // Importa a biblioteca React, essencial para criar componentes e interfaces de usuário.
import Main from "../assets/components/main"; // Importa o componente Main do arquivo "../assets/components/main.jsx".

const Artists = () => {
  // Define um componente funcional chamado Artists.
  return <Main type="artists" />; // Renderiza o componente Main e passa o prop "type" com o valor "artists".
};

export default Artists; // Exporta o componente Artists para que ele possa ser utilizado em outros arquivos.
