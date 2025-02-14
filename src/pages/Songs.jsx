import React from "react"; // Importa a biblioteca React, essencial para criar componentes e interfaces de usuário.
import Main from "../assets/components/main"; // Importa o componente Main do arquivo "../assets/components/main.jsx".

const Songs = () => {
  // Define um componente funcional chamado Songs.
  return <Main type="songs" />; // Renderiza o componente Main e passa o prop "type" com o valor "songs".
};

export default Songs; // Exporta o componente Songs para que ele possa ser utilizado em outros arquivos.
