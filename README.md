# Projeto Spotify - Clone da Interface Web


Este é um projeto de interface web inspirado no Spotify, desenvolvido com React, HTML e CSS. O objetivo principal é aprimorar minhas habilidades em desenvolvimento front-end, explorando conceitos de design responsivo, componentes reutilizáveis e estilização moderna.

## O que é o projeto

Este projeto consiste em uma replicação da interface web do Spotify, focando na criação de um layout responsivo e na implementação de componentes reutilizáveis. Ele simula a exibição de playlists, artistas e músicas, utilizando dados estáticos (mock data) para representar o conteúdo.

## Principais Funcionalidades

*   **Layout Responsivo:** A interface se adapta a diferentes tamanhos de tela, garantindo uma boa experiência em dispositivos móveis, tablets e desktops.
*   **Componentes Reutilizáveis:** O projeto utiliza componentes React reutilizáveis para exibir listas de playlists, artistas e músicas, facilitando a manutenção e expansão do código.
*   **Estilização Moderna:** A estilização é inspirada no design do Spotify, utilizando variáveis CSS, transições suaves e uma paleta de cores consistente.
*   **Dados Estáticos (Mock Data):** O projeto utiliza dados estáticos para simular a exibição de conteúdo, permitindo o desenvolvimento da interface sem depender de uma API externa.

## Como Executá-lo

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/renisonramos/Projeto-Spotify
    ```
2.  **Navegue até o diretório do projeto:**

    ```bash
    cd Projeto-Spotify
    ```
3.  **Instale as dependências:**

    ```bash
    npm install
    ```
4.  **Execute a aplicação:**

    ```bash
    npm run dev
    ```
5.  **Abra o navegador:**

    Acesse `http://localhost:5173` (ou a porta que for exibida no terminal) para visualizar a aplicação.

## Diário de Bordo (Roadmap)

Este diário de bordo registra o progresso do projeto, as decisões tomadas e os desafios superados.

### Dia 1: Estrutura do Projeto e Componentes Iniciais (Data: [10/02/2025])

*   **Atividades:**
    *   Configuração inicial do projeto Spotify com React + Vite.
    *   Criação dos componentes `Header` e `Main`.
    *   Definição da estrutura básica do layout.
    *   Estilização inicial com CSS.
*   **Desafios:**
    *   Entendimento da estrutura de pastas recomendada para projetos React.
    *   Configuração das variáveis CSS para cores e propriedades.
*   **Decisões:**
    *   Utilização do Vite para agilizar o desenvolvimento.
    *   Adoção de uma abordagem de componentes reutilizáveis desde o início.

    ### Dia 2 e 3: Implementação das Rotas e Exibição de Dados Dinâmicos (Data: [11/02/2025 e 12/02/2025])

*   **Atividades:**
    *   Instalação da biblioteca `react-router-dom`.
    *   Criação dos componentes básicos para as páginas principais (Home, Artistas, Músicas).
    *   Definição das rotas no componente `App.jsx` usando `BrowserRouter`, `Routes` e `Route`.
    *   Adição dos componentes `Link` no cabeçalho (`Header.jsx`) para navegar entre as páginas.
    *   Implementação da lógica para exibir as listas de artistas e músicas na página principal.
    *   Movimentação das listas de artistas e músicas da pasta `database` para o componente `Main`.
    *   Configuração da exibição de múltiplos artistas e músicas, com base em um parâmetro (ex: limite de itens a serem exibidos).
*   **Desafios:**
    *   Entendimento da estrutura de rotas do `react-router-dom`.
    *   Configuração correta dos componentes `Route` e `Link`.
    *   Organização dos componentes das páginas em uma pasta separada (`pages`).
    *   Implementação da lógica para exibir as listas de forma dinâmica.
    *   Garantia de que as listas de artistas e músicas sejam exibidas corretamente após a movimentação dos arquivos.
*   **Decisões:**
    *   Utilização do `react-router-dom` para facilitar a criação de rotas e a navegação entre as páginas.
    *   Adoção de uma estrutura de pastas organizada para os componentes das páginas.
    *   Exibição das listas de artistas e músicas de forma dinâmica para evitar a repetição de código e facilitar a manutenção.

    ## Diário de Bordo

### Dia 3 e 4: Implementação da Navegação Dinâmica e Controle do Player (Data: [13/02/2025 e 14/02/2025])

*   **Atividades:**

    *   Implementação de lógica para exibir as 200 músicas na página de músicas e os 20 artistas na página de artistas, utilizando o hook `useLocation` do `react-router-dom`.
    *   Criação da página de artistas (`PaginaArtistas.jsx`) com foco inicial na estrutura e no layout.
    *   Integração de ícones para os controles de "voltar" e "próximo" no player de música, utilizando a biblioteca Font Awesome (já importada para o player).
    *   Utilização de Objetos JavaScript para definir a "inteligência" das páginas, permitindo que a aplicação determine quais informações devem ser exibidas com base na URL acessada.
*   **Desafios:**

    *   Gerenciar a exibição seletiva de informações (músicas vs. artistas) com base no hook `useLocation`.
    *   Estruturar a página de artistas (`PaginaArtistas.jsx`) de forma organizada e escalável.
    *   Integrar os controles de navegação (voltar/próximo) de forma funcional e intuitiva.
    *   Mapear as URLs aos dados dos artistas.
*   **Decisões:**

    *   Adoção do hook `useLocation` para criar páginas dinâmicas e responsivas ao contexto da URL.
    *   Criação de um componente dedicado para a página de artistas, permitindo uma maior organização e manutenção do código.
    *   Reutilização da biblioteca Font Awesome para os ícones de controle do player, evitando a importação de dependências desnecessárias.
    *   Utilização de objetos para mapear as URLs dos artistas, permitindo que a aplicação determine quais informações devem ser exibidas.

    ## Di 5: Desafiador (Data: [15/02/2025])

**Objetivo:** Implementar a funcionalidade de reprodução de música e integrar com a API.

### Construção da API e Conexão com o Banco de Dados

*   **Atividades:**

    *   Iniciou a construção da API com Express.
    *   Criou a estrutura de pastas para o back-end (incluindo a pasta `api`).
    *   Inicializou o projeto Node.js com `npm init -y` e instalou as dependências.
    *   Configurou o arquivo `server.js` para definir as rotas da API.
    *   Conectou-se ao MongoDB Atlas e obteve a string de conexão.
    *   Adicionou o endereço IP à lista de IPs permitidos no MongoDB Atlas.
    *   Resolveu o erro "bad auth : authentication failed" e utilizou o MongoDB Compass para testar a conexão.
    *   Adicionou e modificou os dados e o modelo criado dentro do MongoDb
*   **Desafios:**

    *   Configuração correta do ambiente Node.js e do Express.
    *   Gerenciamento de permissões e autenticação no MongoDB Atlas.
    *   Correção de erros de caminho e configuração.
    *   Insegurança no momento de colocar os dados
*   **Decisões:**

    *   Utilização do Express para facilitar a criação da API.
    *   Adoção de uma estrutura modular para melhor organização do código.
    *   Entendimento do JavaScript
    *   Utilização da desestruturação do JavaScript
        
### Integração Front-end com Back-end e Lógica do Player

*   **Atividades:**

    *   Conectou o front-end ao back-end para buscar os dados da API.
    *   Implementou a lógica do botão "Play" para iniciar e pausar a reprodução da música.
    *   Adicionou interações para a barra de progresso, permitindo que o usuário avance ou retroceda na música.
    *   Utilização do JavaScript
        console.log
        useEffect

*   **Desafios:**

    *   Correção de erros de conexão e configuração.
    *   Implementação da lógica de reprodução da música.
    *   Ajuste das interações da barra de progresso.

*   **Decisões:**

    *   Utilização do React e JavaScript para criar os componentes visuais e controlar a lógica da aplicação.

### Próximos Passos:

*   Implementar a lógica completa do player (próxima, anterior, volume, etc.).
*   Aprimorar a interface do usuário e a experiência do usuário.
*   Realizar o deploy do projeto.
*   Subir para o Github
*   Adicionar um efeito visual