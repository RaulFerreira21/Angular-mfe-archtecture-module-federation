# Angular MFE archtecture using Module Federation

Este projeto foi desenvolvido como parte de um desafio proposto.

O projeto consiste em uma aplicação um pouco complexa, com três projetos rodando em conjunto, foi todo desenvolvido usando [Angular](https://v15.angular.io/docs) na versão 15, e para lidar com componentes mais elaborados, [Angular Material](https://v15.material.angular.dev/). 
O projeto permite o cadastro de novos usuários e a listagem dos mesmo; sendo divido como a parte de cadastro em um MFE e a parte de listagem em outro. Os projetos são gerenciados em um projeto casca (shell) que faz o controle de navegação entre eles
Foi elaborado um pequeno esboço do layout para o projeto, e um diagrama de fluxos que podem ser realizados na aplicação, você pode encontrar tudo nesse projeto do [Figma](https://www.figma.com/board/7QpJk183bQAZmWOI1CPWpj/Prot%C3%B3tipo-MFEs?node-id=0-1&p=f&t=7eOcuL8GzFSPBd2R-0)

## Funcionalidades
  As principais funcionalidades do projeto são:

- Cadastro de usuários através de nome e email
- Visualização dos usuários cadastrados

## Tecnologias Utilizadas

- [Angular](https://v15.angular.io/docs)
- [Angular Material](https://v15.material.angular.dev/)
- [json-server](https://github.com/typicode/json-server) (mock API)

## Como rodar o projeto
O projeto foi desenvolvido na v15 do angular, então é recomendável que você possua uma versão compatível do Node.js, como a 18.13.0, que foi a utilizada nesse projeto.

1. **Clone o repositório e instale as dependências:**
   Ao clonar o repositório, entre na pasta "workspace" e rode o comando:
   ```bash
   npm install
   ```
   
2. **Rode todos os projetos:**
   No VsCode abra três terminais e rode um comando em cada terminal, separadamente:
   ```bash
     ng serve shell -o
     ng serve mfe-cadastro
     ng serve mfe-sucesso
   ```

3. **Inicie o servidor de dados (json-server):**
   ```bash
   npm install -g json-server
   json-server --watch json-server/db.json
   ```

4. **Acesse a aplicação:**
   Abra [http://localhost:4200](http://localhost:4200) no seu navegador.
   Após abrir a aplicação no seu navegador, aparecerá uma tela inicial, se tudo rodou certinho, você estará olhando para o componente da Home dentro pro projeto casca (shell), e poderá, a partir dele, navegar para os outros dois MFEs presentes na aplicação


## Observações

- O projeto utiliza o `json-server` para simular uma API REST. Certifique-se de deixá-lo rodando para que as operações funcionem corretamente.
- Os dados não são persistidos em um banco real, apenas no arquivo `db.json`.

