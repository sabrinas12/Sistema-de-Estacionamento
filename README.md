**Sistema de Estacionamento** :car:

Sistema de Estacionamento Web, criado para conclusão do Projeto Integrador – Desenvolvimento de Sistemas da Universidade de Santo Amaro. O sistema em si tem o propósito de atender aos requisitos propostos pelo projeto, que é suprir a necessidade de uma empresa implementando uma solução tecnológica. 
Nesse projeto, além das tecnologias utilizadas, foi empregado o conceito de integração (API) para permitir a comunicação entre os códigos de back-end e front-end, devido ao uso do banco de dados para armazenamento de dados. Na construção de interfaces de usuário, foram utilizados protocolos HTTP para realizar as requisições e manipular os dados. Isso possibilitou uma comunicação eficiente entre os diferentes componentes do sistema, garantindo sua funcionalidade adequada.

**Tecnologias Utilizadas:**

•	CSS

•	HTML

•	Javascript

•	MySQL

**Como rodar o projeto** :white_check_mark:

Após clonar o repositório na máquina local, é necessário ter instalado o Visual Studio Code, o MySQL e o Node.js para rodar o projeto. Para salvar as informações no banco de dados, no arquivo server.js, altere as informações para instanciar o banco de dados de acordo com as configurações locais do sistema. Após isso, execute a seguinte query SQL para criar o banco de dados e a tabela necessários:

```
CREATE DATABASE estacionamento;
CREATE TABLE veiculos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    cpf VARCHAR(20) NOT NULL,
    placa VARCHAR(8) NOT NULL,
    marca VARCHAR(10) NOT NULL,
    modelo VARCHAR(15) NOT NULL,
    data_entrada DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

Após a configuração do banco de dados, utilize o Node.js para executar o código do arquivo server.js, executando o comando node `server.js` no terminal. Em seguida, acesse o projeto inserindo a URL `http://localhost:3000/index.html` no navegador.

**Aviso:** Para utilizar o projeto, é necessário dissipar as dependências da pasta `node_modules` para executar o código no terminal.
